import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../css/ArticleList.min.css";

import loadImages from "../../functions/loadImages.js";

export default (class ArticleList extends Component {
  async componentDidMount() {
    loadImages();
  }

  render() {
    return (
      <ul className="ArticleList">
        {this.props.state.news.map(article => {
          if (article.hide) {
            return "";
          }

          return (
            <li key={article.id}>
              <Link to={"/news/" + article.id}>
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

                <div className="text-wrap">
                  <h1 className="headline">
                    {article.headline || "[No headline]"}
                  </h1>
                  <h2 className="subtitle">
                    {article.subtitle || "This is a news article"}
                  </h2>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }
});
