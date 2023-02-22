describe("signin test", () => {
  beforeEach(() => {
    cy.viewport(412, 914);
    cy.visit("http://localhost:3000");
    cy.contains("Sign in");
  });

  it("empty form", () => {
    cy.get("ion-button").click();
    cy.contains("Alert");
  });

  it("redirect to signup", () => {
    cy.contains("don't have an account?").click();
    cy.url().should("include", "/signup");
  });

  it("filled form", () => {
    cy.get("ion-input[placeholder='Email']").type(`zmohseni95@gmail.com`);
    cy.get("ion-input[placeholder='Password']").type("13741374");
    cy.get("ion-button").click();
    cy.wait(15000).then(() => {
      cy.url().should("include", "/slider");
    });
  });
});
