import { Component } from "react";

// Components
import ScrollBanner from "../js/ScrollBanner";
import Slides from "../js/Slides";
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
        <ScrollBanner news={this.state.news && shuffleArray(this.state.news)} />
        <main>
          <Slides news={this.state.news} />
          <ArticleList
            news={this.state.news && shuffleArray(this.state.news)}
          />
        </main>
      </div>
    );
  }
}

export default Home;
