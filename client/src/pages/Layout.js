import { Component } from "react";
import { Outlet, Link } from "react-router-dom";

import "../components/css/App.min.css";

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

        <footer>
          <details>
            <summary>DISCLAIMER</summary>
            This is a parody website. Do not take this as fact. This website is
            not copyrighted. If you feel that this website is using your
            property, or is harmful in any way, please contact us right away{" "}
            <a href="https://github.com/darccyy/trustworthytimes/issues/new">
              HERE
            </a>{" "}
            All characters and other entities appearing in this work are
            fictitious. Any resemblance to real persons, dead or alive, or other
            real-life entities, past or present, is purely coincidental.
            <Link to="/contact">Contact</Link>
          </details>
        </footer>
      </>
    );
  }
}

export default Layout;
