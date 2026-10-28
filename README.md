# Elizabeth Dillinger — painted buttons

Open `index.html` in Safari to preview. No server or build step needed.

## Edit the card
Open `settings.js`. Change the three artist titles in `titles`, and enter email, phone, Instagram and website in `contact`. Each button in `buttons` has editable `label`, `stroke`, `url`, `action` and `show`. Set `show: false` to hide a button; add another object to create one.

The six transparent PNG paint strokes are in `assets/strokes/` and can be replaced individually without modifying the background. Valid stroke values: `email`, `phone`, `instagram`, `portfolio`, `facebook`, `save-contact`. For a new social link, use `{ label: 'Your Label', stroke: 'facebook', url: 'https://...', show: true }`.

The original clean artwork `assets/background.png` is unchanged. This website is designed to fit the phone screen. The Save Contact button generates a vCard from `contact`.
