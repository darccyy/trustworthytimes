import { Component } from "react";
import { Link } from "react-router-dom";

import "../css/ArticleButtons.min.css";

// Add classes for unloaded / broken images
import "../functions/loadImages";

// Buttons to go to next article
class ArticleButtons extends Component {
  render() {
    var news = this.props.news || [{}, {}];

    return (
      <div className="ArticleButtons">
        {(this.props.news || [{}, {}]).map((article, index) => {
          return (
            <Link
              key={index}
              className={index ? "right" : "left"}
              to={article.id ? "/news/" + article.id : "/"}
              reloadDocument
            >
              <img
                src={article.image}
                alt={article.headline || (index ? "Next" : "Previous") + " Article"}
                title={article.alt || "Headline Image"}
                className="unloaded"
              />
            </Link>
          );
        })}
      </div>
    );
  }
}

export default ArticleButtons;
