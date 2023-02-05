import React from "react";
import '../styles/index.css'
import CardProjects from '../components/projects/CardProjects.js'

export default function Projects () {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40 col-12">
        <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4">
            My Projects
        </h1>
        <CardProjects />
      </div>
    </section>
  );
}
