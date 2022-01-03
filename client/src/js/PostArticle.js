import React, { Component } from "react";

import "../scss/PostArticle.scss";

// Add classes for unloaded / broken images
import loadImages from "../functions/loadImages.js";

// Specific article in /news/*
export default (class PostArticle extends Component {
  async componentDidMount() {
    loadImages();
    console.log(document.querySelector(".PostArticle"));
  }

  render() {
    const article = this.props.article || {skeleton: true};

    return (
      <div
        className={"PostArticle" + (article.skeleton ? " skeleton" : "")}
      >
        {/* Labs icon */}
        {!article.labs ? (
          <></>
        ) : (
          <h2 className="labs">
            <i className="fa fa-flask"></i>
            Trustworthy Labs
          </h2>
        )}

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
          {/* Author */}
          <h3 className="author">
            <span>
              <i className="fa fa-user"></i>
              {article.author || "Unknown Author"}
            </span>
          </h3>
        </div>
      </div>
    );
  }
});
