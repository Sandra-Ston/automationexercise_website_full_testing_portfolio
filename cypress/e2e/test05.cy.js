describe("Test Case 5: Register User with existing email", () => {
  it("should display error message for existing email", () => {
    // 1. Launch browser & 2. Navigate to url 'http://automationexercise.com'
    cy.visit("https://automationexercise.com");

    //3. Verify that home page is visible successfully
    cy.get("body").should("be.visible");
    cy.url().should("include", "automationexercise.com");

    //4. Click on 'Signup / Login' button
    cy.get('a[href="/login"]').contains("Signup / Login").click();

    // 5. Verify 'New User Signup!' is visible
    cy.get(".signup-form h2")
      .should("contain", "New User Signup!")
      .and("be.visible");

    // 6. Enter name and already registered email address
    cy.fixture("user").then((fakerUser) => {
      const { username, email} = fakerUser.user;

      cy.get('input[data-qa="signup-name"]').type(username);
      cy.get('input[data-qa="signup-email"]').type(email);

      // 7. Click 'Signup' button
      cy.get('button[data-qa="signup-button"]').click();

    // 8. Verify error 'Email Address already exist!' is visible
    cy.get('.signup-form p').should('contain', 'Email Address already exist!');
   });
  });
});