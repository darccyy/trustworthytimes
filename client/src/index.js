import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Article from "./pages/Article";
import Contact from "./pages/Contact";
import Error404 from "./pages/Error404";

export default function App(props) {
  // Router
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Layout />}>
          {/* Home page */}
          <Route index element={<Home />} />

          {/* Article page */}
          <Route path="/news">
            {/* No article specified */}
            <Route index element={<Error404 />} />

            <Route path="*" element={<Article article={props.article} />} />
          </Route>

          {/* Contact page */}
          <Route path="contact" element={<Contact />} />

          {/* 404 page */}
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

console.log(window.location.pathname.split("/")[2]);
fetch(`/api/article?id=${window.location.pathname.split("/")[2] || ""}`)
  .then(res => res.json())
  .then(article => {
    ReactDOM.render(<App article={article} />, document.getElementById("root"));
  });
