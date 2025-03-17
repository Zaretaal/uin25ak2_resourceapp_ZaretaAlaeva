import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Resources from "./components/Resources";
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
