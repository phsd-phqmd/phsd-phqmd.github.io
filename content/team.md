---
title: "Team"
draft: false
---

{{< rawhtml >}}
<style>
  /* Modern Team cards (scoped) */
  .team-page { max-width: 1100px; margin: 0 auto; }
  .team-section { margin: 28px 0 10px; }
  .team-section h2 { margin: 0 0 16px; font-weight: 700; letter-spacing: .2px; }
  .team-subtle { color: #666; margin-top: -8px; margin-bottom: 18px; }

  .team-card {
    background: #fff;
    border: 1px solid rgba(0,0,0,.08);
    border-radius: 12px;
    padding: 18px 16px;
    margin-bottom: 18px;
    box-shadow: 0 6px 18px rgba(0,0,0,.06);
    transition: transform .12s ease, box-shadow .12s ease;
    min-height: 210px;
  }
  .team-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 28px rgba(0,0,0,.10);
  }

  .team-avatar {
    width: 140px;
    height: 140px;
    border-radius: 50%;
    object-fit: cover;
    border: 4px solid rgba(0,0,0,.08);
    margin: 2px auto 12px;
    display: block;
  }

  .team-name { margin: 6px 0 6px; font-weight: 700; font-size: 18px; }
  .team-role { color: #555; margin-bottom: 6px; }
  .team-meta { color: #666; font-size: 13px; line-height: 1.35; }
  .team-links a { display: inline-block; margin-right: 10px; font-size: 13px; }

  /* Leader layout */
  .leader-card { padding: 22px 18px; }
  .leader-grid { display: table; width: 100%; }
  .leader-left { display: table-cell; width: 140px; vertical-align: top; }
  .leader-right { display: table-cell; vertical-align: top; padding-left: 14px; }
  @media (max-width: 768px) {
    .leader-grid, .leader-left, .leader-right { display: block; width: 100%; padding: 0; }
    .leader-right { padding-top: 10px; }
  }
</style>

<div class="team-page">

  <!-- Group leader -->
  <div class="team-section">
    <h2>Group leader</h2>

    <div class="team-card leader-card">
      <div class="leader-grid">
        <div class="leader-left text-center">
          <img class="team-avatar" src="/img/team/elena.webp" alt="Elena Bratkovskaya">
        </div>
        <div class="leader-right">
          <div class="team-name">Apl. Prof. Dr. Elena Bratkovskaya</div>
          <div class="team-role">Group leader</div>
          <div class="team-meta">
            GSI Helmholtzzentrum für Schwerionenforschung GmbH, Planckstrasse 1, 64291 Darmstadt, Germany<br>
            +49-6159-71 2753 · Office: KBW 2.08
          </div>
          <div class="team-links" style="margin-top:10px;">
            <a href="mailto:e.bratkovskaya@gsi.de">e.bratkovskaya@gsi.de</a>
            <a href="https://inspirehep.net/authors/1015408" target="_blank">Publications</a>
            <a href="http://th.physik.uni-frankfurt.de/~brat/index.html" target="_blank">Personal web-page</a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Postdocs -->
  <div class="team-section">
    <h2>Postdocs</h2>
    <p class="team-subtle">Current postdoctoral researchers contributing to the PHSD/PHQMD code.</p>

    <div class="row">
      <div class="col-sm-6 col-md-4">
        <div class="team-card text-center">
          <img class="team-avatar" src="/img/team/taesoo.webp" alt="Taesoo Song">
          <div class="team-name">Dr. Taesoo Song</div>
          <div class="team-links">
            <a href="mailto:song@fias.uni-frankfurt.de">song@fias.uni-frankfurt.de</a>
          </div>
          <div class="team-links" style="margin-top:6px;">
            <a href="https://inspirehep.net/authors/1047681" target="_blank">Publications</a>
          </div>
        </div>
      </div>

      <div class="col-sm-6 col-md-4">
        <div class="team-card text-center">
          <img class="team-avatar" src="/img/team/jiaxing.webp" alt="Jiaxing Zhao">
          <div class="team-name">Dr. Jiaxing Zhao</div>
          <div class="team-links">
            <a href="mailto:jzhao@itp.uni-frankfurt.de">jzhao@itp.uni-frankfurt.de</a>
          </div>
          <div class="team-links" style="margin-top:6px;">
            <a href="https://inspirehep.net/authors/1615539" target="_blank">Publications</a>
          </div>
        </div>
      </div>
     </div>

    

  <!-- PhD students -->
  <div class="team-section">
    <h2>PhD students</h2>

    <div class="row">
      <div class="col-sm-6 col-md-4">
        <div class="team-card text-center">
          <img class="team-avatar" src="/img/team/adrian.webp" alt="Adrian Romero">
          <div class="team-name">Adrian Romero</div>
          <div class="team-meta">PhD student</div>
          <div class="team-links" style="margin-top:6px;">
            <a href="mailto:jorge@itp.uni-frankfurt.de">jorge@itp.uni-frankfurt.de</a>
          </div>
        </div>
      </div>

      <div class="col-sm-6 col-md-4">
        <div class="team-card text-center">
          <img class="team-avatar" src="/img/team/gaia.webp" alt="Gaia Ingrosso">
          <div class="team-name">Gaia Ingrosso</div>
          <div class="team-meta">PhD student</div>
          <div class="team-links" style="margin-top:6px;">
            <a href="mailto:ingrosso@itp.uni-frankfurt.de">ingrosso@itp.uni-frankfurt.de</a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Former group members -->
  <div class="team-section">
    <h2>Former group members</h2>
    <ul>
      <li><a href="https://inspirehep.net/authors/1914555" target="_blank">Dr. Ilia Grishmanovskii</a></li>
      <li><a href="https://inspirehep.net/authors/1905851" target="_blank">Dr. Olga Soloveva</a></li>
      <li><a href="https://inspirehep.net/authors/1718277" target="_blank">Dr. Gabriele Coci</a></li>
      <li><a href="https://inspirehep.net/authors/1512235" target="_blank">Dr. Lucia Oliva</a></li>
      <li><a href="https://inspirehep.net/authors/1410711" target="_blank">Dr. Pierre Moreau</a></li>
      <li><a href="https://inspirehep.net/authors/1273504" target="_blank">Dr. Andrej Ilner</a></li>
      <li><a href="https://inspirehep.net/authors/1014794" target="_blank">Dr. Daniel Cabrera</a></li>
      <li><a href="https://inspirehep.net/authors/1273379" target="_blank">Dr. Hamza Berrehrah</a></li>
      <li><a href="https://inspirehep.net/authors/1259121" target="_blank">Dr. Vitalii Ozvenchuk</a></li>
      <li><a href="https://inspirehep.net/authors/1237817" target="_blank">Dr. Rudy Marty</a></li>
      <li><a href="https://inspirehep.net/authors/1019295" target="_blank">PD Dr. Olena Linnyk</a></li>
      <li><a href="https://inspirehep.net/authors/1036687" target="_blank">Dr. Volodymir Konchakovski</a></li>
      <li><a href="https://inspirehep.net/authors/1032763" target="_blank">Dr. Michael Hauer</a></li>
      <li><a href="https://inspirehep.net/authors/985964" target="_blank">Prof. Dr. Laura Tolos</a></li>
    </ul>
  </div>

  <!-- Active external collaborations -->
  <div class="team-section">
    <h2>Active external collaborations</h2>

    <div class="row">
      <div class="col-sm-6 col-md-4">
        <div class="team-card text-center">
          <img class="team-avatar" src="/img/team/vadym.webp" alt="Vadim Voronyuk">
          <div class="team-name">Dr. Vadim Voronyuk</div>
          <div class="team-meta">JINR Laboratory for Information Technologies, RU-141980 Dubna</div>
          <div class="team-links" style="margin-top:8px;">
            <a href="mailto:vadim.voronyuk@jinr.ru">vadim.voronyuk@jinr.ru</a>
            <a href="https://inspirehep.net/authors/1074531" target="_blank">Publications</a>
          </div>
        </div>
      </div>

      <div class="col-sm-6 col-md-4">
        <div class="team-card text-center">
          <img class="team-avatar" src="/img/team/wolfgang.webp" alt="Wolfgang Cassing">
          <div class="team-name">Prof. Dr. Dr. Wolfgang Cassing</div>
          <div class="team-meta">Institut für Theoretische Physik I, Heinrich-Buff-Ring 16, 35392 Gießen, Germany</div>
          <div class="team-links" style="margin-top:8px;">
            <a href="mailto:wolfgang.cassing@theo.physik.uni-giessen.de">wolfgang.cassing@theo.physik.uni-giessen.de</a>
            <a href="https://inspirehep.net/authors/1014319" target="_blank">Publications</a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- SUBATECH -->
  <div class="team-section">
    <h2>Group at SUBATECH, Nantes University, France</h2>

    <div class="row">
      <div class="col-sm-6 col-md-4">
        <div class="team-card text-center">
          <img class="team-avatar" src="/img/team/jorg.webp" alt="Jörg Aichelin">
          <div class="team-name">Prof. Dr. Jörg Aichelin</div>
          <div class="team-links">
            <a href="mailto:aichelin@subatech.in2p3.fr">aichelin@subatech.in2p3.fr</a>
            <a href="https://inspirehep.net/authors/1018831" target="_blank" style="margin-left:10px;">Publications</a>
          </div>
        </div>
      </div>
    </div>
  </div>

</div>
{{< /rawhtml >}}
