# Phoenix (ফিনিক্স) — Free bilingual website

A responsive Bengali/English starter website built with plain HTML, CSS and JavaScript. Designed for free deployment on GitHub Pages.

## Files
- `index.html` — website content and sections
- `style.css` — responsive design and styles
- `script.js` — language switcher, mobile navigation, and form/social links

## Before publishing
1. Open `script.js`.
2. Replace `GOOGLE_FORM_URL` with the public responder link to your Google Form.
3. Replace `FACEBOOK_PAGE_URL` with Phoenix's official Facebook page URL.
4. Update placeholder copy in `index.html` and the translations in `script.js` (official email, approved history, official role names, etc.).
5. Add only photos that Phoenix has permission to publish. Avoid publishing members' private phone numbers or personal details without consent.

## Create a Google Form
Suggested fields:
- Full name / পূর্ণ নাম (required)
- Phone number / মোবাইল নম্বর (only if necessary)
- Area / এলাকা
- Volunteer interests / কোন কাজে যুক্ত হতে চান?
- Why do you want to join? / কেন যুক্ত হতে চান?
- Consent checkbox / তথ্য ব্যবহারে সম্মতি

In Google Forms, use **Send → Link** to copy the responder URL. Link the form to a Google Sheet from the Responses tab if you need a spreadsheet. Restrict access to the response sheet to trusted admins only.

## Publish with GitHub Pages (free)
1. Sign in at https://github.com/
2. Create a **public** repository, for example `phoenix-organization`.
3. Upload `index.html`, `style.css`, `script.js`, and this README to the repository root.
4. Open **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**; select `main` and `/ (root)`, then Save.
6. Wait for the deployment to finish. The website URL will look like `https://YOUR-USERNAME.github.io/phoenix-organization/`.

## Important limitations
- GitHub Pages hosts static websites; it does not provide secure member accounts, a private database, or payment processing by itself.
- This starter uses a simple browser-side language switcher. It does not store sensitive information.
- Free platform terms and limits may change. A custom domain such as `.com` usually costs money.
