import React, { Component } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";

import "../css/SlideShow.min.css";

// Add classes for unloaded / broken images
import loadImages from "../functions/loadImages.js";

// Slideshow in home page
export default (class SlideShow extends Component {
  async componentDidMount() {
    loadImages();
    clearTimeout(this.slide_changer);
    this.changeSlide("right");
  }

  // Move to next slide
  changeSlide(direction, component) {
    if (!component) {
      component = this;
    }

    // Reset auto timer
    clearTimeout(component.slide_changer);
    component.slide_changer = setTimeout(
      () => {
        component.changeSlide("right", component);
      },
      5000,
      { component },
    );

    // Remove animation class
    $("#SlideShow-list").attr("class", "");

    // Dont move if less than 2 articles
    if (!this.props.news || this.props.news?.length < 2) {
      return;
    }

    // Timeout because css is funky like that
    setTimeout(() => {
      var children = Object.values($("#SlideShow-list").children()).slice(
        0,
        -2,
      );

      // Move last article to front or vice versa, depending on direction
      if (this.props.news?.length === 2) {
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

      // Add animation class
      $("#SlideShow-list").attr("class", direction);
    }, 10);
  }

  render() {
    return (
      <div className="SlideShow">
        {/* Wrapper */}
        <div className="wrap">
          <ul id="SlideShow-list">
            {(this.props.news || [{ skeleton: true }]).map((article, index) => {
              // Hidden article
              if (article.hide) {
                return "";
              }

              return (
                <li key={index} className={article.skeleton ? "skeleton" : ""}>
                  <Link
                    to={!this.props.news ? "." : "/news/" + article.id}
                    reloadDocument
                    tabIndex={-1}
                  >
                    {/* Image behind text */}
                    <div className="img-wrap">
                      <img
                        src={article.image}
                        alt={article.alt || "Headline image"}
                        title={article.alt || "Headline image"}
                        className="unloaded"
                      />
                    </div>

                    {/* Watermark in top right */}
                    <img
                      src="/image/logo-short.png"
                      alt={"Logo: Megaphone & Handshake"}
                      className="watermark unloaded"
                    />

                    {/* Text in front - headline and subtitle */}
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
            })}
          </ul>

          {/* Navigation buttons - Only show if more than one article */}
          {(() => {
            if (this.props.news?.length > 1) {
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
