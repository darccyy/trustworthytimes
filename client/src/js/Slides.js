import { Component } from "react";

import "../css/Slides.min.css";

// Components
import SlideShow from "../js/SlideShow";
import VerticalSlide from "../js/VerticalSlide";

// Shuffle news articles
import shuffleArray from "../functions/shuffleArticles";

class Slides extends Component {
  render() {
    // SlideShow & VerticalSlide together
    return (
      <div className="Slides">
        <SlideShow news={this.props.news && shuffleArray(this.props.news).slice(0, 12)} />
        <VerticalSlide
          news={this.props.news && shuffleArray(this.props.news).slice(0, 8)}
        />
      </div>
    );
  }
}

export default Slides;
