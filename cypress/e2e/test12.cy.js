/// <reference types = "cypress" />

describe("Test Case 12: Add Products in Cart", () => {
  it("should successful add products in cart", () => {
    // 1. Launch browser & 2. Navigate to URL
    cy.visit("https://automationexercise.com");

    // 3. Verify that home page is visible
    cy.get("body").should("be.visible");
    cy.url().should("include", "automationexercise.com");

    // 4. Click 'Products' button
    cy.contains("Products").should("be.visible").click();

    // 5. Hover over first product and click 'Add to cart'
    cy.get(".features_items .product-image-wrapper")
      .eq(0)
      .trigger("mouseover")
      .within(() => {
        cy.contains("Add to cart").click();
      });

    // 6. Click 'Continue Shopping' button
    cy.contains("Continue Shopping").should("be.visible").click();

    // 7. Hover over second product and click 'Add to cart'
    cy.get(".features_items .product-image-wrapper")
      .eq(1)
      .trigger("mouseover")
      .within(() => {
        cy.contains("Add to cart").click();
      });

    // 8. Click 'View Cart' button
    cy.contains("View Cart").should("be.visible").click();

    // 9. Verify both products are added to Cart
    cy.get(".cart_description").should("have.length", 2);

    // 10. Verify their prices, quantity and total price
    cy.get(".cart_price").should("have.length", 2).and("be.visible");
    cy.get(".cart_quantity").should("have.length", 2).and("be.visible");
    cy.get(".cart_total").should("have.length", 2).and("be.visible");
  });
});
