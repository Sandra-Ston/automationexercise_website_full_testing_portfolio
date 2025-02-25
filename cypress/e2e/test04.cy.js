describe("Test Case 4: Logout User", () => {
  it("should logout the user", () => {
    // 1. Launch browser & 2. Navigate to url 'http://automationexercise.com'
    cy.visit("https://automationexercise.com");

    //3. Verify that home page is visible successfully
    cy.get("body").should("be.visible");
    cy.url().should("include", "automationexercise.com");

    //4. Click on 'Signup / Login' button
    cy.get('a[href="/login"]').contains("Signup / Login").click();

    //5. Verify 'Login to your account' is visible
    cy.get(".login-form h2")
      .should("contain", "Login to your account")
      .and("be.visible");

    //6. Enter correct email address and password
    //7. Click 'login' button
    cy.fixture("user").then((fakerUser) => {
      const { username, email, password } = fakerUser.user;

      cy.loginOrRegisterAndLoginUser(username, email, password);

      //8. Verify that 'Logged in as username' is visible
      cy.get("li a")
        .should("be.visible")
        .and("contain.text", `Logged in as ${username}`);
    });

    // 9. Click 'Logout' button
    cy.contains("Logout").click();

    // 10. Verify that user is navigated to login page
    cy.url().should("include", "/login");
    cy.get(".login-form h2")
      .should("contain", "Login to your account")
      .and("be.visible");
  });
});
