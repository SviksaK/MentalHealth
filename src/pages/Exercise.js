import {useParams} from "react-router-dom";
import {projects} from "../helpers/ExList"
import 'bootstrap/dist/css/bootstrap.css'; 
import {Container} from "react-bootstrap";
const Project = () => {
	const {id} = useParams();
	const project = projects[id];

    return (
		<main className="section">
			<div className="container">
				<Container className="project-details">
					<h1>{project.title}</h1>
					<div className="ratio ratio-16x9">
						<iframe src={project.src} allowfullscreen></iframe>
					</div>
				</Container>
			</div>
		</main>
	);
}

export default Project;