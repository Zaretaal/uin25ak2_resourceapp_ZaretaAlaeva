import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Resources from "./Resources.jsx";
import "./styles/main.scss";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="html" element={<Resources category="HTML" />} />
          <Route path="css" element={<Resources category="CSS" />} />
          <Route path="javascript" element={<Resources category="JavaScript" />} />
          <Route path="react" element={<Resources category="React" />} />
          <Route path="sanity" element={<Resources category="Sanity and headless CMS" />} />
        </Route>
      </Routes>
    </Router>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
<Route path="/:category" element={<Resources />} />
