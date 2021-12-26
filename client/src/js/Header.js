import {Component} from "react";
import {Link} from "react-router-dom";

import "../scss/Header.scss";

// Skip to content button
import SkipToContent from "../js/SkipToContent";

// Header on top of every page
class Header extends Component {
  render() {
    return (
      <header className="Header" role="banner">
        {/* Skip to main content */}
        <SkipToContent />

        {/* Fancy header text */}
        <Link to="/" title="The most honest news source" reloadDocument>
          <span className="the">the</span>
          <span className="trustworthy">Trustworthy</span>
          <span className="times">Times</span>
        </Link>
      </header>
    );
  }
}

export default Header;