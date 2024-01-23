import React from "react";
import { ProjectItem } from "./ProjectItem";
import racing from "../../images/galicia-racing.png";

describe("<ProjectItem />", () => {
  it("renders", () => {
    const projectProps = {
      project: "GALICIA RACING",
      details:
        "Este es un proyecto de la Boost Academy, donde teníamos que crear una app de Meetups y decidí hacerla sobre eventos del motor. La parte del servidor fue hecha con Node, mySQL y Express. La parte del cliente fue hecha con Vite utilizando una plantilla de React y di estilos con CSS.",
      image: racing,
      link: "https://github.com/Mermalien/Galicia-Racing",
    };
    cy.mount(<ProjectItem {...projectProps} />).get(".item-project");
  });
});
