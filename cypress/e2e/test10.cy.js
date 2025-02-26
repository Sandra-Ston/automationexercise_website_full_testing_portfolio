describe("Test Case 10: Verify Subscription in Home Page", () => {
    it("should successful submit subscription in home page", () => {
      // 1. Launch browser & 2. Navigate to URL
      cy.visit("https://automationexercise.com");
  
      // 3. Verify that home page is visible
      cy.get("body").should("be.visible");
      cy.url().should("include", "automationexercise.com");
  
      // 4. Scroll down to footer
      cy.scrollTo("bottom");
  
      // 5. Verify text 'SUBSCRIPTION'
      cy.get('footer h2').should('have.text', 'Subscription');
  
      // 6. Enter email address in input and click arrow button
      cy.get('footer input[type="email"]').type('hungryLike@wolf.com');
      cy.get('button[type="submit"]').click();
  
      // 7. Verify success message 'You have been successfully subscribed!' is visible
      cy.contains("You have been successfully subscribed!").should("be.visible");
    });
  });