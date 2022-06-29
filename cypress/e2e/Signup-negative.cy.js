describe("empty spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000/auth");
    cy.get("#btn2").click()
    cy.get('#email').type('test1@gmail.com')
    cy.get('#password').type('1234567')
    cy.get('#btn1').click()
  });
});