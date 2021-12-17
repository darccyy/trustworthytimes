import { Component } from "react";
import Helmet from "react-helmet";

// Components
import ScrollBanner from "../js/ScrollBanner";
import ContentArticle from "../js/ContentArticle";
import ArticleButtons from "../js/ArticleButtons";
import Error404 from "../pages/Error404";

// Add classes for unloaded / broken images
import loadImages from "../functions/loadImages";
// Shuffle news articles
import shuffleArray from "../functions/shuffleArticles";

class Article extends Component {
  // Set default state
  state = {
    article: false,
    news: false,
    PATH: window.location.pathname.split("/").slice(1),
  };

  async componentDidMount() {
    // Fetch single article
    fetch(`/api/article?id=${this.state.PATH[1]}`)
      .then(res => res.json())
      .then(article => this.setState({ article }));

    // Fetch all news
    fetch("/api/news")
      .then(res => res.json())
      .then(news => this.setState({ news }));

    loadImages();
  }

  render() {
    // Specific article page
    return (
      <div className="Article">
        {/* Change title */}
        <Helmet>
          <title>
            {(() => {
              if (this.state.article === false) {
                return "Loading - ";
              }

              if (this.state.article) {
                return (this.state.article.headline || "Article") + " - ";
              }

              return "404 - ";
            })()}
            Trustworthy Times
          </title>
        </Helmet>

        {/* Scrolling banner */}
        <ScrollBanner news={this.state.news && shuffleArray(this.state.news)} />

        <main>
          {(() => {
            // Article
            if (this.state.PATH[1]) {
              if (this.state.article || this.state.article === false) {
                return <ContentArticle article={this.state.article} />;
              }
            }

            // 404 Page (For article)
            return <Error404 isArticle={true} />;
          })()}
        </main>

        <ArticleButtons
          news={this.state.news && shuffleArray(this.state.news).slice(0, 2)}
        />
      </div>
    );
  }
}

export default Article;
