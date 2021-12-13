import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import Error404 from "./pages/Error404";
import Home from "./pages/Home";
import Article from "./pages/Article";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="/news">
            <Route index element={<Error404 />} />

            <Route path="*" element={<Article />} />
          </Route>

          <Route path="contact" element={<Contact />} />

          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
