import React, { Component } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";

import "../css/ScrollBanner.min.css";

import loadImages from "../functions/loadImages.js";

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
    $("#ScrollBanner-move").css(
      "animation-duration",
      Math.max(width * 0.007, 0) + "s",
    );
    $("#ScrollBanner-move").width(Math.max(width, 0) + "px");
  }

  render() {
    return (
      <div className="ScrollBanner">
        <div className="wrap" id="ScrollBanner-wrap">
          <div className="move" id="ScrollBanner-move">
            {(this.props.news || Array(10).fill({ skeleton: true })).map(
              (article, index) => {
                if (article.hide) {
                  return "";
                }

                return (
                  <div
                    className={"item" + (article.skeleton ? " skeleton" : "")}
                    key={index}
                  >
                    <Link to={"/news/" + article.id} reloadDocument>
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
                          <span>
                            {article.headline || "Important News Article"}
                          </span>
                        </h1>
                      </div>
                    </Link>
                  </div>
                );
              },
            )}
          </div>
        </div>
      </div>
    );
  }
});
