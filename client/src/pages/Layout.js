import { Outlet, Link } from "react-router-dom";

import "../components/css/App.min.css";

function Layout() {
  return (
    <>
      <header>
        <Link to="/">
          <h1 title="The most honest news source">
            <img
              src="/image/title.png"
              alt="Trustworthy Times"
              className="unloaded"
            />
          </h1>
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
          not copyrighted. If you feel that this website is using your property,
          or is harmful in any way, please contact us right away{" "}
          <a href="https://github.com/darccyy/trustworthytimes/issues/new">
            HERE
          </a>{" "}
          All characters and other entities appearing in this work are
          fictitious. Any resemblance to real persons, dead or alive, or other
          real-life entities, past or present, is purely coincidental.
        </details>
      </footer>
    </>
  );
}

export default Layout;
