import React from "react";
import "./OurWork.css";
import projects from "./WorkProjects.js";

const OurWork = () => {
  return (
    <section className="our-work fade-up">
      <div className="container">
        <h2>Our Work</h2>
        <p className="services_description subtitle">
          Take a look at some of our recent projects and see how we've helped
          businesses achieve their digital goals.
        </p>
        <div className="project-grid">
          {/* Map over the projects array to create individual project cards */}
          {projects.map((project, idx) => (
            /* Each project card displays the image, type, title, description, and tags */
            <div className="project-card" key={idx}>
              <img
                src={project.image}
                alt={project.title}
                className="project-img"
              />
              <p className="project-type">{project.type}</p>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <div className="tags">
                {/* Map over the tags for each project */}
                {project.tags.map((tag, index) => (
                  <span className="tag" key={index}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurWork;
