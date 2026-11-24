# frankshield.in

Website for **Frank Shields India**: MRI RF shielding, magnetic shielding and MRI-compatible products, made in Hyderabad.

Industrial and defence shielding stays on [frankshield.com](https://www.frankshield.com), and hospital equipment such as Skytron stays on [rhombusmed.com](https://www.rhombusmed.com). This site links to both in the footer.

## What's here

Plain HTML and CSS. There is no build step and nothing to install, so any static host can serve it.

| Page | File |
|---|---|
| Home | `index.html` |
| MRI RF shielding (cages, components, specs, FAQ) | `mri-rf-shielding.html` |
| Magnetic shielding | `magnetic-shielding.html` |
| MRI-compatible products (suite ambience, sliding doors, non-magnetic equipment) | `mri-compatible-products.html` |
| Projects (India and international references, gallery) | `projects.html` |
| About (story, factories, ISO 9001:2015) | `about.html` |
| Contact (offices and enquiry form) | `contact.html` |

`assets/css/style.css` holds all styling. Brand colours are set once at the top: burgundy `#7a1f2b` and the logo red `#d4363b`. `assets/js/main.js` runs the mobile menu and the enquiry form. Images live in `assets/img/`.

## Preview locally

Open `index.html` in a browser, or run `python3 -m http.server` in this folder and go to http://localhost:8000.

## Publishing on www.frankshield.in

The `CNAME` file is already set up for **GitHub Pages**:

1. In the repository go to **Settings → Pages**, choose "Deploy from a branch", then pick `main` and `/ (root)`.
2. At your domain registrar, add a `CNAME` record for `www` pointing to `malcom-ui.github.io`. For the bare domain `frankshield.in`, add `A` records for 185.199.108.153, 185.199.109.153, 185.199.110.153 and 185.199.111.153.
3. Back in Settings → Pages, tick **Enforce HTTPS** once the certificate is issued.

Netlify, Cloudflare Pages or any cPanel host also work. Upload the files as they are.

## Enquiry form

The form currently opens the visitor's email app with the enquiry filled in, so it needs no server. To receive submissions directly, connect a form service such as Formspree or Netlify Forms. See the comment in `assets/js/main.js`.

## Content still to confirm

See `CONTENT-NOTES.md`.
