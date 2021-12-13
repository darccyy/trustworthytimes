import { Component } from "react";
import { Outlet, Link } from "react-router-dom";

import "../css/App.min.css";

// Disclaimer on every page
import Disclaimer from "../js/Disclaimer";

class Layout extends Component {
  render() {
    // Basic layout for all pages
    return (
      <>
        {/* Header text */}
        <header>
          <Link to="/" title="The most honest news source">
            <span className="the">the</span>
            <span className="trustworthy">Trustworthy</span>
            <span className="times">Times</span>
          </Link>
        </header>

        {/* This is where the rest of the page goes - In index.js */}
        <Outlet />

        {/* Watermark in top right */}
        <div className="watermark">
          <img
            src="/image/logo-short.png"
            alt={"Logo: Megaphone & Handshake"}
            className="watermark unloaded"
          />
        </div>

        {/* Disclaimer in bottom right */}
        <Disclaimer />
      </>
    );
  }
}

export default Layout;
