import { Component } from "react";
import Helmet from "react-helmet";

import "../css/App.min.css";

import ScrollBanner from "../js/ScrollBanner";
import ContentArticle from "../js/ContentArticle";

import loadImages from "../functions/loadImages";
import shuffleArray from "../functions/shuffleArticles";

class Article extends Component {
  state = {
    article: false,
    news: false,
    PATH: window.location.pathname.split("/").slice(1),
  };

  async componentDidMount() {
    fetch(`/api/article?id=${this.state.PATH[1]}`)
      .then(res => res.json())
      .then(article => this.setState({ article }));

    fetch("/api/news")
      .then(res => res.json())
      .then(news => this.setState({ news }));

    loadImages();
  }

  render() {
    return (
      <div className="Article">
        <Helmet>
          <title>
            {(() => {
              if (this.state.PATH[1]) {
                if (this.state.article === false) {
                  return "Loading - ";
                }

                if (this.state.article) {
                  return (this.state.article.headline || "Article") + " - ";
                }
              }

              return "404 - ";
            })()}
            Trustworthy Times
          </title>
        </Helmet>

        <ScrollBanner
          state={{
            news: this.state.news && shuffleArray(this.state.news),
          }}
        />

        {(() => {
          // Specific article page
          if (this.state.PATH[1]) {
            if (this.state.article || this.state.article === false) {
              return (
                <ContentArticle
                  state={{
                    article: this.state.article,
                  }}
                />
              );
            }
          }

          // 404 Page (For article)
          return (
            <div className="Error404">
              <h1>
                404 - Unknown News Article
                <i className="fa fa-bullhorn" />
                <i className="fa fa-handshake-o" />
              </h1>
            </div>
          );
        })()}
      </div>
    );
  }
}

export default Article;
