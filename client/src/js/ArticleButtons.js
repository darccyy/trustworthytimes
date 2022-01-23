import { Component } from "react";
import { Link } from "react-router-dom";

import "../scss/ArticleButtons.scss";

// Add classes for unloaded / broken images
import "../functions/loadImages";

// Buttons to go to next / previous article
export default class ArticleButtons extends Component {
  render() {
    return (
      <>
        {(this.props.news || [{}, {}]).map((article, index) => {
          return (
            <div className={"ArticleButtons " + (index ? "right" : "left")} key={index}>
              <Link
                key={index}
                to={article.id ? "/news/" + article.id : "/"}
                reloadDocument
              >
                <img
                  src={article.image}
                  alt={
                    article.headline ||
                    (index ? "Next" : "Previous") + " Article"
                  }
                  title={article.alt || "Headline Image"}
                  className="unloaded"
                />
              </Link>
            </div>
          );
        })}
      </>
    );
  }
}
