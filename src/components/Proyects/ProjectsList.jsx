import "./Projects.css";
import { ProjectItem } from "./ProjectItem";
import first from "../../images/first-project.png";
import second from "../../images/second-project.png";
import petties from "../../images/petties-app.png";
import alendia from "../../images/alendia.png";
import racing from "../../images/galicia-racing.png";
import calculator from "../../images/calculator.png";
import notAvailable from "../../images/not-available.jpg";

const myProjects = [
  {
    project: "Adivina el color aleatorio",
    details:
      "El primer proyecto del Bootcamp fue un juego de adivinar un color aleatorio que se muestra en un display. Creado con Html, CSS y JavaScript.",
    image: first,
    link: (
      <a
        href="https://github.com/Mermalien/First-Proyect"
        target="_blank"
        rel="noreferrer"
      >
        Ver repositorio
      </a>
    ),
  },
  {
    project: "Compartir enlaces (backend)",
    details:
      "Este es el segundo proyecto del Bootcamp. Tuvimos que realizar un backend para una aplicación de compartir enlaces. Creado con NodeJS y el servidor de Express, además de haber utilizado módulos como fs o bcrypt entre otros.",
    image: second,
    link: (
      <a
        href="https://github.com/Mermalien/Proyect2"
        target="_blank"
        rel="noreferrer"
      >
        Ver repositorio
      </a>
    ),
  },
  {
    project: "Pettie's App",
    details:
      "Este es el último proyecto del Bootcamp, el más importante, donde había que darle vida al backend del anterior proyecto. Creamos el frontend de nuestra Pettie's App con React.",
    image: petties,
    link: (
      <a
        href="https://github.com/Mermalien/Proyect-3"
        target="_blank"
        rel="noreferrer"
      >
        Ver repositorio
      </a>
    ),
  },
  {
    project: "Calculadora",
    details:
      "Proyecto realizado con mi compañero Marcos. Una calculadora básica creada con Html, CSS y JavaScript.",
    image: calculator,
    link: (
      <a
        href="https://calculator-five-liart-44.vercel.app/"
        target="_blank"
        rel="noreferrer"
      >
        Ir
      </a>
    ),
  },
  {
    project: "Red ALENDIA",
    details:
      "Pequeña landing para captar nuevos socios que quieran formar parte de los franquiciados ALENDIA. Creado con Html, CSS y JavaScript.",
    image: alendia,
    link: (
      <a href="https://red.alendia.es/" target="_blank" rel="noreferrer">
        Visita la web
      </a>
    ),
  },
  {
    project: "Galicia Racing",
    details:
      "Este es un proyecto de la Boost Academy, donde teníamos que crear una app de Meetups y decidí hacerla sobre eventos del motor. La parte del servidor fue hecha con Node, mySQL y Express. La parte del cliente fue hecha con Vite utilizando una plantilla de React y di estilos con CSS.",
    image: racing,
    link: (
      <a
        href="https://github.com/Mermalien/Galicia-Racing"
        target="_blank"
        rel="noreferrer"
      >
        Ver repositorio
      </a>
    ),
  },
  {
    project: "Toxos e Fentos",
    details:
      "Esta es una app que estoy haciendo en mi tiempo libre, una red social de temática Plantas. Todavía le falta mucho trabajo pero está en proceso.",
    image: notAvailable,
    link: <p>Pronto estará disponible</p>,
  },
];

export const ProjectsList = () => {
  return (
    <div id="projects" className="projects-container">
      <h2>Proyectos</h2>
      <div className="projects-list">
        {myProjects.map((item, id) => (
          <ol key={id}>
            <ProjectItem
              key={id}
              project={item.project}
              details={item.details}
              image={item.image}
              link={item.link}
            />
          </ol>
        ))}
      </div>
    </div>
  );
};
