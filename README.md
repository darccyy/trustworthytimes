<img src="https://trustworthytimes.herokuapp.com/image/title.png" alt="The Trustworthy Times" />

The most honest news source. Just kidding it is satire.

[The Trustworthy Times](https://trustworthytimes.herokuapp.com)

[Contact Page (Not setup yet...)](https://trustworthytimes.herokuapp.com/contact)

[Report an Issue](https://github.com/darccyy/trustworthytimes/issues/new/choose)

<img src="https://trustworthytimes.herokuapp.com/image/logo-short.png" alt="Logo: Megaphone & Handshake" />

# Contributing

## Installation

```powershell
# Clone repository into ./trustworthytimes folder
git clone https://github.com/darccyy/trustworthytimes.git

# Install dependencies
npm run install
```

## Development

```powershell
# Start development server
npm run start:dev
```

Save file to update server

## Production

```powershell
# Build production
npm run build

# Start production server
npm run start
```

## Modules & Frameworks

Build with:

- Client
- - NodeJS
- - React
- - Scss
- Server
- - NodeJS
- - Express
- Hosting
- - GitHub
- - Heroku

Recommended:

- VSCode

## File Structure

Simplified file tree:

```py
./ # Root folder (trustworthytimes)
├── server/ # All server files
│   └── server.js # Main server file
├── news/ # News articles here
│   └── ... # Markdown file with article
└── client/ # All client files
    ├── public/ # Static files (Not including font)
    │   ├── index.html # Main html, Nothing in here
    │   └── image/... # Images, obviously
    └── src/ # Dynamic React files
        ├── index.js # Main React file
        ├── font/... # Font
        ├── functions/... # Small functions for js files
        ├── pages/ # Basically the urls
        │   ├── ... # Home, Article, ect.
        │   └── Layout.js # Main file for layout: Header, Footer, ect.
        ├── js/ # React js files for components
        │   └── ... # Scrolling Banner, Article List, ect.
        ├── scss/ # Styles in scss
        │   ├── ... # Corresponding to js folder
        │   └── App.scss # For main styles
        └── css/ # Compiled from scss
```

# Todo

- [ ] Add vertical slideshow
- [ ] Add comments
- [ ] Add articles
- [ ] Make look better

<details>

<summary><h2 style="display:inline"> Completed </h2></summary>

- [x] Make disclaimer better
- [x] Add proper 404 page
- [x] Populate contact page
- [x] Add issue templates
- [x] Fix readme
- [x] Add titles to other pages
- [x] Fix other links
- [x] Fix 404 Page for unknown articles
- [x] Add individual files for articles
- [x] Fix slideshow animation
- [x] Fix header sizing
- [x] Add skeleton loading
- [x] Fix key names
- [x] Start scroll banner earlier
- [x] Convert `<a>` to `<Link>`
- [x] Add router
- [x] Refactor component css
- [x] Change slideshow buttons
- [x] Add sliding banner
- [x] Add watermark to top right
- [x] API Error handling
- [x] Remove heroku-postbuild??
- [x] Add proper mobile support
- [x] Add descriptions, titles
- [x] Add article formatting

</details>
