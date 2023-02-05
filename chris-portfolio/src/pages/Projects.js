import React from "react";
import '../styles/index.css'
import Card from '../components/projects/Card'

export default function Projects () {
  // const [show, setShow] = useState({});

  // const handleClose = (id) => {
  //   setShow((prevState) => ({ ...prevState, [id]: false }));
  // };

  // const handleShow = (id) => {
  //   setShow((prevState) => ({ ...prevState, [id]: true }));
  // };

  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40 col-12">
        <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4">
            My Projects
        </h1>
        <Card />
      </div>
    </section>
  );
}
