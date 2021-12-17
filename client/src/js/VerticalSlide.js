import React, { Component } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";

import "../css/VerticalSlide.min.css";

// Add classes for unloaded / broken images
import loadImages from "../functions/loadImages.js";

// Vertical Slideshow in home page
export default (class VerticalSlide extends Component {
  async componentDidMount() {
    loadImages();
    clearTimeout(this.slide_changer);
    this.changeSlide("down");
  }

  // Move to next slide
  changeSlide(direction, component, isAuto) {
    if (!component) {
      component = this;
    }

    // Reset auto timer
    clearTimeout(component.slide_changer);
    component.slide_changer = setTimeout(
      () => {
        component.changeSlide("down", component, true);
      },
      2000,
      { component },
    );

    // Only reset time (not move) if hovering
    if (isAuto && $(".VerticalSlide")[0] && $(".VerticalSlide").is(":hover")) {
      return;
    }

    // Remove animation class
    $("#VerticalSlide-list").attr("class", "");

    // Dont move if less than 2 articles
    if (!this.props.news || this.props.news?.length < 3) {
      return;
    }

    // Timeout because css is funky like that
    setTimeout(() => {
      var children = Object.values($("#VerticalSlide-list").children()).slice(
        0,
        -2,
      );

      // Move last article to front or vice versa, depending on direction
      if (this.props.news?.length === 2) {
        children = [children[1], children[0], children[1]];
      } else {
        if (direction === "up") {
          children = [...children.slice(-2), ...children.slice(0, -2)];
        } else {
          children = [...children.slice(2), ...children.slice(0, 2)];
        }
      }

      $("#VerticalSlide-list").html(
        children.map(i => {
          if (i) {
            return i.outerHTML;
          }
        }),
      );

      // Add animation class
      $("#VerticalSlide-list").attr("class", direction);
    }, 10);
  }

  render() {
    return (
      <div className="VerticalSlide">
        {/* Navigation button up */}
        <button
          className="nav-button up"
          onClick={() => this.changeSlide("up")}
        >
          <i className="fa fa-chevron-up"></i>
        </button>

        <div className="contain">
          <ul id="VerticalSlide-list" className={"skeleton"}>
            {(this.props.news || Array(5).fill({ skeleton: true })).map(
              (article, index) => {
                // Hidden article
                if (article.hide) {
                  return "";
                }

                return (
                  <li
                    key={index}
                    className={article.skeleton ? "skeleton" : ""}
                  >
                    <Link to={!this.props.news ? "." : "/news/" + article.id}>
                      {/* Image above text */}
                      <div className="img-wrap">
                        <img
                          src={article.image}
                          alt={article.alt || "Headline image"}
                          title={article.alt || "Headline image"}
                          className="unloaded"
                        />
                      </div>

                      {/* Headline bottom */}
                      <div className="text-wrap">
                        <h1 className="headline">
                          <span>
                            {article.headline || "Important News Headline"}
                          </span>
                        </h1>
                      </div>
                    </Link>
                  </li>
                );
              },
            )}
          </ul>
        </div>

        {/* Navigation button down */}
        <button
          className="nav-button down"
          onClick={() => this.changeSlide("down")}
        >
          <i className="fa fa-chevron-down"></i>
        </button>
      </div>
    );
  }
});
