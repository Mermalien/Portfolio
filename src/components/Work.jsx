// eslint-disable-next-line no-unused-vars
import React from "react"
import WorkItem from "./WorkItem";

const myData=[
    {
        cargo: "Auxiliar de enfermería/Gerocultora",
        detalles: "En diciembre de 2014 obtuve mi título y empecé a trabajar tanto en atención domiciliaria como en residencias y centros de día, con personas mayores, niños e incluso personas con movilidad reducida.",
    },
    {
        cargo: "Otros",
        detalles: "Trabajé como camarera, comercial de telefonía, en un lavado de vehículos..."
    },
    {
        cargo: "Voluntariado",
        detalles: "Fui voluntaria en un centro de día para personas con Parálisis Cerebral, Distrofia Muscular, TEA entre otras."
    },
];

const Work = () => {
    return(
        <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
            <h1 className="text-4xl font-bold text-center text-[#001b5e]">Work</h1>
            {myData.map((item, idx)=>(
                <WorkItem key={idx} cargo={item.cargo} detalles={item.detalles}/>
            ))}
        </div>
    )
}

export default Work;