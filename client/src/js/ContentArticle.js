import React, { Component } from "react";

import "../scss/ContentArticle.scss";

// Add classes for unloaded / broken images
import loadImages from "../functions/loadImages.js";
// Format article body in markdown-esque style with html
import formatArticle from "../functions/formatArticle.js";

// Specific article in /news/*
export default (class ContentArticle extends Component {
  async componentDidMount() {
    loadImages();
  }

  render() {
    const article = this.props.article || { skeleton: true };

    return (
      <div className={"ContentArticle" + (article.skeleton ? " skeleton" : "")}>
        {/* Topic with breadcrumbs */}
        <div className="topics">
          {(article.topic || ["Home", "News", "Other"]).map((topic, index) => {
            return (
              <h2 key={index}>
                <span>{topic || "Something"}</span>
              </h2>
            );
          })}

          {!article.labs ? (
            <></>
          ) : (
            <h2 className="labs">
                <i className="fa fa-flask"></i>
                Trustworthy Labs
            </h2>
          )}
        </div>

        {/* Big headline */}
        <h1 className="headline">
          {article.headline || "Important News Headline"}
        </h1>

        {/* Author, Time, and Final Topic */}
        <div className="stats">
          <h2 className="author">
            <span>
              <i className="fa fa-user"></i>
              {article.author || "Unknown Author"}
            </span>
          </h2>
          <h2 className="time">
            <span>
              <i className="fa fa-calendar"></i>
              {article.time || "Unknown Time"}
            </span>
          </h2>
          <h2 className="topic">
            <span>
              <i className="fa fa-tags"></i>
              {(article.topic && article.topic.slice(-1)[0]) || "Unknown Topic"}
            </span>
          </h2>
        </div>

        {/* Image above or right */}
        <div className="img-contain">
          <div className="img-wrap">
            <img
              src={article.image}
              alt={article.alt || "Headline image"}
              title={article.alt || "Headline image"}
              className="unloaded"
            />
          </div>
        </div>

        {/* Formatted body */}
        <section className="body">{formatArticle(article.body)}</section>
      </div>
    );
  }
});
