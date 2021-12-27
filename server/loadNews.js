const fs = require("fs");
const path = require("path");

// Read all news articles
module.exports = function () {
  var news = [];
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
      // Headlien
      if (meta[i].startsWith("# ")) {
        file.headline = meta[i].slice(2);
        continue;
      }

      // Subtitle
      if (meta[i].startsWith("## ")) {
        file.subtitle = meta[i].slice(3);
        continue;
      }

      // Image & Alt
      if (meta[i].startsWith("`")) {
        var image = meta[i].slice(1).split("` ");
        file.image = image[0];
        file.alt = image[1];
        continue;
      }

      // Author / Time
      if (meta[i].startsWith("> ")) {
        if (!file.author) {
          file.author = meta[i].slice(2);
        } else {
          file.time = meta[i].slice(2);
        }
        continue;
      }

      if (meta[i].startsWith("- ")) {
        if (file.headline) {
          // Topic
          if (!file.topic) {
            file.topic = [];
          }

          file.topic.push(meta[i].slice(2));
        } else {
          // Any other values
          var values = meta[i].slice(2).split(" ");
          if (values.length > 0) {
            if (values.length === 1) {
              file[values[0]] = true;
            } else {
              file[values[0]] = values.slice(1).join(" ");
            }
          }
        }
      }
    }

    news.push(file);
  }

  return news;
};
