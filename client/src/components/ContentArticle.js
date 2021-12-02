import React, { Component } from "react";

class ContentArticle extends Component {
  render() {
    var article = this.props.state.article;

    return (
      <div className="ContentArticle">
        <h1 className="headline">{article.headline || "[No headline]"}</h1>

        <div className="img-wrap">
          <img src={article.image} alt={article.alt || "Headline image"} />
        </div>

        <p className="body">
          {article.body || "This is a news article"}
        </p>
      </div>
    );
  }
}

export default ContentArticle;
