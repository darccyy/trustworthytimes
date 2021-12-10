import React, { Component } from "react";
import $ from "jquery";

import { loadImages } from "../functions.js";

class SlideBanner extends Component {
  async componentDidMount() {
    loadImages();
    resizeSlideBanner();
  }

  render() {
    return (
      <div className="SlideBanner">
        <div className="wrap" id="SlideBanner-wrap">
          <div className="move" id="SlideBanner-move">
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
}

window.onresize = function () {
  resizeSlideBanner();
};

function resizeSlideBanner() {
  var width = $("#SlideBanner-wrap").width();
  $("#SlideBanner-move")
    .children()
    .each((i, e) => {
      width += $(e).width() + 15;
    });
  $("#SlideBanner-move").width(Math.max(width, 0) + "px");
  $("#SlideBanner-move").css(
    "animation-duration",
    Math.max(width * 0.007, 0) + "s",
  );
}

export default SlideBanner;
