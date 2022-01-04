import { Component } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";

import "../scss/Disclaimer.scss";

// Disclaimer footer on every page
export default class Disclaimer extends Component {
  render() {
    return (
      <footer className="Disclaimer">
        <details>
          {/* Button to open / close */}
          <summary id="disclaimer-summary">
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
              <Link
                to="/contact"
                onClick={() => $("#disclaimer-summary").click()}
                reloadDocument
              >
                Contact Page
              </Link>
            </p>
          </div>
        </details>
      </footer>
    );
  }
}
