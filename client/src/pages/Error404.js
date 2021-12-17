import { Component } from "react";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";

// Add classes for unloaded / broken images
import loadImages from "../functions/loadImages";

class Error404 extends Component {
  async componentDidMount() {
    loadImages();
  }

  render() {
    // 404 page
    return (
      <div className="Error404">
        {/* Change title */}
        <Helmet>
          <title>404 - Trustworthy Times</title>
        </Helmet>

        {/* Header - Different for /news/* */}
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

        {/* Links */}
        <Link to="/">
          <h2>Take me back</h2>
        </Link>

        <Link to="/contact">
          <h2>Contact Page</h2>
        </Link>

        {/* Image underneath */}
        <img src="/image/logo-short.png" alt="Logo: Megaphone & Handshake" />
      </div>
    );
  }
}

export default Error404;
