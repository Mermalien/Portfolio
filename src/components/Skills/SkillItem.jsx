import "./Skills.css";
import PropTypes from "prop-types";

export const SkillItem = ({ name, image, isSelected, onClick }) => {
  return (
    <li className="skill-item">
      <h3>{name}</h3>
      <img
        src={image}
        alt={name}
        className={`skill-image ${isSelected ? "selected" : ""}`}
        onClick={onClick}
      />
    </li>
  );
};

SkillItem.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  isSelected: PropTypes.bool,
  onClick: PropTypes.func,
};
