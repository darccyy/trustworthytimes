import React, { Component } from "react";

import { loadImages } from "../functions.js";

class Articles extends Component {
  async componentDidMount() {
    loadImages();
  }

  render() {
    return (
      <ul className="Articles">
        {this.props.state.news.map(article => {
          if (article.hide) {
            return "";
          }

          return (
            <li key={article.id}>
              <a href={window.location.origin + "/news/" + article.id}>
                <div className="img-contain">
                  <div className="img-wrap">
                    <img
                      src={article.image}
                      alt={article.alt || "Headline image"}
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
              </a>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Articles;
