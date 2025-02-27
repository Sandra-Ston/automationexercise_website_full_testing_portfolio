/// <reference types = "cypress" />

describe("Test Case 12: Add Products in Cart", () => {
    it("should successful add products in cart", () => {
      // 1. Launch browser & 2. Navigate to URL
      cy.visit("https://automationexercise.com");
  
      // 3. Verify that home page is visible
      cy.get("body").should("be.visible");
      cy.url().should("include", "automationexercise.com");
  
      // 4. Click 'View Product' for any product on home page
        cy.get(".features_items .product-image-wrapper")
        .first()
        .trigger("mouseover")
        .within(() => {
          cy.contains("View Product").click();
        });

        // 5. Verify product detail is opened
        cy.url().should("include", "/product_details/1");

        // 6. Increase quantity to 4
        cy.get("#quantity").clear().type("4");
        
        // 7. Click 'Add to cart' button
        cy.contains("Add to cart").click();
        
        // 8. Click 'View Cart' button
        cy.contains("View Cart").should("be.visible").click();
        
        // 9. Verify that product is displayed in cart page with exact quantity
        cy.get(".cart_description").should("have.length", 1);
        cy.get(".cart_quantity button").should("have.text", "4");
    });
  });
  