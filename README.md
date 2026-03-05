# PHSD New Website

Modernized static version of the legacy `phsd-phqmd.github.io-main` website.

## Content migrated

- Home
- About PHSD
- Download Code (request form)
- Publications
- Selected Talks
- Team
- Legacy image and team assets from the previous site (`assets/img`)

## Local preview

```bash
cd phsdnew
python3 -m http.server 8000
```

Then open: `http://localhost:8000`

## Deploy to GitHub Pages

1. Create a GitHub repository (or use existing one).
2. Push the contents of this folder as repository root.
3. In GitHub: `Settings -> Pages`.
4. Select branch (usually `main`) and folder `/ (root)`.
5. Save and wait for Pages build.

