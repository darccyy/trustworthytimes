import { Component } from "react";

import "../scss/Slides.scss";

// Components
import SlideShow from "../js/SlideShow";
import VerticalSlide from "../js/VerticalSlide";

// Shuffle, sort, and slice news articles
import listArticles from "../functions/listArticles";

// SlideShow & VerticalSlide together
export default class Slides extends Component {
  render() {
    return (
      <div className="Slides">
        <SlideShow
          news={listArticles(this.props.news, 12)}
        />
        <VerticalSlide
          news={listArticles(this.props.news, 8)}
        />
      </div>
    );
  }
}