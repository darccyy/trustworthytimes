import { Component } from "react";
import { Link } from "react-router-dom";

import "../css/Disclaimer.min.css";

class Disclaimer extends Component {
  render() {
    // Disclaimer footer on every page
    return (
      <footer className="Disclaimer">
        <details>
          {/* Button to open / close */}
          <summary>
            <span>Disclaimer</span>
          </summary>

          <div>
            <p>
              This is a parody website.
              <br />
              Do not take this as fact.
              <br />
              This website is not copyrighted.
              <br />
              If you feel that this website is using your property, or is
              harmful in any way, please contact us right away.
              <br />
              All characters and other entities appearing in this work are
              fictitious.
              <br />
              Any resemblance to real persons, dead or alive, or other real-life
              entities, past or present, is purely coincidental.
              <br />
              <Link to="/contact">Contact Page</Link>
            </p>
          </div>
        </details>
      </footer>
    );
  }
}

export default Disclaimer;
