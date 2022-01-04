import { Component } from "react";
import { Outlet, Link } from "react-router-dom";

import "../scss/Layout.scss";

// Components on every page
import Header from "../js/Header";
import Watermark from "../js/Watermark";
import Disclaimer from "../js/Disclaimer";

export default class Layout extends Component {
  render() {
    // Basic layout for all pages
    return (
      <>
        {/* Header in top */}
        <Header />

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