import { Component } from "react";
import { Outlet, Link } from "react-router-dom";

import "../css/App.min.css";

import Disclaimer from "../js/Disclaimer";

class Layout extends Component {
  render() {
    return (
      <>
        <header>
          <Link to="/" title="The most honest news source">
            <span className="the">the</span>
            <span className="trustworthy">Trustworthy</span>
            <span className="times">Times</span>
          </Link>
        </header>

        <Outlet />

        <div className="watermark">
          <img
            src="/image/logo-short.png"
            alt={"Logo: Megaphone & Handshake"}
            className="watermark unloaded"
          />
        </div>

        <Disclaimer />
      </>
    );
  }
}

export default Layout;
