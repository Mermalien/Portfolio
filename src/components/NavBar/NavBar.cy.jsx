import { NavBar } from "./NavBar";

describe("<NavBar />", () => {
  it("Haces click en el menú y se ABRE", () => {
    cy.mount(<NavBar />);
    cy.get(".menu").click();
    cy.get(".open").should("have.class", "open");
  });

  it("Haces click en el menú y se CIERRA", () => {
    cy.mount(<NavBar />);
    cy.get(".menu").click();
    cy.get(".menu").should("not.have.class", "open");
  });
});
