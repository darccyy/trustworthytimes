import { Component } from "react";
import { Link } from "react-router-dom";

// Add classes for unloaded / broken images
import loadImages from "../functions/loadImages";

import "../scss/Exclusive.scss";

export default class Exclusive extends Component {
  componentDidMount() {
    loadImages();
  }

  render() {
    var article = this.props.news?.[0] || { skeleton: true };

    return (
      <div className={"Exclusive" + (article.skeleton ? " skeleton" : "")}>
        <Link
          to={!this.props.news ? "." : "/news/" + article.id}
          reloadDocument
        >
          <img
            src={article.image}
            alt={article.alt || "Headline image"}
            title={article.alt || "Headline image"}
            className="unloaded"
          />

          <div className="top">
            <h1>Exclusive!</h1>
            <h2>Only on The Trustworthy Times</h2>
          </div>

          <div className="bottom">
            <h2 className="headline">
              <span>{article.headline || "Important News Headline"}</span>
            </h2>
            <h3 className="subtitle">
              <span>{article.subtitle || "Subtitle of the Article"}</span>
            </h3>
          </div>
        </Link>
      </div>
    );
  }
}
