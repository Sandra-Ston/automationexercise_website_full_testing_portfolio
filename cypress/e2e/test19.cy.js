/// <reference types = "cypress" />

describe("Test Case 9: Search Product", () => {
  it("should search for a brand and verify search results", () => {
    // 1. Launch browser & 2. Navigate to URL
    cy.visit("https://automationexercise.com");

    // 3. Click on 'Products' button
    cy.contains("Products").should("be.visible").click();

    // 4. Verify that Brands are visible on left side bar
    cy.get("div.left-sidebar")
      .should("be.visible")
      .and("contain.text", "Brands");

    // 5. Click on any brand name
    cy.get('a[href="/brand_products/Polo"]').contains("Polo").click();

    // 6. Verify that user is navigated to brand page and brand products are displayed
    cy.url().should("include", "/brand_products/Polo");
    cy.get("h2.title.text-center")
      .should("be.visible")
      .and("contain.text", "Brand - Polo Products");

    // 7. On left side bar, click on any other brand link
    cy.get('a[href="/brand_products/Madame"]').contains("Madame").click();
    
    // 8. Verify that user is navigated to that brand page and can see products
    cy.url().should("include", "/brand_products/Madame");
    cy.get("h2.title.text-center")
      .should("be.visible")
      .and("contain.text", "Brand - Madame Products");
  });
});
