# AutoFeedback Filler

A small Chrome extension that fills the **IUMS (sms.iul.ac.in) student feedback form** for you. Pick one option (1 to 5), click once, and every question is ticked with it. You then review the form and submit it yourself.

## Why it saves time

The feedback form has a page of questions for every subject and teacher, across Theory, Lab, Mentor, and Teaching & Learning Quality. Ticking each question by hand is slow and repetitive.

| | Manual | With this extension |
|---|---|---|
| Per form | Click one option on every question | Click the icon, type one number |
| Mistakes | Easy to miss a question | Reports how many questions were filled |
| Submit | You | Still you, after a quick review |

## How to use

Guide- https://youtu.be/joOfPDBFH1A?si=mqE3q8aItvMtppxa
1. Select the subject and teacher on the feedback page and wait for the questions to appear.
2. Click the extension icon.
3. Enter a number from **1 to 5** (1 = first option, 5 = last option).
4. A green box shows how many questions were filled and which option label was used.
5. Review the form, then click **Submit** yourself.
6. Repeat for the next teacher or form.

## Install

1. Download or clone this repo.
2. Open `chrome://extensions` (or `brave://extensions`).
3. Turn on **Developer Mode**.
4. Click **Load unpacked** and select this folder.

## Things to know

- **Works only on `sms.iul.ac.in/Student/Feedback*`.** It requests no access to any other site.
- **It never submits for you.** Review the form before clicking Submit.
- **Check the scale.** Option 5 can mean different things on different questions (for example, negatively worded ones). If the green box lists more than one label, scan the form first.
- **Site-specific.** If the portal changes its HTML, the selectors may break.
- **Checkbox fallback.** If normal ticking fails on a page, the extension falls back to a workaround and tells you it did.
- **Be honest in your feedback.** This tool saves clicks, not thinking. Choose the rating that reflects your experience.

## Files

- `manifest.json`: extension config and permissions (one domain only)
- `background.js`: runs the script when you click the icon
- `content.js`: finds the questions and ticks the chosen option


## Disclaimer

Not affiliated with Integral University. Use at your own risk and follow your institution's rules.
