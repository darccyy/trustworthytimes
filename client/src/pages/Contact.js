import { Component } from "react";
import Helmet from "react-helmet";

import "../components/css/Contact.min.css";

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

        <h1>Contact Page - Coming Soon...</h1>
      </div>
    );
  }
}

export default Contact;
