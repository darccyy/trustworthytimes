import React, { Component } from "react";

import "../css/ContentArticle.min.css";

import loadImages from "../../functions/loadImages.js";
import formatArticle from "../../functions/formatArticle.js";

export default (class ContentArticle extends Component {
  async componentDidMount() {
    loadImages();
  }

  render() {
    const article = this.props.state.article || { skeleton: true };

    return (
      <div className={"ContentArticle" + (article.skeleton ? " skeleton" : "")}>
        <div className="topics">
          {(article.topic || ["Home", "News", "Other"]).map((topic, index) => {
            return (
              <h2 key={index}>
                <span>{topic || "Something"}</span>
              </h2>
            );
          })}
        </div>

        <h1 className="headline">
          {article.headline || "Important News Headline"}
        </h1>

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

        <section className="body">{formatArticle(article.body)}</section>
      </div>
    );
  }
});
