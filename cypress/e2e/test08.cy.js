describe("Test Case 8: Verify All Products and Product Detail Page", () => {
    it("should navigate to all products page and verify product details", () => {
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
  
      // 6. Verify the products list is visible
      cy.get(".features_items").should("be.visible"); 
  
      // 7. Click on 'View Product' of the first product
      cy.get(".features_items .product-image-wrapper")
        .first()
        .find("a[href*='/product_details/']")
        .click();
  
      // 8. Verify user is on product detail page
      cy.url().should("include", "/product_details/");
  
      // 9. Verify product details: name, category, price, availability, condition, brand
      cy.get(".product-information").within(() => {
        cy.get("h2").should("be.visible");
        cy.contains("Category:").should("be.visible");
        cy.contains("Rs.").should("be.visible");
        cy.contains("Availability:").should("be.visible");
        cy.contains("Condition:").should("be.visible");
        cy.contains("Brand:").should("be.visible");
      });
    });
  });