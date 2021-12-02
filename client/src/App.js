import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = { news: [] };

  async componentDidMount() {
    fetch("/api/news")
      .then(res => res.json())
      .then(news => this.setState({ news }));
  }

  render() {
    return (
      <div>
        This is the news!
        <ul>
          {this.state.news.map(article => {
            return <li key={article.headline}>{article.headline}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default App;
