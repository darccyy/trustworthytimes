import React, { Component } from "react";

import "../scss/PostThumb.scss";

// Add classes for unloaded / broken images
import loadImages from "../functions/loadImages.js";

// Specific article in /news/*
export default (class PostThumb extends Component {
  async componentDidMount() {
    loadImages();
    console.log(document.querySelector(".PostThumb"));
  }

  render() {
    const article = this.props.article || { skeleton: true };

    return (
      <div className={"PostThumb" + (article.skeleton ? " skeleton" : "")}>
        <div className="text-contain">
          {/* Big headline */}
          <h1 className="headline">
            <span>{article.headline || "Important News Headline"}</span>
          </h1>
          {/* Subtitle */}
          <h2 className="subtitle">
            <span>{article.subtitle || "Subtitle of the Article"}</span>
          </h2>
        </div>

        {/* Image above or right */}
        <div className="img-contain">
          <img
            src={article.image}
            alt={article.alt || "Headline image"}
            title={article.alt || "Headline image"}
            className="unloaded"
          />

          <div className="top-right">
            {/* Author */}
            <h3 className="author">
              <span>
                <i className="fa fa-user"></i>
                {article.author || "Unknown Author"}
              </span>
            </h3>

            {/* Labs icon */}
            {!article.labs ? (
              <></>
            ) : (
              <h3 className="labs">
                <i className="fa fa-flask"></i>
                Trustworthy Labs
              </h3>
            )}
          </div>
        </div>
      </div>
    );
  }
});
