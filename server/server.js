// Modules
const path = require("path");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// Use body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Access static files
const staticFiles = express.static(path.join(__dirname, "../client/build"));
app.use(staticFiles);

// Start router
const router = express.Router();

const loadNews = require("./loadNews");
var news = loadNews();

// All news articles
router.get("/api/news", (req, res) => {
  res.json(news);
});

// Single news article
router.get("/api/article", (req, res) => {
  for (var i in news) {
    if (news[i].id === req.query.id) {
      res.json(news[i]);
    }
  }
  res.json(null);
});

// Reload news
router.get("/api/reload", (req, res) => {
  news = loadNews();
  console.log("News reloaded from API");
  res.sendStatus(200);
});

// Use router
app.use(router);

// any routes not picked up by the server api will be handled by the react router
app.use("/*", staticFiles);

// Start server
app.set("port", process.env.PORT || 3001);
app.listen(app.get("port"), () => {
  console.log(`Listening on ${app.get("port")}`);
});
