(function () {
  const page = document.body.getAttribute("data-page");

  document.querySelectorAll(".nav-links a[data-page]").forEach((link) => {
    if (link.dataset.page === page) {
      link.classList.add("active");
    }
  });

  const yearNode = document.getElementById("year");
  if (yearNode) {
    yearNode.textContent = String(new Date().getFullYear());
  }

  function setupReveal() {
    const revealNodes = Array.from(document.querySelectorAll(".reveal"));
    if (revealNodes.length === 0) {
      return;
    }

    if (!("IntersectionObserver" in window)) {
      revealNodes.forEach((node) => node.classList.add("visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }
          entry.target.classList.add("visible");
          obs.unobserve(entry.target);
        });
      },
      { threshold: 0.14 }
    );

    revealNodes.forEach((node) => observer.observe(node));
  }

  function setupCarousels() {
    const carouselNodes = Array.from(document.querySelectorAll("[data-carousel]"));
    if (carouselNodes.length === 0) {
      return;
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    carouselNodes.forEach((carousel) => {
      const track = carousel.querySelector(".carousel-track");
      const slides = track ? Array.from(track.querySelectorAll(".carousel-slide")) : [];
      const prevButton = carousel.querySelector("[data-carousel-prev]");
      const nextButton = carousel.querySelector("[data-carousel-next]");
      const dotsNode = carousel.parentElement
        ? carousel.parentElement.querySelector("[data-carousel-dots]")
        : null;

      if (!track || slides.length === 0 || !prevButton || !nextButton) {
        return;
      }

      let index = 0;
      let autoplayId = null;

      function setIndex(nextIndex) {
        const total = slides.length;
        index = (nextIndex + total) % total;
        track.style.transform = `translateX(-${index * 100}%)`;

        if (!dotsNode) {
          return;
        }

        const dots = Array.from(dotsNode.querySelectorAll(".carousel-dot"));
        dots.forEach((dot, dotIndex) => {
          const isActive = dotIndex === index;
          dot.classList.toggle("is-active", isActive);
          dot.setAttribute("aria-current", isActive ? "true" : "false");
        });
      }

      function stopAutoplay() {
        if (autoplayId !== null) {
          window.clearInterval(autoplayId);
          autoplayId = null;
        }
      }

      function startAutoplay() {
        if (prefersReducedMotion || slides.length < 2) {
          return;
        }
        stopAutoplay();
        autoplayId = window.setInterval(() => setIndex(index + 1), 7000);
      }

      if (slides.length < 2) {
        prevButton.hidden = true;
        nextButton.hidden = true;
      }

      if (dotsNode) {
        dotsNode.innerHTML = "";
        slides.forEach((_, slideIndex) => {
          const dot = document.createElement("button");
          dot.type = "button";
          dot.className = "carousel-dot";
          dot.setAttribute("aria-label", `Go to slide ${slideIndex + 1}`);
          dot.addEventListener("click", () => {
            setIndex(slideIndex);
            startAutoplay();
          });
          dotsNode.appendChild(dot);
        });
      }

      prevButton.addEventListener("click", () => {
        setIndex(index - 1);
        startAutoplay();
      });

      nextButton.addEventListener("click", () => {
        setIndex(index + 1);
        startAutoplay();
      });

      carousel.addEventListener("mouseenter", stopAutoplay);
      carousel.addEventListener("mouseleave", startAutoplay);
      carousel.addEventListener("focusin", stopAutoplay);
      carousel.addEventListener("focusout", (event) => {
        const nextFocus = event.relatedTarget;
        if (nextFocus && carousel.contains(nextFocus)) {
          return;
        }
        startAutoplay();
      });
      carousel.addEventListener("keydown", (event) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          setIndex(index - 1);
          startAutoplay();
        }
        if (event.key === "ArrowRight") {
          event.preventDefault();
          setIndex(index + 1);
          startAutoplay();
        }
      });

      carousel.setAttribute("tabindex", "0");
      setIndex(0);
      startAutoplay();
    });
  }

  function setupSearch() {
    const toggles = Array.from(document.querySelectorAll(".search-toggle"));
    if (toggles.length === 0) {
      return;
    }

    const searchItems = [
      {
        title: "Home",
        url: "index.html",
        desc: "Overview, highlights, and quick project navigation.",
        keywords: "inicio portada banner phsd phqmd"
      },
      {
        title: "About PHSD",
        url: "about.html",
        desc: "Model foundations and transport-theory description.",
        keywords: "dqpm hadronization off-shell qgp theory"
      },
      {
        title: "Download Code",
        url: "code.html",
        desc: "Request code access through the collaboration form.",
        keywords: "form request access formspree"
      },
      {
        title: "User Guide",
        url: "manual.html",
        desc: "How to run the code (work in progress).",
        keywords: "manual run build requirements execution"
      },
      {
        title: "How to cite",
        url: "how-to-cite.html",
        desc: "Recommended PHSD and PHQMD citation references.",
        keywords: "cite citation doi arxiv inspire references"
      },
      {
        title: "Publications",
        url: "publications.html",
        desc: "Citations, key papers, DOI/arXiv/Inspire links.",
        keywords: "papers references doi arxiv inspire"
      },
      {
        title: "Selected Talks",
        url: "talks.html",
        desc: "Talks with direct slide links.",
        keywords: "slides colloquium conference seminar"
      },
      {
        title: "Team",
        url: "team.html",
        desc: "Group members, collaborators, and contacts.",
        keywords: "people members contact collaboration"
      },
      {
        title: "PHSD Page",
        url: "phsd.html",
        desc: "Independent PHSD page with About, Publications, Talks, and Links.",
        keywords: "phsd transport approach publications talks links"
      },
      {
        title: "PHQMD Page",
        url: "phqmd.html",
        desc: "Independent PHQMD page with About, Publications, Talks, and Results.",
        keywords: "phqmd transport approach publications talks results"
      },
      {
        title: "DQPM Page",
        url: "dqpm.html",
        desc: "Dynamical Quasi-Particle Model overview, publications, and theses.",
        keywords: "dqpm quasiparticle qgp lattice qcd publications"
      }
    ];

    const overlay = document.createElement("div");
    overlay.className = "site-search";
    overlay.hidden = true;
    overlay.innerHTML = [
      '<div class="site-search-backdrop" data-close="true"></div>',
      '<div class="site-search-panel" role="dialog" aria-modal="true" aria-labelledby="site-search-title">',
      '  <div class="site-search-head">',
      '    <h2 class="site-search-title" id="site-search-title">Search</h2>',
      '    <button type="button" class="site-search-close" aria-label="Close search">Close</button>',
      "  </div>",
      '  <input class="site-search-input" type="search" placeholder="Search pages and sections..." autocomplete="off" />',
      '  <ul class="site-search-results"></ul>',
      '  <p class="site-search-empty" hidden>No results found.</p>',
      "</div>"
    ].join("");

    document.body.appendChild(overlay);

    const input = overlay.querySelector(".site-search-input");
    const resultsList = overlay.querySelector(".site-search-results");
    const closeButton = overlay.querySelector(".site-search-close");
    const emptyNode = overlay.querySelector(".site-search-empty");
    const backdrop = overlay.querySelector(".site-search-backdrop");

    if (!input || !resultsList || !closeButton || !emptyNode || !backdrop) {
      return;
    }

    function closeSearch() {
      overlay.hidden = true;
      document.body.classList.remove("search-open");
    }

    function openSearch() {
      overlay.hidden = false;
      document.body.classList.add("search-open");
      renderResults(input.value);
      input.focus();
      input.select();
    }

    function filterItems(query) {
      const q = query.trim().toLowerCase();
      if (q === "") {
        return searchItems.slice(0, 7);
      }

      return searchItems
        .filter((item) => {
          const haystack = `${item.title} ${item.desc} ${item.keywords}`.toLowerCase();
          return haystack.includes(q);
        })
        .slice(0, 9);
    }

    function renderResults(query) {
      const matches = filterItems(query);
      resultsList.innerHTML = "";

      if (matches.length === 0) {
        emptyNode.hidden = false;
        return;
      }

      emptyNode.hidden = true;

      matches.forEach((item) => {
        const li = document.createElement("li");
        const link = document.createElement("a");
        const title = document.createElement("strong");
        const desc = document.createElement("span");

        link.href = item.url;
        if (item.external) {
          link.target = "_blank";
          link.rel = "noopener";
        }

        title.textContent = item.title;
        desc.textContent = item.desc;
        link.appendChild(title);
        link.appendChild(desc);
        li.appendChild(link);
        resultsList.appendChild(li);
      });
    }

    toggles.forEach((button) => {
      button.addEventListener("click", openSearch);
    });

    closeButton.addEventListener("click", closeSearch);
    backdrop.addEventListener("click", closeSearch);
    input.addEventListener("input", () => renderResults(input.value));

        document.addEventListener("keydown", (event) => {
      if (!overlay.hidden && event.key === "Escape") {
        closeSearch();
        return;
      }

      if (event.key !== "/" || event.metaKey || event.ctrlKey || event.altKey) {
        return;
      }

      const target = event.target;
      const editing =
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.isContentEditable);

      if (editing) {
        return;
      }

      event.preventDefault();
      openSearch();
    });
  }

  function setupMovieFullscreen() {
    const videos = Array.from(document.querySelectorAll(".movies-section .movie-card video"));
    if (videos.length === 0) {
      return;
    }

    const requestFullscreen = (video) => {
      if (video.requestFullscreen) {
        const maybePromise = video.requestFullscreen();
        if (maybePromise && typeof maybePromise.catch === "function") {
          maybePromise.catch(() => {});
        }
        return;
      }

      if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
        return;
      }

      if (video.webkitEnterFullscreen) {
        video.webkitEnterFullscreen();
      }
    };

    videos.forEach((video) => {
      video.setAttribute("tabindex", "0");
      video.setAttribute("aria-label", "Open movie in fullscreen");

      video.addEventListener("click", () => {
        requestFullscreen(video);
      });

      video.addEventListener("keydown", (event) => {
        if (event.key !== "Enter" && event.key !== " ") {
          return;
        }
        event.preventDefault();
        requestFullscreen(video);
      });
    });
  }

  function setupNavSubmenus() {
    const submenuConfig = {
      home: {
        title: "Home sections",
        items: [
          { label: "PHSD-PHQMD Modeling Workflow", href: "index.html#home-workflow" },
          { label: "Special Features of PHSD-PHQMD", href: "index.html#home-features" },
          { label: "Movies", href: "index.html#home-movies" }
        ]
      },
      about: {
        title: "About sections",
        items: [
          { label: "What Is PHSD-PHQMD?", href: "about.html#about-what-is" },
          { label: "How to cite PHSD-PHQMD code", href: "about.html#about-cite-code" }
        ]
      },
      manual: {
        title: "User Guide sections",
        items: [
          { label: "Overview", href: "manual.html#overview" },
          { label: "How to Run the PHSD-PHQMD Code", href: "manual.html#run-code" },
          { label: "Compilation Requirements and Build", href: "manual.html#build" },
          { label: "Input File", href: "manual.html#input-file" },
          { label: "Output File", href: "manual.html#output-file" },
          { label: "How to cite PHSD-PHQMD code", href: "manual.html#cite-code" }
        ]
      },
      publications: {
        title: "Publications sections",
        items: [
          { label: "How To Cite PHSD", href: "publications.html#pub-cite-phsd" },
          { label: "Basic References To The PHSD Model", href: "publications.html#pub-basic-phsd" },
          { label: "How To Cite PHQMD", href: "publications.html#pub-cite-phqmd" },
          { label: "Basic References To The PHQMD Model", href: "publications.html#pub-basic-phqmd" },
          { label: "Other Publications", href: "publications.html#pub-other" }
        ]
      },
      team: {
        title: "Team sections",
        items: [
          { label: "Group Leader", href: "team.html#team-group-leader" },
          { label: "Researchers", href: "team.html#team-researchers" },
          { label: "PhD Students", href: "team.html#team-phd-students" },
          { label: "Collaborators", href: "team.html#team-collaborators" },
          { label: "Former Group Members", href: "team.html#team-former-members" },
          { label: "PHSD History", href: "team.html#team-history" }
        ]
      }
    };

    const triggers = Array.from(document.querySelectorAll(".nav-links a[data-page]")).filter(
      (link) => Boolean(submenuConfig[link.dataset.page])
    );

    if (triggers.length === 0) {
      return;
    }

    const popover = document.createElement("div");
    popover.className = "nav-submenu-popover";
    popover.setAttribute("aria-hidden", "true");
    popover.innerHTML = [
      '<p class="nav-submenu-title"></p>',
      '<div class="nav-submenu-links" role="menu"></div>'
    ].join("");
    document.body.appendChild(popover);

    const titleNode = popover.querySelector(".nav-submenu-title");
    const linksNode = popover.querySelector(".nav-submenu-links");

    if (!titleNode || !linksNode) {
      return;
    }

    let activeTrigger = null;
    let closeTimer = null;

    function clearCloseTimer() {
      if (closeTimer) {
        window.clearTimeout(closeTimer);
        closeTimer = null;
      }
    }

    function closePopover() {
      clearCloseTimer();
      popover.classList.remove("is-open");
      popover.setAttribute("aria-hidden", "true");
      if (activeTrigger) {
        activeTrigger.setAttribute("aria-expanded", "false");
      }
      activeTrigger = null;
    }

    function scheduleClose() {
      clearCloseTimer();
      closeTimer = window.setTimeout(closePopover, 140);
    }

    function positionPopover(trigger) {
      const triggerRect = trigger.getBoundingClientRect();
      const pageX = window.scrollX || window.pageXOffset;
      const pageY = window.scrollY || window.pageYOffset;

      popover.style.left = "0px";
      popover.style.top = "0px";
      popover.classList.add("is-open");

      const popRect = popover.getBoundingClientRect();
      const minLeft = pageX + 12;
      const maxLeft = pageX + window.innerWidth - popRect.width - 12;
      const centeredLeft = pageX + triggerRect.left + triggerRect.width / 2 - popRect.width / 2;
      const finalLeft = Math.max(minLeft, Math.min(centeredLeft, maxLeft));
      const finalTop = pageY + triggerRect.bottom + 8;

      popover.style.left = `${finalLeft}px`;
      popover.style.top = `${finalTop}px`;
    }

    function openPopover(trigger) {
      const pageKey = trigger.dataset.page;
      const config = submenuConfig[pageKey];
      if (!config) {
        return;
      }

      clearCloseTimer();
      activeTrigger = trigger;
      triggers.forEach((link) => {
        link.setAttribute("aria-expanded", link === trigger ? "true" : "false");
      });

      titleNode.textContent = config.title;
      linksNode.innerHTML = "";

      config.items.forEach((item) => {
        const link = document.createElement("a");
        link.href = item.href;
        link.textContent = item.label;
        link.setAttribute("role", "menuitem");
        link.addEventListener("click", () => closePopover());
        linksNode.appendChild(link);
      });

      popover.setAttribute("aria-hidden", "false");
      positionPopover(trigger);
    }

    triggers.forEach((trigger) => {
      trigger.setAttribute("aria-haspopup", "true");
      trigger.setAttribute("aria-expanded", "false");

      trigger.addEventListener("mouseenter", () => openPopover(trigger));
      trigger.addEventListener("focus", () => openPopover(trigger));
      trigger.addEventListener("mouseleave", scheduleClose);
      trigger.addEventListener("blur", (event) => {
        const next = event.relatedTarget;
        if (next && popover.contains(next)) {
          return;
        }
        scheduleClose();
      });

      trigger.addEventListener("keydown", (event) => {
        if (event.key === "ArrowDown") {
          event.preventDefault();
          openPopover(trigger);
          const firstLink = linksNode.querySelector("a");
          if (firstLink) {
            firstLink.focus();
          }
        }
        if (event.key === "Escape") {
          closePopover();
        }
      });
    });

    popover.addEventListener("mouseenter", clearCloseTimer);
    popover.addEventListener("mouseleave", scheduleClose);
    popover.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closePopover();
        if (activeTrigger) {
          activeTrigger.focus();
        }
      }
    });

    document.addEventListener("click", (event) => {
      if (!popover.classList.contains("is-open")) {
        return;
      }
      if (popover.contains(event.target)) {
        return;
      }
      if (activeTrigger && activeTrigger.contains(event.target)) {
        return;
      }
      closePopover();
    });

    window.addEventListener("resize", closePopover);
    window.addEventListener("scroll", closePopover, { passive: true });
  }
  setupReveal();
  setupCarousels();
  setupSearch();
  setupNavSubmenus();
  setupMovieFullscreen();
})();



