import "./About.css";
import { TypeAnimation } from "react-type-animation";
import imagen from "../../images/imagen.jpg";

export const About = () => {
  return (
    <div id="about" className="about-container">
      <h2>Quién soy</h2>
      <div className="about-data">
        <img src={imagen} alt="foto" className="about-image" />
        <TypeAnimation
          sequence={[
            "Trabajé como auxiliar de enfermería varios años, pero no era lo mío, necesitaba algo distinto. Un día me decidí a aprender algo nuevo, pero dudaba entre varias opciones, me decidí y empecé a curiosear el mundo de la programación aprendiendo por mi cuenta y me gustó tanto lo que estaba viendo que después hice un Bootcamp en Hack A Boss. Soy una persona tranquila pero con mucha energía, paciente,empática y curiosa, me gusta saber el por qué de las cosas. Me encantan las plantas, los animales y la música metal.",
            1000,
          ]}
          wrapper="span"
          cursor={true}
          repeat={0}
          style={{
            paddingLeft: "5px",
            display: "inline-block",
          }}
        />
      </div>
    </div>
  );
};
