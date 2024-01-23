import { useState } from "react";
import "./ProjectItem.css";
import PropTypes from "prop-types";

export const ProjectItem = ({ project, details, image, link }) => {
  const [showFullDetails, setShowFullDetails] = useState(false);
  return (
    <ol>
      <li className="list-item-project">
        <div className="item-project">
          <img src={image} alt={project} className="project-image" />
          <h3>{project}</h3>
          <p className="item-project-description">
            {details &&
              (showFullDetails ? details : `${details.substring(0, 60)}...`)}
          </p>
          {!showFullDetails ? (
            <button
              onClick={() => setShowFullDetails(true)}
              className="show-description"
            >
              Ver más
            </button>
          ) : (
            <button
              onClick={() => setShowFullDetails(false)}
              className="show-description"
            >
              Ver menos
            </button>
          )}
          <p className="link-project">{link}</p>
        </div>
      </li>
    </ol>
  );
};
ProjectItem.propTypes = {
  project: PropTypes.string,
  details: PropTypes.string,
  image: PropTypes.string,
  link: PropTypes.element,
};
