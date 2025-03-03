describe("Test Case 18: View Category Products", () => {
  it("should filter and show category products", () => {
    // 1. Launch browser & 2. Navigate to URL
    cy.visit("https://automationexercise.com");

    // 3. Verify that categories are visible on left side bar
    cy.get("div.left-sidebar")
      .should("be.visible")
      .and("contain.text", "Category");

    // 4. Click on 'Women' category
    cy.get('a[href="#Women"]').contains("Women").click();

    // 5. Click on any category link under 'Women' category, for example: Dress
    cy.get('a[href="/category_products/1"]').contains("Dress").click();

    // 6. Verify that category page is displayed and confirm text 'WOMEN - TOPS PRODUCTS'
    cy.get("h2.title.text-center")
      .should("be.visible")
      .and("contain.text", "Women - Dress Products");

    // 7. On left side bar, click on any sub-category link of 'Men' category
    cy.get('a[href="#Men"]').contains("Men").click();
    
    // 8. Verify that user is navigated to that category page
    cy.get('a[href="/category_products/3"]').contains("Tshirts ").click();
    cy.get("h2.title.text-center")
      .should("be.visible")
      .and("contain.text", "Men - Tshirts Products");
  });
});
