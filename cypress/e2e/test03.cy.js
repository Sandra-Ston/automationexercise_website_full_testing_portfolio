/// <reference types = "cypress" />

describe("Test Case 3: Login User with incorrect email and password", () => {
  it("should display error message for incorrect login", () => {
    // 1. Launch browser & 2. Navigate to url 'http://automationexercise.com'
    cy.visit("https://automationexercise.com");

    // 3. Verify that home page is visible successfully
    cy.get("body").should("be.visible");
    cy.url().should("include", "automationexercise.com");

    // 4. Click on 'Signup / Login' button
    cy.get('a[href="/login"]').contains("Signup / Login").click();

    //5. Verify 'Login to your account' is visible
    cy.get(".login-form h2")
      .should("contain", "Login to your account")
      .and("be.visible");

    // 6. Enter incorrect email address and password
    cy.get('input[data-qa="login-email"]').type("incorrect_email@example.com");
    cy.get('input[data-qa="login-password"]').type("incorrect_password");

    // 7. Click 'login' button
    cy.get('button[data-qa="login-button"]').click();

    // 8. Verify error 'Your email or password is incorrect!' is visible
    cy.get(".login-form p").should(
      "contain",
      "Your email or password is incorrect!"
    );
  });
});
