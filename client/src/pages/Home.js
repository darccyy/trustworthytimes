import { Component } from "react";

import "../css/App.min.css";

// Components
import ScrollBanner from "../js/ScrollBanner";
import SlideShow from "../js/SlideShow";
import ArticleList from "../js/ArticleList";

// Add classes for unloaded / broken images
import loadImages from "../functions/loadImages";
// Shuffle news articles
import shuffleArray from "../functions/shuffleArticles";

class Home extends Component {
  state = { news: null };

  async componentDidMount() {
    // Fetch all news
    fetch("/api/news")
      .then(res => res.json())
      .then(news => this.setState({ news }));

    loadImages();
  }

  render() {
    // Home page
    return (
      <div className="Home">
        {/* Default title - Don't change */}

        {/* Components */}
        <ScrollBanner
          news={this.state.news && shuffleArray(this.state.news)}
        />
        <SlideShow
          news={this.state.news && shuffleArray(this.state.news)}
        />
        <ArticleList
          news={this.state.news && shuffleArray(this.state.news)}
        />
      </div>
    );
  }
}

export default Home;
