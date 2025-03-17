/*import React from "react";
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


ReactDOM.createRoot(document.getElementById("root")).render(<App />);*/

import React, { useState } from "react";
import Nav from "./Nav";
import ContentArea from "./Layout";
import "./styles/main.scss"; 

const resources = [
  {
    category: "HTML",
    text: "HTML står for HyperText Markup Language, og er et strukturspråk som brukes for å lage strukturer til nettside- og applikasjonsgrensesnitt.",
    sources: [
      { title: "W3Schools", url: "https://www.w3schools.com/html/" },
      { title: "HTML Living standard", url: "https://html.spec.whatwg.org/multipage/" },
      { title: "HTML.com Tutorials", url: "https://html.com/" },
    ]
  },
  {
    category: "CSS",
    text: "CSS står for Cascading StyleSheets, og brukes for å sette stilregler på HTML-elementer.",
    sources: [
      { title: "W3Schools", url: "https://www.w3schools.com/css/" },
      { title: "W3C HTML & CSS Standards", url: "https://www.w3.org/standards/webdesign/htmlcss.html" },
      { title: "W3C CSS Validator", url: "https://jigsaw.w3.org/css-validator/" },
      { title: "CSS Tricks", url: "https://css-tricks.com/" },
    ]
  },
  {
    category: "JavaScript",
    text: "JavaScript er et scriptspråk basert på EcmaScript. JavaScript kjører direkte i nettleseren, og brukes ofte til å manipulere HTML og CSS i webgrensnesnitt.",
    sources: [
      { title: "W3Schools", url: "https://www.w3schools.com/js/" },
      { title: "MDN Web Docs", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
      { title: "How to read JavaScript Documentation", url: "https://www.youtube.com/watch?v=O3iR-CIufKM" },
    ]
  },
  {
    category: "React",
    text: "React er et rammeverk bygget i JavaScript. React bruker komponenter og states for å lage en levende frontend.",
    sources: [
      { title: "React documentation", url: "https://reactjs.org/docs/getting-started.html" },
      { title: "W3Schools", url: "https://www.w3schools.com/REACT/DEFAULT.ASP" },
      { title: "How to read JavaScript Documentation", url: "https://www.youtube.com/watch?v=O3iR-CIufKM" },
    ]
  },
  {
    category: "Sanity and headless CMS",
    text: "Sanity er et headless CMS som står for innholdsadministrasjon. Innhold hentes inn i applikasjoner via GROQ-spørringer.",
    sources: [
      { title: "Sanity documentation", url: "https://www.sanity.io/docs" },
      { title: "OnCrawl: a beginners guide to headless CMS", url: "https://www.oncrawl.com/technical-seo/beginners-guide-headless-cms/" },
      { title: "Section.io: Getting started with Sanity CMS", url: "https://www.section.io/engineering-education/getting-started-with-sanity-cms/" },
    ]
  }
];

const App = () => {
  const [currentResource, setCurrentResource] = useState(resources[0]); // Default to HTML

  const handleNavClick = (category) => {
    const resource = resources.find(res => res.category === category);
    setCurrentResource(resource);
  };

  return (
    <main>
      <header>
        <Nav onNavClick={handleNavClick} />
      </header>
      <section id="content-area">
        <ContentArea resource={currentResource} />
      </section>
    </main>
  );
};

export default App;

