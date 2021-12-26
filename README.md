<img src="https://trustworthytimes.herokuapp.com/image/title.png" alt="The Trustworthy Times" />

The most honest news source. Just kidding it is satire.

[The Trustworthy Times](https://trustworthytimes.herokuapp.com)

[Contact Page](https://trustworthytimes.herokuapp.com/contact)

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
        └── scss/ # Styles in scss
            ├── ... # Corresponding to js folder
            └── App.scss # For main styles
```

## Adding / Editing Articles

Open the `./news` folder.
To edit an article, edit the file.
To create a new article, copy `./news/template.md` and rename it to the new article id, then fill out the points.

To put it onto the server, create a pull request (idk just search it up), and include a description of what has been changed.

# Todo

- [ ] Remove alt text in skeleton loading
- [ ] Add different image resolution loading
- [ ] Proofread articles - fix case
- [ ] Fix readme
- [ ] Download all images
- [ ] Add variables to scss
- [ ] Clean scss
- [ ] Make look better
- [ ] Move to server side rendering

<details>

<summary> <b>Completed</b> </summary>

- [x] Add scss support without css compilation
- [x] Fix article list on narrow screen
- [x] Add tab support
- [x] Fix skeleton loading - content article not obfuscating
- [x] Make article buttons go previous / next article
- [x] Fix slideshows
- [x] Fix link loading
- [x] Add 'Exclusive' article list for unlisted articles
- [x] Overhaul markdown styling
- [x] Fix margin for markdown styling
- [x] Add print format
- [x] Add reload button for logo
- [x] Fix hidden articles loading in article buttons, ect
- [x] Add skeleton loading for vertical slideshow
- [x] Add arrow buttons to next article
- [x] Add other browser support
- [x] Stop vertical slideshow timer in content article
- [x] Add articles
- [x] Add vertical slideshow
- [x] Add comments
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
