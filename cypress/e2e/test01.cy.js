/// <reference types = "cypress" />

describe("User Registration", () => {
  it('should register a new user', () => {
    // 1. - 2.
    cy.visit('https://automationexercise.com/');
    // 3. Verify home page loads
    cy.get("a[href='/login']").should("be.visible");
    // 4. Click on Signup / Login
    cy.contains("Signup / Login").click();
    // 5. Verify 'New User Signup!' is visible
    cy.contains("New User Signup!").should("be.visible");
    // 6. Enter Name and Email
    cy.get("input[data-qa='signup-name']").type("TestUser");
    cy.get("input[data-qa='signup-email']").type(`testuser${Date.now()}@test.com`);
    //7. Click 'Signup' button
    cy.get("button[data-qa='signup-button']").click();
    //8. Verify that 'ENTER ACCOUNT INFORMATION' is visible
    cy.contains("Enter Account Information", {timeout: 4000}).should("be.visible");
    //9. Fill details: Title, Name, Email, Password, Date of birth
    cy.get("#id_gender1").click();
    cy.get("input[data-qa='password']").type("TestPassword123");
    cy.get("select[data-qa='days']").select("1");
    cy.get("select[data-qa='months']").select("January");
    cy.get("select[data-qa='years']").select("1990");
    //10. Select checkbox 'Sign up for our newsletter!'
    cy.get("input#newsletter").check();
    //11. Select checkbox 'Receive special offers from our partners!'
    cy.get("input#optin").check();
    //12. Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
    cy.get("input[data-qa='first_name']").type("Alice");
    cy.get("input[data-qa='last_name']").type("Enough");
    cy.get("input[data-qa='company']").type("Test Company");
    cy.get("input[data-qa='address']").type("123 Test Street");
    cy.get("input[data-qa='address2']").type("Apt 200");
    cy.get("select[data-qa='country']").select("Canada");
    cy.get("input[data-qa='state']").type("Alberta");
    cy.get("input[data-qa='city']").type("Red Deer");
    cy.get("input[data-qa='zipcode']").type("T4E 0B2");
    cy.get("input[data-qa='mobile_number']").type("+1234567890");
    //13. Click 'Create Account button'
    cy.get("button[data-qa='create-account']").click();
    //14. Verify that 'ACCOUNT CREATED!' is visible
    cy.contains("Account Created!").should("be.visible");
    //15. Click 'Continue' button
    cy.get("a[data-qa='continue-button']").click();
    //16. Verify that 'Logged in as username' is visible
    cy.contains("Logged in as TestUser").should("be.visible");
    //17. Click 'Delete Account' button
    cy.contains("Delete Account").click();
    //18. Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
    cy.contains("Account Deleted!").should("be.visible");
    cy.get("a[data-qa='continue-button']").click();
  })
})