import { Component } from "react";
import $ from "jquery";

import "../scss/SkipToContent.scss";

// Skip to content with tab
export default class SkipToContent extends Component {
  render() {
    return (
      <div className="SkipToContent">
        <a href="#main" tabIndex={0}>
          Skip to Content
        </a>
      </div>
    );
  }
}
