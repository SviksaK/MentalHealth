import Project from '../components/project/Project';
import {projects} from "../helpers/ExList"

const Projects = () => {
	return (
    <main className="section">
      <div className="container">
        <h2 className="title-1">Vingrinājumi</h2>
        <ul   className="projects">
          {projects.map((project, index) => {
            return (
              <Project
                key={index}
                title={project.title}
                img={project.img}
                index={index}
              />
            );
          })}
        </ul>
      </div>
    </main>
  );
};

export default Projects;
