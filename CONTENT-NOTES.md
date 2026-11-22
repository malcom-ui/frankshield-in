# Content notes and items to confirm

## Sources used
- frankshield.com (redirects to frankshields.com): About, MRI-compatible product list, RF shielding categories, contact details.
- rhombusmed.com: MRI shielding variants, non-magnetic wheelchairs and trolleys.
- Mac: `3 F Web page and online corporate` (2023 web copy, FAQ draft, MRI product texts, MRI interior photos) and `3 C Marketing Materials for Medical UAE` (India and Pvt Ltd presentations, logo, monitor photo).
- Google Drive: "10 MRI compatible Products" document, MRI quotations (specs only, no prices or client names used).
- Figures from Malcom's decks: 188 Siemens MRI RF cages in 24 states (19 / 67 / 102 for 2024 / 2025 / 2026), Hyderabad factory, 150+ Middle East and Africa projects, ISO 9001:2015.

## Deliberately left out
- Industrial, military, SCIF, environmental, radiation and quench-pipe content (stays on frankshield.com).
- Phantoms, dosimeters, Skytron and other equipment (stays on rhombusmed.com).
- ISO 13485 is **not** claimed.
- Non-medical references from the decks (AMMROC, SCIF projects, Ministry of Education operations centre, KFUPM).
- Prices, and personal or family photos.

## Please confirm
1. **Enquiry email.** The site uses `info@frankshield.in` as a placeholder. Change it in every HTML file and in the `data-email` attribute on `contact.html`, or tell Claude the correct address.
2. **Warranty.** The site says "10-year limited warranty on RF shielding effectiveness". The decks give 5 years (India deck) or 2 years (Pvt Ltd deck) for electrical parts, and the old FAQ says 1 year, so electrical warranty is left off the site.
3. **Delivery chart years.** The site labels 19 / 67 / 102 cages as 2024 / 2025 / 2026.
4. **Company history.** The decks say Frank Shields Pvt Ltd was "established in 2009 at Chennai Industrial Estate". The site only says the Indian company was set up as the group's manufacturing base, and doesn't give a year.
5. **Phone numbers.** India +91 75580 80935 (also WhatsApp) and UAE +971 55 668 0935.
6. **Non-magnetic equipment photos.** No usable photos of the wheelchairs, trolleys, drip stands, ladder or extinguisher were found, so these show icons for now. Add photos to `assets/img/` and they can be swapped in.
7. **Gallery captions.** These name the UAE hospitals the photos came from (RAK, NMC, Health Point, ADC). Remove them if you'd rather not name clients.
8. **Scanner brand names** appear as text only (no logos), with a trademark note.
