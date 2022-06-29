describe("Login Negative spec", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/auth");
  });
  it("checks with wrong password", () => {
    cy.get("#email").type("test13@gmail.com");
    cy.get("#password").type("128556");
    cy.get("#btn1").click();
    cy.on("window:alert", (t) => {
      expect(t).to.contains("INVALID_PASSWORD");
    });
  });

  it("checks with wrong Email_Id", () => {
    cy.get("#email").type("test134@gmail.com");
    cy.get("#password").type("naveen2301");
    cy.get("#btn1").click();
    cy.on("window:alert", (t) => {
      expect(t).to.contains("EMAIL_NOT_FOUND");
    });
  });
});