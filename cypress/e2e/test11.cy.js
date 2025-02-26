/// <reference types = "cypress" />

describe("Test Case 11: Verify Subscription in Cart page", () => {
    it("should successful submit subscription in Cart page", () => {
      // 1. Launch browser & 2. Navigate to URL
      cy.visit("https://automationexercise.com");
  
      // 3. Verify that home page is visible
      cy.get("body").should("be.visible");
      cy.url().should("include", "automationexercise.com");

      // 4. Click 'Cart' button
      cy.contains("Cart").should("be.visible").click();
  
      // 5. Scroll down to footer
      cy.scrollTo("bottom");
  
      // 6. Verify text 'SUBSCRIPTION'
      cy.get('footer h2').should('have.text', 'Subscription');
  
      // 7. Enter email address in input and click arrow button
      cy.get('footer input[type="email"]').type('hungryLike@wolf.com');
      cy.get('button[type="submit"]').click();
  
      // 8. Verify success message 'You have been successfully subscribed!' is visible
      cy.contains("You have been successfully subscribed!").should("be.visible");
    });
  });