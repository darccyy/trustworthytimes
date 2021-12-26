import { Component } from "react";

import "../css/SkipToContent.min.css";

// Skip to content with tab
class SkipToContent extends Component {
  render() {
    return (
      <div className="SkipToContent">
        <a href={"#" + (this.props.id || "main")} tabIndex={0}>
          Skip to Content
        </a>
      </div>
    );
  }
}

export default SkipToContent;
