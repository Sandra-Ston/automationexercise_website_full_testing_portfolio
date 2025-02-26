describe("Test Case 9: Search Product", () => {
    it("should search for a product and verify search results", () => {
      // 1. Launch browser & 2. Navigate to URL
      cy.visit("https://automationexercise.com");
  
      // 3. Verify that home page is visible
      cy.get("body").should("be.visible");
      cy.url().should("include", "automationexercise.com");
  
      // 4. Click on 'Products' button
      cy.contains("Products").should("be.visible").click();
  
      // 5. Verify user is navigated to ALL PRODUCTS page
      cy.url().should("include", "/products");
      cy.contains("All Products").should("be.visible");
  
      // 6. Enter product name in search input and click search button
      const productName = "Dress";
      cy.get("#search_product").type(productName);
      cy.get("#submit_search").click();
  
      // 7. Verify 'SEARCHED PRODUCTS' is visible
      cy.contains("Searched Products").should("be.visible");
  
      // 8. Verify all the products related to search are visible
      cy.get(".features_items .product-image-wrapper")
        .should("be.visible")
        .and("contain.text", productName);
    });
  });