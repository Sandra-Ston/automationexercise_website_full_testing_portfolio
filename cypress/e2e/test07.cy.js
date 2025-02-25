describe("Test Case 7: Verify Test Cases Page", () => {
    it("should logout the user", () => {
      // 1. Launch browser & 2. Navigate to url 'http://automationexercise.com'
      cy.visit("https://automationexercise.com");
  
      //3. Verify that home page is visible successfully
      cy.get("body").should("be.visible");
      cy.url().should("include", "automationexercise.com");
  
      //4. Click on 'Test Cases' button
      cy.contains('Test Cases').click();

    });
  });