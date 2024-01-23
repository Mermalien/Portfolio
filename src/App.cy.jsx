import React from "react";
import App from "./App";
import { Skills } from "./components/Skills/Skills";
import { ProjectsList } from "./components/Proyects/ProjectsList";

describe("<App />", () => {
  it("skills section", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<App />);
    cy.get(".menu").click();
    cy.get("svg.hamburguer.open").should("have.class", "open");
    cy.get(".a-skills").click();
    cy.get(<Skills />);
  });
  it("projects section", () => {
    cy.mount(<App />);
    cy.get(".menu").click();
    cy.get("svg.hamburguer.open").should("have.class", "open");
    cy.get(".a-projects").click();
    cy.get(<ProjectsList />);
  });
});
