import React, { Component } from "react";
import Articles from "./components/Articles.js";
import ContentArticle from "./components/ContentArticle.js";
import FourOFour from "./components/FourOFour.js";

class App extends Component {
  state = { news: {} };

  async componentDidMount() {
    fetch("/api/news")
      .then(res => res.json())
      .then(news => this.setState({ news }));
  }

  render() {
    const URL = window.location.href.split("/").slice(0, 3).join("/");

    var PATH = window.location.href;
    while (PATH.includes("//")) {
      PATH = PATH.split("//").join("/");
    }
    PATH = PATH.split("/").slice(2);

    this.state.URL = URL;

    return (
      <div>
        <header>
          <h1>
            <a href={URL}>FreshTrust News</a>
          </h1>
        </header>

        <content>
          {(() => {
            if (PATH.join("") === "") {
              return <Articles state={this.state} />;
            }

            if (PATH[0] === "news") {
              if (this.state.news[PATH[1]]) {
                return (
                  <ContentArticle
                    state={{ article: this.state.news[PATH[1]] }}
                  />
                );
              }
            }

            return <FourOFour />;
          })()}
        </content>
      </div>
    );
  }
}

export default App;
