import "./Skills.css";
import { SkillItem } from "./SkillItem";
import fullStack from "../../images/fullstack.jpg";
import testing from "../../images/testing.jpg";
import { useState } from "react";

const mySkills = [
  {
    name: "Buenas Prácticas, Clean Code y Testing.",
    image: testing,
  },
  {
    name: "Full Stack Web Developer",
    image: fullStack,
  },
];
export const Skills = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleSeeImage = (index) => {
    setSelectedImage(index === selectedImage ? null : index);
  };
  return (
    <div id="skills" className="skills-container">
      <h2>Formación</h2>
      <div className="skills-list">
        {mySkills.map((item, id) => {
          return (
            <ol key={id}>
              <SkillItem
                key={id}
                name={item.name}
                image={item.image}
                isSelected={id === selectedImage}
                onClick={() => handleSeeImage(id)}
              />
            </ol>
          );
        })}
      </div>
    </div>
  );
};
