import { Component } from "react";
import Helmet from "react-helmet";

import "../css/Contact.min.css";

import loadImages from "../functions/loadImages";

class Contact extends Component {
  async componentDidMount() {
    loadImages();
  }

  render() {
    return (
      <div className="Contact">
        <Helmet>
          <title>Contact - Trustworthy Times</title>
        </Helmet>

        <h1>Contact Page</h1>

        <hr />

        <a href="https://github.com/darccyy/trustworthytimes">
          <h2>GitHub Repo</h2>

          <p>Most information is here</p>
        </a>

        <hr />

        <a
          href="https://github.com/darccyy/trustworthytimes/issues/new/choose"
          target="_blank"
        >
          <h2>Report an Issue</h2>

          <p>For bugs, copyright, or legal issues</p>
        </a>

        <hr />

        <img src="./image/logo-short.png" alt="Logo: Megaphone & Handshake" />
      </div>
    );
  }
}

export default Contact;
