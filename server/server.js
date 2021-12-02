const bodyParser = require("body-parser");
const express = require("express");
const path = require("path");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const staticFiles = express.static(path.join(__dirname, "../client/build"));
app.use(staticFiles);

const router = express.Router();

router.get("/api/news", (req, res) => {
  res.sendFile(path.join(__dirname, "../news.json"));
});

app.use(router);

// any routes not picked up by the server api will be handled by the react router
app.use("/*", staticFiles);

app.set("port", process.env.PORT || 3001);
app.listen(app.get("port"), () => {
  console.log(`Listening on ${app.get("port")}`);
});
