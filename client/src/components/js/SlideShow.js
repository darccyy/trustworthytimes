import React, { Component } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";

import "../css/SlideShow.min.css";

import loadImages from "../../functions/loadImages.js";

export default (class SlideShow extends Component {
  async componentDidMount() {
    loadImages();
    this.changeSlide("right");
  }

  changeSlide(direction, component) {
    if (!component) {
      component = this;
    }

    clearTimeout(component.slide_changer);
    component.slide_changer = setTimeout(
      () => {
        component.changeSlide("right", component);
      },
      5000,
      { component },
    );

    $("#SlideShow-list").attr("class", "");

    if (!this.props.state.news || this.props.state.news?.length < 2) {
      return;
    }

    setTimeout(() => {
      var children = Object.values($("#SlideShow-list").children()).slice(
        0,
        -2,
      );

      if (this.props.state.news?.length === 2) {
        children = [children[1], children[0], children[1]];
      } else {
        if (direction === "left") {
          children = [children.slice(-1)[0], ...children.slice(0, -1)];
        } else {
          children = [...children.slice(1), children[0]];
        }
      }

      $("#SlideShow-list").html(
        children.map(i => {
          if (i) {
            return i.outerHTML;
          }
        }),
      );
      $("#SlideShow-list").attr("class", direction);
    }, 10);
  }

  render() {
    return (
      <div className="SlideShow">
        <div className="wrap">
          <ul id="SlideShow-list">
            {(this.props.state.news || [{ skeleton: true }]).map(
              (article, index) => {
                if (article.hide) {
                  return "";
                }

                return (
                  <li
                    key={index}
                    className={article.skeleton ? "skeleton" : ""}
                  >
                    <Link
                      to={!this.props.state.news ? "." : "/news/" + article.id}
                    >
                      <img
                        src={article.image}
                        alt={article.alt || "Headline image"}
                        title={article.alt || "Headline image"}
                        className="main unloaded"
                      />

                      <img
                        src="/image/logo-short.png"
                        alt={"Logo: Megaphone & Handshake"}
                        className="watermark unloaded"
                      />

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

          {(() => {
            if (this.props.state.news?.length > 1) {
              return (
                <div className="nav-buttons">
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
});
