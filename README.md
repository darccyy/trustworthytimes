<img src="https://trustworthytimes.herokuapp.com/image/title.png" alt="The Trustworthy Times" />

The most honest news source. Just kidding it is satire.

[The Trustworthy Times](https://trustworthytimes.herokuapp.com)

[Contact Page](https://trustworthytimes.herokuapp.com/contact)

[Report an Issue](https://github.com/darccyy/trustworthytimes/issues/new/choose)

<img src="https://trustworthytimes.herokuapp.com/image/logo-short.png" alt="Logo: Megaphone & Handshake" />

# Contributing

Build off [React Express Template](https://github.com/darccyy/react-express-template#react-express-template), refer to this document for contribution instructions

## Modules & Frameworks

Build with:

- Client
- - NodeJS
- - React
- - Scss
- Server
- - NodeJS
- - Express
- - (NextJS in future..?)
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
│
├── news/ # News articles here
│   └── ... # Markdown file with article
│
└── client/ # All client files
    ├── public/ # Static files (Not including font)
    │   ├── index.html # Main html, Nothing in here
    │   └── image/... # Images, obviously
    │
    └── src/ # Dynamic React files
        ├── index.js # Main React file
        ├── font/... # Font
        ├── functions/... # Small functions for js files
        │
        ├── pages/ # Basically the urls
        │   ├── ... # Home, Article, ect.
        │   └── Layout.js # Main file for layout: Header, Footer, ect.
        │
        ├── js/ # React js files for components
        │   └── ... # Scrolling Banner, Article List, ect.
        │
        └── scss/ # Styles in scss
            ├── ... # Corresponding to js folder
            └── App.scss # For main styles
```

## Adding / Editing Articles

Open the `./news` folder.
To edit an article, edit the file.
To create a new article, copy `./news/template.md` and rename it to the new article id, then fill out the points.

# Todo

## Features

- [ ] Add 'More from this author' feature
- [ ] Add Trustworthy Labs page
- [ ] Add tags for articles

## Bugs

- [ ] Proofread articles
- [ ] Scrolling banner not working

## Fixes

- [ ] Add different image resolution loading
- [ ] Fix readme
- [ ] Make article formatting markdown compatible

## Overhauls

- [ ] Move to server side rendering
- [ ] Fix links reloading document
- [ ] Add language support

## Development

- [ ] Add variables to scss
- [ ] Clean scss

<details>

<summary> <b>Completed</b> </summary>

- [x] Make all `export` the same
- [x] Add post text
- [x] Fix Labs icon for post article
- [x] Remove alt text in skeleton loading
- [x] Add Trustworthy Labs icon
- [x] Switch to `npm ci`
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
