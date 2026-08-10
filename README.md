# Ayansh Medical Hall

Website for Ayansh Medical Hall — generic medicines trading. Hosted on GitHub Pages at [ayanshmedical.com](https://ayanshmedical.com).

Currently a landing page with contact details; product range pages coming soon.

## Deploy

Pages served from the `main` branch root. The `CNAME` file points the custom domain (`ayanshmedical.com`, registered via Squarespace) at this repo. In the Squarespace DNS settings, point:

- `A` records for the apex domain to GitHub Pages' IPs (185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153)
- `CNAME` record for `www` to `ayanshmedical.github.io`

Then enable GitHub Pages in the repo settings (Settings → Pages → Source: `main` branch, `/root`).
