const bodyParser = require("body-parser");
const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const staticFiles = express.static(path.join(__dirname, "../client/build"));
app.use(staticFiles);

const router = express.Router();

// All news articles
router.get("/api/news", (req, res) => {
  res.sendFile(path.join(__dirname, "../news.json"));
});

// Single news article
router.get("/api/article", (req, res) => {
  var news = JSON.parse(fs.readFileSync(path.join(__dirname, "../news.json")));
  for (var i in news) {
    if (news[i].id === req.query.id) {
      res.json(news[i]);
    }
  }
  res.json(null);
});

app.use(router);

// any routes not picked up by the server api will be handled by the react router
app.use("/*", staticFiles);

app.set("port", process.env.PORT || 3001);
app.listen(app.get("port"), () => {
  console.log(`Listening on ${app.get("port")}`);
});
