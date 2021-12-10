import React, { Component } from "react";
import $ from "jquery";

import "../css/ScrollBanner.min.css";

import loadImages from "../../functions/loadImages.js";

export default (class ScrollBanner extends Component {
  async componentDidMount() {
    loadImages();
    this.resize();

    window.addEventListener("resize", this.resize);
  }

  resize() {
    var width = $("#ScrollBanner-wrap").width();
    $("#ScrollBanner-move")
      .children()
      .each((i, e) => {
        width += $(e).width() + 15;
      });
    $("#ScrollBanner-move").width(Math.max(width, 0) + "px");
    $("#ScrollBanner-move").css(
      "animation-duration",
      Math.max(width * 0.007, 0) + "s",
    );
  }

  render() {
    return (
      <div className="ScrollBanner">
        <div className="wrap" id="ScrollBanner-wrap">
          <div className="move" id="ScrollBanner-move">
            {this.props.state.news.map(article => {
              if (article.hide) {
                return "";
              }

              return (
                <div className="item" key={article.id}>
                  <a href={window.location.origin + "/news/" + article.id}>
                    <div className="img-wrap">
                      <img
                        src={article.image}
                        alt={article.alt || "Headline image"}
                        title={article.alt || "Headline image"}
                        className="unloaded"
                      />
                    </div>

                    <div className="text-wrap">
                      <h1 className="headline">
                        {article.headline || "[No headline]"}
                      </h1>
                    </div>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
});
