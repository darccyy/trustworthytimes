import React, { Component } from "react";
import Helmet from "react-helmet";

import Articles from "./components/Articles.js";
import ContentArticle from "./components/ContentArticle.js";
import FourOFour from "./components/FourOFour.js";
import { loadImages } from "./functions.js";

class App extends Component {
  state = { news: null };

  async componentDidMount() {
    fetch("/api/news")
      .then(res => res.json())
      .then(news => this.setState({ news }));

    loadImages();
  }

  render() {
    var PATH = window.location.pathname.split("/").slice(1);

    return (
      <div id="App">
        <Helmet>
          <title>
            {(() => {
              if (PATH.join("") === "") {
                return "";
              }

              if (this.state.news === null) {
                return "Loading - ";
              }

              if (PATH[0] === "news") {
                if (this.state.news[PATH[1]]) {
                  return (
                    (this.state.news[PATH[1]].headline || "Article") + " - "
                  );
                }
              }

              return "404 - ";
            })()}
            Trustworthy Times
          </title>

          <meta
            name="description"
            content={(() => {
              if (PATH.join("") === "") {
                return "The Trustworthy Times - The most honest news source";
              }

              if (this.state.news === null) {
                return "Loading...";
              }

              if (PATH[0] === "news") {
                if (this.state.news[PATH[1]]) {
                  return (
                    (this.state.news[PATH[1]].headline || "Article") +
                    "\n" +
                    (this.state.news[PATH[1]].subtitle || "Article Description")
                  );
                }
              }

              return "404 - Unknown path";
            })()}
          />
        </Helmet>

        <header>
          <h1>
            <a href={window.location.origin}>
              <img
                src="/image/title.png"
                alt="Trustworthy Times"
                className="unloaded"
              />
            </a>
          </h1>
        </header>

        <main>
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
            if (PATH.join("") === "") {
              return <Articles state={this.state} />;
            }

            // Specific article page
            if (PATH[0] === "news") {
              if (this.state.news[PATH[1]]) {
                return (
                  <ContentArticle
                    state={{ article: this.state.news[PATH[1]] }}
                  />
                );
              }
            }

            return <FourOFour />; // 404 Page
          })()}
        </main>
      </div>
    );
  }
}

export default App;
