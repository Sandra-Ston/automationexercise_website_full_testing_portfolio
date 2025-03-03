describe("Test Case 20: Search Products and Verify Cart After Login", () => {
    const username = "AliceTest";
    const email = "alice.test@example.com";
    const password = "Test@123";
  
    it("should search for a product, add it to cart, login, and verify cart persistence", () => {
      // 1 & 2. Launch browser & Navigate to URL
      cy.visit("https://automationexercise.com/");
  
      // 3. Click on 'Products' button
      cy.contains("Products").click();
  
      // 4. Verify user is navigated to ALL PRODUCTS page
      cy.url().should("include", "/products");
      cy.contains("All Products").should("be.visible");
  
      // 5. Enter product name in search input and click search button
      cy.get("input#search_product").type("Dress");
      cy.get("button#submit_search").click();
  
      // 6. Verify 'SEARCHED PRODUCTS' is visible
      cy.contains("Searched Products").should("be.visible");
  
      // 7. Verify all the products related to search are visible
      cy.get(".productinfo.text-center").should("have.length.greaterThan", 0);
  
      // 8. Add those products to cart
      cy.get(".productinfo.text-center").each(($el) => {
        cy.wrap($el).contains("Add to cart").click();
        cy.contains("Continue Shopping").click();
      });
  
      // 9. Click 'Cart' button and verify that products are visible in cart
      cy.contains("Cart").click();
      cy.url().should("include", "/view_cart");
      cy.get(".cart_description").should("have.length.greaterThan", 0);
  
      // 10. Click 'Signup / Login' button and submit login details
      cy.contains("Signup / Login").click();
      cy.loginOrRegisterAndLoginUser(username, email, password);
  
      // 11. Again, go to Cart page
      cy.contains("Cart").click();
      cy.url().should("include", "/view_cart");
  
      // 12. Verify that those products are visible in cart after login as well
      cy.get(".cart_description").should("have.length.greaterThan", 0);
    });
  });