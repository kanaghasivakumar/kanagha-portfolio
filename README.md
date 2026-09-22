# kanagha-portfolio

One-page personal portfolio — static HTML/CSS/JS, no build step, no dependencies.

Live at **https://kanaghasivakumar.github.io/kanagha-portfolio/** (the URL printed on my resume).

## Files

```
index.html                         all page content
styles.css                         design tokens + layout (light & dark)
script.js                          theme toggle, scroll-spy nav, reveal animations
assets/kanagha.jpg                 hero photo
assets/Kanagha_Sivakumar_Resume.pdf  the downloadable resume
```

## Deploying to GitHub Pages

```bash
git init
git add .
git commit -m "Add portfolio site"
git branch -M main
git remote add origin https://github.com/kanaghasivakumar/kanagha-portfolio.git
git push -u origin main
```

Then on GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch**,
branch `main`, folder `/ (root)`. The site is live a minute or two later.

## Updating the resume

Replace `assets/Kanagha_Sivakumar_Resume.pdf` with the new PDF, keeping the same filename,
then commit and push. No other change is needed.

## Local preview

Open `index.html` directly in a browser, or:

```bash
python -m http.server 8000
```
