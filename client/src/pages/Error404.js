import { Component } from "react";
import Helmet from "react-helmet";

import "../css/App.min.css";

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
          Error: 404 - Whip and nae nae not found
          <i className="fa fa-bullhorn" />
          <i className="fa fa-handshake-o" />
        </h1>
      </div>
    );
  }
}

export default Error404;
