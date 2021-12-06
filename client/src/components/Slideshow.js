import React, { Component } from "react";
import $ from "jquery";

import { loadImages } from "../functions.js";

class Slideshow extends Component {
  async componentDidMount() {
    loadImages();
  }

  changeSlide(direction) {
    $("#slideshow-list").attr("class", "");

    if (this.props.state.news.length < 2) {
      return;
    }

    setTimeout(() => {
      var children = Object.values($("#slideshow-list").children()).slice(
        0,
        -2,
      );

      if (this.props.state.news.length === 2) {
        children = [children[1], children[0], children[1]];
      } else {
        if (direction === "left") {
          children = [children.slice(-1)[0], ...children.slice(0, -1)];
        } else {
          children = [...children.slice(1), children[0]];
        }
      }

      $("#slideshow-list").html(
        children.map(i => {
          return i.outerHTML;
        }),
      );
      $("#slideshow-list").addClass(direction);
    }, 1);
  }

  render() {
    return (
      <div className="Slideshow">
        <div className="wrap">
          <ul id="slideshow-list">
            {this.props.state.news.map(article => {
              if (article.hide) {
                return "";
              }

              return (
                <li key={article.id}>
                  <a href={window.location.origin + "/news/" + article.id}>
                    <img
                      src={article.image}
                      alt={article.alt || "Headline image"}
                      className="main unloaded"
                    />

                    <img
                      src="/image/logo-short.png"
                      alt={"Logo: Megaphone & Handshake"}
                      className="watermark unloaded"
                    />

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

          {(() => {
            if (this.props.state.news?.length > 1) {
              return (
                <div>
                  <button
                    className="nav-button left"
                    onClick={() => this.changeSlide("left")}
                  >
                    <i className="fa fa-chevron-left"></i>
                  </button>

                  <button
                    className="nav-button right"
                    onClick={() => this.changeSlide("right")}
                  >
                    <i className="fa fa-chevron-right"></i>
                  </button>
                </div>
              );
            }
          })()}
        </div>
      </div>
    );
  }
}

export default Slideshow;
