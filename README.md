# Expanded Tesla Local Website — HTML/CSS/JavaScript

Independent local reconstruction using the user-provided homepage WACZ and `tsla.zip` Uncage export. This is **not Tesla's original website code** and is **not affiliated with Tesla**.

## Run on Windows
1. Extract the ZIP, preserving folders.
2. Double-click `start-windows.bat`, which opens http://localhost:8765/ (Python installed).
3. Or open this folder in VS Code and run `python server.py`.
4. Visit http://localhost:8765/sitemap/ to navigate all local pages.

## Included
- Restored full homepage and 26 additional locally navigable page reconstructions, with responsive navigation.
- All **11 captured inner HTML pages** from `tsla.zip` preserved in `source-captures/` (source reference; many original scripts still call remote services).
- Captured Tesla imagery converted to responsive WebP image sizes (560 / 1050 / 1800px).
- 2 captured videos transcoded to 1280x720 H.264/AAC MP4, preserved audio, deferred loading until near viewport and lazy play/pause on scroll. Original capture may have higher quality. The archived Robotaxi video is 4K and is now 720p for faster delivery.
- `assets/navigation.json` and `assets/asset-map.json` describe route and media mappings.

## Limitations
- This is **not a complete archive of tesla.com**. The supplied Uncage capture contained only 11 HTML pages; the WACZ held the homepage.
- Product pages missing from the archive were reconstructed from captured photos and generic descriptions, not recovered original source. Model S and Model X have **no product-specific media in the supplied files**.
- The true 3D configurator, payment/authentication, account APIs, purchases, contact forms and live listings are **not reproduced**. Buttons for these actions link to tesla.com.
- 2026 offers/copy may be stale. Never rely on archived prices, legal text or driver-assistance statistics.
- Most `source-captures/` pages retain their original bulk JS and links as historical references; they are not performance-optimized and may not function offline.

## Edit
- `index.html`: main homepage sections
- `assets/styles.css`: all styling
- `assets/site.js`: navigation, carousels, lazy video handling
- `/<route>/index.html`: each individual page
- `media/`: responsive optimized images and fonts
- `videos/`: transcoded videos

## Optimization numbers
- 78 distinct images selected and converted.
- Original selected images: 8.2 MiB; all three optimized responsive variants combined: 11.9 MiB.
- Videos: Homepage-FSD-Card-Desktop 11.2 MiB -> 5.0 MiB, Robotaxi-Its-Your-Car 2.2 MiB -> 0.53 MiB.

Tests should be done over `http://localhost:8765/`, not `file://`.

## Validation
- All generated route and asset paths were statically checked.
- Media duration and codecs were checked with ffprobe.
- The headless Chrome preview is restricted in the current environment, so visual/browser behavior should be checked on your Windows PC.

Video playback supports HTTP byte-range requests for seeking, with MP4 fast-start metadata.

## Repairs (November 2026)
- Restored the intended homepage: the supplied archive had mistakenly placed the Semi Charging for Business page at `/`.
- Fixed the home charging-map CSS reference (it pointed inside `/assets/media/` instead of `/media/` and lacked the actual responsive image suffix).
- Recreated homepage hero, vehicle and energy product sliders, feature sections, video sections, charging section, and related exploration cards using already-captured local assets.
- Removed aggressive image and section containment that could contribute to deferred/partial-looking rendering; added responsive layout refinements.
- Kept source captures and all original routes, media, fonts and videos intact.


## Homepage capture integrated (November 2026)
The root `index.html` is now the user-supplied, SingleFile-saved Tesla.com homepage from November 2, 2026, preserving its embedded photographs, fonts and styles. The former reconstructed homepage has been saved at `source-captures/previous-homepage-reconstruction.html`.
The capture was static and omitted interactive scripts; this version adds an independent local mobile menu, category navigation, hero slide controls, local links for saved subpages, responsive fixes and an independent-preview notice. External account, ordering, reservation, shopping and other uncaptured pages continue to open Tesla.com when connected to the internet. Some live Tesla services (maps, inventory, order flow, assistant, videos without source files) are not included in a static capture.
