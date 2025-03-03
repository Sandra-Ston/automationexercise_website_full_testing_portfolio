/// <reference types = "cypress" />

describe("Test Case 17: Remove Products From Cart", () => {
  it("should successfully add and remove products from the cart", () => {
    // 1. Launch browser & 2. Navigate to URL
    cy.visit("https://automationexercise.com");

    // 3. Verify that home page is visible
    cy.get("body").should("be.visible");
    cy.url().should("include", "automationexercise.com");

    // 4. Add products to cart
    cy.get(".features_items .product-image-wrapper")
      .eq(0)
      .within(() => {
        cy.contains("Add to cart").click();
      });

    cy.contains("Continue Shopping").should("be.visible").click();

      //5. Click 'Cart' button
      cy.contains("Cart").click();
  
      //6. Verify that cart page is displayed
      cy.url().should("include", "/view_cart");

    // 7. Click 'X' button corresponding to particular product
    cy.get(".cart_quantity_delete").eq(0).click();

    // 8. Verify that product is removed from the cart
    cy.get(".cart_description").should("not.exist");
  });
});
