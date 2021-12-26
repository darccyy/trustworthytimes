import { Component } from "react";
import { Outlet, Link } from "react-router-dom";

import "../css/Layout.min.css";

// Skip to content button
import SkipToContent from "../js/SkipToContent";
// Watermark on every page
import Watermark from "../js/Watermark";
// Disclaimer on every page
import Disclaimer from "../js/Disclaimer";

class Layout extends Component {
  render() {
    // Basic layout for all pages
    return (
      <>
        <header>
          {/* Skip to main content */}
          <SkipToContent />

          {/* Fancy header text */}
          <Link to="/" title="The most honest news source" reloadDocument>
            <span className="the">the</span>
            <span className="trustworthy">Trustworthy</span>
            <span className="times">Times</span>
          </Link>
        </header>

        {/* This is where the rest of the page goes - In index.js */}
        <Outlet />

        {/* Watermark in top right */}
        <Watermark />

        {/* Disclaimer in bottom right */}
        <Disclaimer />
      </>
    );
  }
}

export default Layout;
