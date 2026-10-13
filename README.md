# ILC Landing Page

**A single-page marketing site for "ILC", a subscription legal-services product (a personal online team of lawyers plus a partner program), hand-built in HTML and SCSS with a vanilla-JS sign-in popup.** The content is in Russian.

## Page sections

In order: header with a sign-in button → hero ("legal policy" offer and partner-income pitch) → support → your online legal team → service advantages → pricing tiers (including a free tier) → partner program, offers, and "getting started" plan → partner-program forecast → expert contact block → footer.

## Implementation

- **SCSS architecture** — `scss/index.scss` imports variables and mixins from `helpers/`, one partial per page section from `sections/`, and the popup component from `component/_popup.scss`. Fonts are Montserrat and Roboto from Google Fonts.
- **Popup** — `js/popup.js` opens the sign-in form when the header button is clicked and closes it via the close icon or the submit button by toggling an `active` class.
- **Compiled output** — `css/index.css` is committed, so `index.html` opens directly in a browser.

## Working on it

```bash
git clone https://github.com/AliAzamat/mainproject1.git
cd mainproject1
npx sass --watch scss/index.scss css/index.css   # compiles cleanly
```

## Limitations

- Desktop-only layout: the stylesheets contain no media queries.
- The popup form has no action and doesn't submit anywhere.
- `img/Main1/` contains an earlier copy of the project (its own `index.html`, `css/`, and `scss/`) nested inside the image folder; it isn't used by the current page and could be removed.
