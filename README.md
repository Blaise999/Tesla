# Tesla local multi-page website — updated WACZ homepage

This is a local reconstruction assembled from user-provided Tesla captures. It is not Tesla's production source code, is not affiliated with Tesla, and is not a complete capture of Tesla.com.

## What's inside
- `index.html`: **NEW** homepage, rebuilt from `my-archiving-session(1).wacz` (Tesla.com homepage capture, November 2, 2026). Embeds every captured homepage image as WebP data directly in index.html, so the homepage photos do not depend on asset paths. Also provides editable copies in assets/homepage-images/. Includes the hero carousel, Tesla-style menus, vehicle/energy sections, and two recorded local WebM videos.
- `assets/`: original existing shared styles/scripts for the interior pages, plus all offline homepage photos, posters, and WebM videos.
- `/<page>/index.html`: the 27 existing individual internal pages (vehicles, charging, energy, etc.) and a sitemap at `/sitemap/`.
- `media/`, `videos/`: retained interior-page images, fonts and MP4 videos.
- `source-captures/` (full archive only): original historical HTML snapshots for reference. These are NOT the active pages and may still depend on live services.

## Open and navigate on Windows
1. **Extract the ZIP first**. Do not preview files within the compressed ZIP.
2. In the extracted `Tesla_Complete_Website` folder, double-click `start-windows.bat` (requires Python), or open PowerShell there and run `python server.py`.
3. Open `http://127.0.0.1:8765/` in your browser. Click product pages from the homepage. To explore every local route, use the **Site Map** footer link or visit `http://127.0.0.1:8765/sitemap/`.
4. To stop the server, close its terminal or press Ctrl+C.

Opening `index.html` using `file:///` will display the homepage, but the local links to other pages begin with `/` and therefore need an HTTP server to work properly. You can deploy this as a static project to Vercel or Netlify without running Python in production. Publish the contents of this folder as the root.

## What is and isn't offline
Locally captured pages, styling and media work without Tesla.com. The homepage's built-in carousels and local navigation operate through ordinary HTML/JS. Live Tesla features such as ordering, vehicle configurators, account login, trade-in, live inventory, maps, payments and support still require Tesla.com and their links remain external. The interior pages are reconstructed, so some descriptions and images are not exact historical copies.

## Publishing to GitHub
Use PowerShell inside the extracted `Tesla_Complete_Website` folder:

```
git init -b main
git add .
git commit -m "Tesla website with new WACZ homepage"
```

If GitHub CLI is installed and you have signed in: `gh repo create tesla-website --private --source=. --remote=origin --push`.
If `gh` is not recognized, install it with `winget install --id GitHub.cli --exact`, reopen PowerShell, run `gh auth login --web`, then run the create command. Alternatively, create an empty repository on GitHub.com, add its remote, and `git push -u origin main`.


## Homepage image reliability fix
- The first local copy used WebP images in `media/`; the WACZ capture supplied AVIF images.
- We converted all **33 referenced WACZ still images** to tested WebP files in `assets/homepage-images/`.
- The homepage `index.html` ALSO embeds each WebP directly (base64 data URLs): hero, carousel, menus, energy, Robotaxi, charging, offers and FSD images appear even if someone opens `index.html` directly from an extracted folder.
- The original AVIF files remain in `assets/` for archival/editing.
- Videos are still separate in `assets/*.webm` (use the full extracted folder or local server to play them).
- For the complete multi-page site, extract the entire ZIP and run `start-windows.bat`, or deploy the extracted `Tesla_Complete_Website` contents as your static site root.
- For a one-file homepage with no video dependency, use the embedded-image `index.html`; for other pages local assets still matter.
