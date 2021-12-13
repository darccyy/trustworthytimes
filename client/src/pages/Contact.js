import { Component } from "react";
import Helmet from "react-helmet";

import "../css/Contact.min.css";

// Add classes for unloaded / broken images
import loadImages from "../functions/loadImages";

class Contact extends Component {
  async componentDidMount() {
    loadImages();
  }

  render() {
    // Contact page
    return (
      <div className="Contact">
        {/* Change title */}
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

        <a href="https://pexels.com/" target="_blank">
          <h2>Images from Pexels.com</h2>

          <p>Royalty Free</p>
        </a>

        <hr />

        <img src="/image/logo-short.png" alt="Logo: Megaphone & Handshake" />
      </div>
    );
  }
}

export default Contact;
