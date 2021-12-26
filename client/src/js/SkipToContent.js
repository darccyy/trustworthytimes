import {Component} from "react";
import $ from "jquery";

import "../css/SkipToContent.min.css";

// Skip to content with tab
class SkipToContent extends Component {
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

export default SkipToContent;
