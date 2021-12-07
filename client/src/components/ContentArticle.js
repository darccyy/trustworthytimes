import React, { Component } from "react";

import { loadImages, formatArticle } from "../functions.js";

class ContentArticle extends Component {
  async componentDidMount() {
    loadImages();
  }

  render() {
    var article = this.props.state.article;

    return (
      <div className="ContentArticle">
        <h1 className="topics">
          {(article.topic || ["Home", "Other"]).map(i => {
            return <span key={i}>{i || "Something"}</span>;
          })}
        </h1>

        <h1 className="headline">{article.headline || "[No headline]"}</h1>

        <h2 className="stats">
          <span className="author">
            <i className="fa fa-user"></i>
            {article.author || "Unknown Author"}
          </span>
          <span className="time">
            <i className="fa fa-calendar"></i>
            {article.time || "Unknown Time"}
          </span>
          <span className="topic">
            <i className="fa fa-tags"></i>
            {article.topic.slice(-1)[0] || "Unknown Topic"}
          </span>
        </h2>

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
}

export default ContentArticle;
