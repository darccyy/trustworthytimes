import { Component } from "react";
import Helmet from "react-helmet";

// Components
import PostArticle from "../js/PostArticle";
import Error404 from "../pages/Error404";

// Add classes for unloaded / broken images
import loadImages from "../functions/loadImages";

class Post extends Component {
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

    loadImages();
  }

  render() {
    // Specific post layout
    return (
      <div className="Post">
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
            Trustworthy Times (Post Format)
          </title>
        </Helmet>

        <main id="main">
          {(() => {
            // Article
            if (this.state.PATH[1]) {
              if (this.state.article || this.state.article === false) {
                return (
                  <>
                    {/* Article with content */}
                    <PostArticle article={this.state.article} />
                  </>
                );
              }
            }

            // 404 Page (For article)
            return <Error404 isArticle={true} />;
          })()}
        </main>
      </div>
    );
  }
}

export default Post;
