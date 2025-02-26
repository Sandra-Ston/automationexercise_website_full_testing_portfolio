/// <reference types = "cypress" />

describe("Test Case 6: Contact Us Form", () => {
  it("should submit the contact us form and verify success message", () => {
    // 1-3. Launch browser, navigate to url 'http://automationexercise.com', verify that home page is visible successfully:
    cy.visit("https://automationexercise.com");
    cy.get("body").should("be.visible");
    cy.url().should("include", "automationexercise.com");

    //4. Click on 'Contact Us' button
    cy.get('a[href="/contact_us"]').contains("Contact us").click();

    // 5. Verify 'GET IN TOUCH' is visible
    cy.get(".contact-form h2")
      .should("contain", "Get In Touch")
      .and("be.visible");

    // 6. Enter name, email, subject and message
    cy.get('input[data-qa="name"]').type("Hungry Wolf");
    cy.get('input[data-qa="email"]').type("hungryLike@wolf.com");
    cy.get('input[data-qa="subject"]').type("Test Subject");
    cy.get('textarea[data-qa="message"]').type(
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness."
    );

    //7. Upload file
    cy.get('input[type="file"]').attachFile("wolf.jpg");

    // 8. Click 'Signup' button
    cy.get('input[data-qa="submit-button"]').click();

    // 9. Click OK button
    cy.on("window:alert", (text) => {
      expect(text).to.equal("Press OK to proceed!");
    });

    // 10. Verify success message 'Success! Your details have been submitted successfully.' is visible
    cy.contains(
      "Success! Your details have been submitted successfully."
    ).should("be.visible");

    //11. Click 'Home' button and verify that landed to home page successfully
    cy.contains("Home").click();
    cy.url().should("eq", "https://automationexercise.com/");
  });
});
