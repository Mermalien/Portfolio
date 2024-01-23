import "./Me.css";
import { TypeAnimation } from "react-type-animation";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

export const Me = () => {
  return (
    <div id="contact" className="me">
      <div className="me-div">
        <h1 className="animation">
          <TypeAnimation
            sequence={[
              "Andrea Guisande",
              2000,
              "Full Stack Web Developer",
              2000,
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            style={{
              fontSize: "1em",
              paddingLeft: "5px",
              display: "inline-block",
            }}
          />
        </h1>
        <div className="social-media">
          <a href="https://www.linkedin.com/in/andrea-guisande-nieto">
            <FaLinkedinIn className="react-icon" />
          </a>
          <a href="https://www.github.com/Mermalien">
            <FaGithub className="react-icon" />
          </a>
        </div>
      </div>
    </div>
  );
};
