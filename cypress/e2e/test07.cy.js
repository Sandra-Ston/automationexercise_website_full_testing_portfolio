describe("Test Case 7: Verify Test Cases Page", () => {
  it("should navigate to test cases page", () => {
    // 1. Launch browser & 2. Navigate to url 'http://automationexercise.com'
    cy.visit("https://automationexercise.com");

    //3. Verify that home page is visible successfully
    cy.get("body").should("be.visible");
    cy.url().should("include", "automationexercise.com");

    //4. Click on 'Test Cases' button
    cy.get("#slider .carousel-inner .item.active")
    .find(".test_cases_list > .btn-success")
    .should("be.visible")
    .click();
    
    // 5. Verify navigation to test cases page
    cy.url().should("include", "/test_cases");
  });
});