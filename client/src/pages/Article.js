import React, { Component } from "react";
import Helmet from "react-helmet";

import "../components/css/App.min.css";

import ScrollBanner from "../components/js/ScrollBanner";
import ContentArticle from "../components/js/ContentArticle";

import loadImages from "../functions/loadImages";
import shuffleArray from "../functions/shuffleArticles";

class Article extends Component {
  state = {
    article: null,
    news: null,
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
      <div id="Article">
        <Helmet>
          <title>
            {(() => {
              if (this.state.PATH.join("") === "") {
                return "";
              }

              if (this.state.article === null) {
                return "Loading - ";
              }

              if (this.state.PATH[0] === "news" && this.state.PATH[1]) {
                if (this.state.article) {
                  return (this.state.article.headline || "Article") + " - ";
                }
              }

              return "404 - ";
            })()}
            Trustworthy Times
          </title>
        </Helmet>

        {(() => {
          // Specific article page
          if (this.state.PATH[0] === "news" && this.state.PATH[1]) {
            return (
              <>
                <ScrollBanner
                  state={{
                    news: this.state.news && shuffleArray(this.state.news),
                  }}
                />
                <ContentArticle
                  state={{
                    article: this.state.article,
                  }}
                />
              </>
            );
          }

          // 404 Page
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
