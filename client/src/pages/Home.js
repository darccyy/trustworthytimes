import { Component } from "react";
import Helmet from "react-helmet";

import "../css/App.min.css";

import ArticleList from "../js/ArticleList";
import ScrollBanner from "../js/ScrollBanner";
import SlideShow from "../js/SlideShow";

import loadImages from "../functions/loadImages";
import shuffleArray from "../functions/shuffleArticles";

class Home extends Component {
  state = { news: null };

  async componentDidMount() {
    fetch("/api/news")
      .then(res => res.json())
      .then(news => this.setState({ news }));

    loadImages();
  }

  render() {
    return (
      <div className="Home">
        <Helmet>
          <title>Trustworthy Times</title>
        </Helmet>

        <ScrollBanner
          state={{
            news: this.state.news && shuffleArray(this.state.news),
          }}
        />
        <SlideShow
          state={{
            news: this.state.news && shuffleArray(this.state.news),
          }}
        />
        <ArticleList
          state={{
            news: this.state.news && shuffleArray(this.state.news),
          }}
        />
      </div>
    );
  }
}

export default Home;
