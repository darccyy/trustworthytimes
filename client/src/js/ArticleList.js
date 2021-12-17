import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../css/ArticleList.min.css";

// Add classes for unloaded / broken images
import loadImages from "../functions/loadImages.js";

// List of articles in home page
export default (class ArticleList extends Component {
  async componentDidMount() {
    loadImages();
  }

  render() {
    return (
      <ul className="ArticleList">
        {(this.props.news || Array(10).fill({ skeleton: true })).map(
          (article, index) => {
            // Hidden article
            if (article.hide) {
              return "";
            }

            return (
              <li key={index} className={article.skeleton ? "skeleton" : ""}>
                <Link to={!this.props.news ? "." : "/news/" + article.id}>
                  {/* Image above or left */}
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

                  {/* Headline and subtitle */}
                  <div className="text-wrap">
                    <h1 className="headline">
                      <span>
                        {article.headline || "Important News Headline"}
                      </span>
                    </h1>
                    <h2 className="subtitle">
                      <span>
                        {article.subtitle || "Subtitle of the Article"}
                      </span>
                    </h2>
                  </div>
                </Link>
              </li>
            );
          },
        )}
      </ul>
    );
  }
});
