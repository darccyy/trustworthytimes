import { Component } from "react";

// Components
import ScrollBanner from "../js/ScrollBanner";
import Slides from "../js/Slides";
import ArticleList from "../js/ArticleList";

// Add classes for unloaded / broken images
import loadImages from "../functions/loadImages";
// Shuffle, sort, and slice news articles
import listArticles from "../functions/listArticles";

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
        <ScrollBanner news={listArticles(this.state.news)} />
        <main id="main">
          <Slides news={this.state.news} />
          <ArticleList news={listArticles(this.state.news)} />
        </main>
      </div>
    );
  }
}

export default Home;
