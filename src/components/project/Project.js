import { NavLink } from 'react-router-dom';
import './style.css';
import { motion } from "framer-motion";

const Project = ({ title, img, index }) => {
	return (
    <NavLink to={`/project/${index}`}>
      <motion.li
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="project"
      >
        <img src={img} alt={title} className="project__img" />
        <h3 className="project__title">{title}</h3>
      </motion.li>
    </NavLink>
  );
};

export default Project;
