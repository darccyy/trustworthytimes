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
    var PATH = window.location.pathname.split("/").slice(1);

    return (
      <div id="App">
        <header>
          <h1>
            <a href={window.location.origin}>
              <img src="/image/title.png" alt="Trustworthy Times" />
            </a>
          </h1>
        </header>

        <main>
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
        </main>
      </div>
    );
  }
}

export default App;
