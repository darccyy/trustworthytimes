import { Component } from "react";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";

import "../css/Error404.min.css";

import loadImages from "../functions/loadImages";

class Error404 extends Component {
  async componentDidMount() {
    loadImages();
  }

  render() {
    return (
      <div className="Error404">
        <Helmet>
          <title>404 - Trustworthy Times</title>
        </Helmet>

        <h1>
          Error: 404 -{" "}
          {this.props.isArticle
            ? "Article not found"
            : "Whip and nae nae not found"}{" "}
          <i className="fa fa-bullhorn" />
          <i className="fa fa-handshake-o" />
        </h1>

        <p>
          Check the url to see if it is spelt{" "}
          <span style={{ opacity: 0.3 }}>(spelled)</span> correct, because we're
          not sure what you mean by '<i>{location.href}</i>'
        </p>

        <Link to="/">
          <h2>Take me back</h2>
        </Link>

        <Link to="/contact">
          <h2>Contact Page</h2>
        </Link>

        <img src="/image/logo-short.png" alt="Logo: Megaphone & Handshake" />
      </div>
    );
  }
}

export default Error404;
