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

// Read all news articles
const news = (() => {
  var array = [];
  var files = fs.readdirSync(path.join(__dirname, "../news"));
  for (var i in files) {
    var file = fs
      .readFileSync(path.join(__dirname, "../news", files[i]))
      .toString()
      .split("\r\n")
      .join("\n");
    file = file.split("\n\n---\n\n");

    var meta = file[0].split("\n");
    file = {
      id: files[i].split(".").slice(0, -1).join("."),
      body: file
        .slice(1)
        .join("\r\n\r\n---")
        .split("\n\n")
        .join("\n")
        .split("\n"),
    };

    for (var i in meta) {
      if (meta[i].toLowerCase() === "# hidden") {
        file.hide = true;
        continue;
      }

      if (meta[i].startsWith("# ")) {
        file.headline = meta[i].slice(2);
        continue;
      }

      if (meta[i].startsWith("## ")) {
        file.subtitle = meta[i].slice(3);
        continue;
      }

      if (meta[i].startsWith("### ")) {
        file.alt = meta[i].slice(4);
        continue;
      }

      if (meta[i].startsWith("`")) {
        file.image = meta[i].slice(1, -1);
        continue;
      }

      if (meta[i].startsWith("> ")) {
        if (!file.author) {
          file.author = meta[i].slice(2);
        } else {
          file.time = meta[i].slice(2);
        }
        continue;
      }

      if (meta[i].startsWith("- ")) {
        if (!file.topic) {
          file.topic = [];
        }

        file.topic.push(meta[i].slice(2));
      }
    }

    array.push(file);
  }

  return array;
})();

fs.writeFileSync(
  path.join(__dirname, "../temp/news_output.json"),
  JSON.stringify(news, null, 2),
);

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

app.use(router);

// any routes not picked up by the server api will be handled by the react router
app.use("/*", staticFiles);

app.set("port", process.env.PORT || 3001);
app.listen(app.get("port"), () => {
  console.log(`Listening on ${app.get("port")}`);
});
