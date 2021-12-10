import React, { Component } from "react";
import Helmet from "react-helmet";

import "../components/css/App.min.css";

import ArticleList from "../components/js/ArticleList";
import ScrollBanner from "../components/js/ScrollBanner";
import SlideShow from "../components/js/SlideShow";

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
      <div id="Home">
        {(() => {
          // Before news loads
          if (this.state.news === null) {
            return (
              <h2 className="loading">
                <span className="loading-spinner">&#x21bb;</span> Loading...
              </h2>
            );
          }

          // Home page
          return (
            <div>
              <ScrollBanner state={{ news: shuffleArray(this.state.news) }} />
              <SlideShow state={{ news: shuffleArray(this.state.news) }} />
              <ArticleList state={{ news: shuffleArray(this.state.news) }} />
            </div>
          );
        })()}
      </div>
    );
  }
}

export default Home;
