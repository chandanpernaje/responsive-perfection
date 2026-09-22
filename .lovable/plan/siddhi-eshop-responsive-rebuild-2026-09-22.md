# Siddhi Eshop responsive rebuild

## Goal
Rebuild the supplied Siddhi Eshop homepage in React, TypeScript, and Tailwind CSS while preserving its red, charcoal, white, and brand-specific visual identity. The page will fit cleanly at phone, tablet, laptop, and wide desktop sizes without clipped cards, overflowing text, or distorted images.

## Build
- Recreate the supplied header, contact strip, account/RFQ/cart tools, search, navigation, brand ticker, promotional banner, partner cards, product sections, RFQ form, contact details, and footer.
- Convert the supplied homepage interactions to React: mobile navigation, rotating promotions, brand/product tabs, search/filter controls, and RFQ form feedback.
- Import the supplied logos and product photography through the project asset system; preserve image proportions with stable aspect ratios and deliberate `object-fit` behavior.
- Use responsive grids that become one or two columns on phones and expand progressively on larger screens; no fixed-width mobile card rows or cropped button labels.
- Preserve the supplied copy and brand colors while improving spacing, visual hierarchy, readable type, touch targets, and focus states.

## Responsive checks
- Validate at 390px mobile, 768px tablet, 1280px desktop, and a wide desktop viewport.
- Check that navigation, banners, all card groups, tabs, forms, images, and footer have no horizontal overflow or overlap.
- Verify menu, carousel controls, tabs, links, and RFQ submission behavior in the live preview.

## Technical details
- Keep the existing TanStack Start app and implement the homepage at `/`.
- Define all colors, typography, shadows, and radii as semantic tokens in the global design system.
- Add page-specific title, description, Open Graph metadata, and Twitter card metadata.
- Use the uploaded archive as the content and imagery source; no backend, sign-in persistence, or checkout processing will be added.
