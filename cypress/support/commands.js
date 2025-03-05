
Cypress.Commands.add("registerUser", (username, email, password) => {
  cy.visit("https://automationexercise.com/");
  cy.contains("Signup / Login").click();

  cy.get("input[data-qa='signup-name']").type(username);
  cy.get("input[data-qa='signup-email']").type(email);
  cy.get("button[data-qa='signup-button']").click();

  cy.get('.login-form > h2.title.text-center').should('be.visible').and('have.text', 'Enter Account Information');
  cy.get("#id_gender1").click();
  cy.get("input[data-qa='password']").type(password);
  cy.get("select[data-qa='days']").select("1");
  cy.get("select[data-qa='months']").select("January");
  cy.get("select[data-qa='years']").select("1990");
  cy.get("input#newsletter").check();
  cy.get("input#optin").check();
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

  cy.get("button[data-qa='create-account']").click();
  cy.contains("Account Created!").should("be.visible");
  cy.get("a[data-qa='continue-button']").click();
});

Cypress.Commands.add('loginUser', (email, password) => {
  cy.get(".login-form input[data-qa='login-email']").type(email);
  cy.get(".login-form input[data-qa='login-password']").type(password);
  cy.get("button[data-qa='login-button']").click();

  cy.contains("Logged in as").should("be.visible");
});

Cypress.Commands.add('loginOrRegisterAndLoginUser', (username, email, password) => {

  cy.get('.signup-form input[data-qa="signup-name"]').type(username);
  cy.get('.signup-form input[data-qa="signup-email"]').type(email);
  cy.get('.signup-form button[data-qa="signup-button"]').click();
 
  cy.get('form > p').then((el) => {
      if (el.text().includes('Email Address already exist!')) {
         
          cy.loginUser(email, password);
      } else {

          cy.registerUser(username, email, password);
          cy.get('.nav').contains('Logout').click();
          cy.get('.nav').contains('Signup / Login').click();
          cy.loginUser(email, password);
      }
  });
});

import 'cypress-file-upload';