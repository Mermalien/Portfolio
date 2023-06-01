// eslint-disable-next-line no-unused-vars
import React from "react";
import ProjectItem from "./ProjectItem";

const myProjects =[
    {
        project: "Project 1",
        details: "El primer proyecto del Bootcamp fue un juego de adivinar un color aleatorio que se muestra en un display. Creado con #HTML, #CSS y #JAVASCRIPT.",
        link: <a href="https://github.com/Mermalien/First-Proyect">https://github.com/Mermalien/First-Proyect</a>
    },
    {
        project: "Project 2",
        details: "Este es el segundo proyecto del Bootcamp. Tuvimos que realizar un backend para una aplicación de compartir enlaces. Creado con #NodeJS y el servidor de #Express, además de haber utilizado módulos como #fs o #bcrypt entre otros.",
        link: <a href="https://github.com/Mermalien/Proyect2">https://github.com/Mermalien/Proyect2</a>
    },
    {
        project: "Project 3",
        details: "Este es el último proyecto del Bootcamp, el más importante, donde había que darle vida al backend del anterior proyecto. Creamos el frontend de nuestra Pettie's App con #REACT.",
        link: <a href="https://github.com/Mermalien/Proyect-3">https://github.com/Mermalien/Proyect-3</a>
    },
    {
        project: "Project 4",
        details: "Proyecto realizado con mi compañero Marcos. Una calculadora básica creada con #HTML, #CSS y #JAVASCRIPT.",
        link: <a href="https://github.com/Mermalien/calculator">https://github.com/Mermalien/calculator</a>
    },
]
const Projects = () => {
    return(
        <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
            <h1 className="text-4xl font-bold text-center text-[#001b5e]">Projects</h1>
                {myProjects.map((item, idx)=>(
                    <ProjectItem key={idx} project={item.project} details={item.details} link={item.link}/>
                ))}
        </div>
    )
}
export default Projects