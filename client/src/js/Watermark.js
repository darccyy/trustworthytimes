import { Component } from "react";

import loadImages from "../functions/loadImages";

import "../css/Watermark.min.css";

// Watermark in top right
class Watermark extends Component {
  state = { lastReload: Date.now() - 2000 }; // Initialize rate limit

  componentDidMount() {
    loadImages();
  }

  render() {
    return (
      <div className="Watermark">
        <img
          src="/image/logo-short.png"
          alt="Logo: Megaphone & Handshake"
          title="Bruh Moment"
          className="watermark unloaded"
          onClick={() => {
            // Reload news then reload page, or rate limit
            if (Date.now() > this.state.lastReload + 10000) {
              this.state.lastReload = Date.now();
              console.log("Reloading news...");
              fetch("/api/reload?please=true").then(() => {
                location.reload();
              });
            } else {
              console.warn("Rate limit");
            }
          }}
        />
      </div>
    );
  }
}

export default Watermark;
