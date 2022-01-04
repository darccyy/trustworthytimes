import React, { Component } from "react";

import "../scss/PostText.scss";

// Add classes for unloaded / broken images
import loadImages from "../functions/loadImages";
// Copy text to clipboard
import copyText from "../functions/copyText";

// Specific article in /news/*
export default (class PostText extends Component {
  async componentDidMount() {
    loadImages();
    console.log(document.querySelector(".PostText"));
  }

  copyDescription() {
    var text = (document.querySelector(".description")?.innerText || "")
      .split("\n")
      .join("\n\n");

    console.log(text);
    copyText(text);
  }

  copyAlt() {
    var text = document.querySelector(".alt-text")?.innerText || "";

    console.log(text);
    copyText(text);
  }

  render() {
    const article = this.props.article || { skeleton: true };

    return (
      <div className={"PostText" + (article.skeleton ? " skeleton" : "")}>
        <div className="text-contain">
          <div className="description" onClick={this.copyDescription}>
            {/* Big headline */}
            <h1 className="text headline">
              <span>{article.headline || "Important News Headline"}</span>
            </h1>
            {/* Subtitle */}
            <h2 className="text subtitle">
              <span>{article.subtitle || "Subtitle of the Article"}</span>
            </h2>
            <h3 className="text read">
              <span>
                Read more at https://trustworthytimes.herokuapp.com
                {article.id ? "/news/" + article.id : ""}
              </span>
            </h3>
            {/* Hashtags */}
            <h4 className="text hashtags">
              {[
                "trustworthytimes",
                "news",
                "satire",
                article.labs ? "trustworthylabs" : "",
              ].map((hashtag, index) => {
                return (
                  <span key={index}>
                    {index ? " " : ""}#{hashtag}
                  </span>
                );
              })}
            </h4>
          </div>

          <h4 className="alt-text" onClick={this.copyAlt}>
            {article.alt || "Alt text"}
          </h4>
        </div>
      </div>
    );
  }
});
