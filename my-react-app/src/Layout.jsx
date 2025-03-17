  import React from "react";

const Layout = ({ resource }) => {
  if (!resource) return null;

  return (
    <section id={resource.category.toLowerCase()} className="category-section">
      <h2>{resource.category}</h2>
      <p>{resource.text}</p>
      <ul>
        {resource.sources.map((source, index) => (
          <li key={index}>
            <a href={source.url} target="_blank" rel="noopener noreferrer">
              {source.title}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Layout;

