import React, { Component } from "react";

class Articles extends Component {
  render() {
    return (
      <ul className="Articles">
        {Object.values(this.props.state.news).map((article, index) => {
          var id = Object.keys(this.props.state.news)[index];

          return (
            <li key={id}>
              <a href={this.props.state.URL + "/news/" + id}>
                <div className="img-wrap">
                  <img
                    src={article.image}
                    alt={article.alt || "Headline image"}
                  />
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
