describe("signup test", () => {
  beforeEach(() => {
    cy.viewport(412, 914);
    cy.visit("http://localhost:3000/signup");
    cy.contains("Sign up");
  });

  it("empty form", () => {
    cy.get("ion-button").click();
    cy.contains("Alert");
  });

  it("redirect to signin", () => {
    cy.contains("already have an account?").click();
    cy.url().should("include", "/signin");
  });

  it("filled form", () => {
    const randomString = Math.random().toString(16).slice(2);
    cy.get("ion-input[placeholder='User Name']").type(
      `fakeName${randomString}`
    );
    cy.get("ion-input[placeholder='Password']").type("fakePassword");
    cy.get("ion-input[placeholder='Email']").type(
      `fakeMail${randomString}@gmail.com`
    );
    cy.get("ion-button").click();
    cy.wait(15000).then(() => {
      cy.url().should("include", "/slider");
    });
  });
});
