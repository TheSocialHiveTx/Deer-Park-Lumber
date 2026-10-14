# Deer Park Lumber — Independent Website Redesign Concept

A five-page static demonstration website created for prospecting. **Not the official website, not commissioned or endorsed by the company.** Do not represent it as official or accept customer orders while unaffiliated.

## Pages

- `index.html` — branded homepage
- `industrial.html` — industrial/contractor positioning
- `products.html` — filterable product category directory (NOT real-time inventory)
- `about.html` — verified history and community positioning
- `contact.html` — telephone links, draft-email inquiry and embedded Google Map

## Technology
Vanilla HTML, CSS, and JavaScript. No server code, frameworks, build step, or tracking. Suitable for GitHub Pages.

## Preview
Open `index.html` in a browser, or serve the folder using `python -m http.server 8000`.
Images are loaded from Deer Park Lumber's existing website and a local-business listing. **These externally hosted images are presentation placeholders, not bundled or licensed for independent commercial use.** Replace them with owner-authorized photos before deployment. Google Fonts and Maps also need a network connection.

## Form functionality
The quote form checks required fields and opens a composed email addressed to `jhatfield@deerparklumber.com`, which appears in an existing Deer Park Lumber product listing; there is no backend and no automatic delivery confirmation. The Copy Inquiry button uses the clipboard or a fallback selector. Before launch, **confirm the correct quote recipient and implement a protected form backend** or link to their official request/order system. Never claim an inquiry was sent when only mailto launched.

## Verified content notes / primary sources
- Official site: https://www.deerparklumber.com/ and /About, /Contact, /products/categories/ and product catalog
- Official contact and hours: https://www.deerparklumber.com/Contact
- Official product categories: https://www.deerparklumber.com/products/categories/
- Official product example with email: https://www.deerparklumber.com/pd10858/lumber
- San Jacinto College 2025 family profile: https://sanjac.edu/about/news/2025/lumber-learning-why-this-business-leader-invests-san-jac-students
- Deer Park Chamber Business of the Year 2012: https://www.chron.com/neighborhood/deerpark/news/article/Deer-Park-Chamber-awards-Deer-Park-Lumber-9403065.php

## Research / prospecting evidence (not used in customer-facing website)
- Manta estimated annual revenue ~$30,137,784, unverified: https://www.manta.com/c/mm7nsw3/deer-park-lumber
- Site quality issue: current https://www.deerparklumber.com/Services contains content naming another supplier, Carroll Construction Supply, an Ottumwa location and an Iowa number. Do **not** reproduce those unverified capabilities or contact details in new site.

## Launch checklist (only after owner authorization)
1. Confirm company legal identity/ownership, logo, brand colors, copyright, photos, products, pricing, hours, and B2B account policies.
2. Obtain authorization for images and brand marks. Replace or self-host approved images.
3. Confirm the contact email and wire up production lead capture using spam and privacy safeguards.
4. Remove the independent-preview banner and the `noindex` tags, `robots.txt` disallow, and demonstration disclaimers only on an authorized business deployment.
5. Add canonical production URLs, sitemap, Search Console, approved LocalBusiness/HardwareStore structured data, analytics with consent policy, and validation.
6. Test responsive breakpoints and review accessibility, forms, page performance, and legal policies.
