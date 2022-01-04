import { Component } from "react";

import loadImages from "../functions/loadImages";

import "../scss/Watermark.scss";

// Watermark in top right
export default class Watermark extends Component {
  state = { lastReload: Date.now() - 2000 }; // Initialize rate limit

  // Reload news then reload page, or rate limit
  click(component) {
    if (Date.now() > component.state.lastReload + 10000) {
      component.state.lastReload = Date.now();
      console.log("Reloading news...");
      fetch("/api/reload?please=true").then(() => {
        location.reload();
      });
    } else {
      console.warn("Rate limit");
    }
  }

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
            this.click(this);
          }}
        />
      </div>
    );
  }
}