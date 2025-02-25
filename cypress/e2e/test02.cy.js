/// <reference types = "cypress" />

describe('Test Case 2: Login User with Correct Email and Password', () => {

    it('should log in with correct credentials and verify login', () => {

        //2. Navigate to url 'http://automationexercise.com'
        cy.visit('https://automationexercise.com');

        //3. Verify that home page is visible successfully
        cy.get('body').should('be.visible');
        cy.url().should('include', 'automationexercise.com');

        //4. Click on 'Signup / Login' button
        cy.get('a[href="/login"]').contains('Signup / Login').click();

        //5. Verify 'Login to your account' is visible
        cy.get('.login-form h2').should('contain', 'Login to your account').and('be.visible');

        //6. Enter correct email address and password
        //7. Click 'login' button
        cy.fixture('user').then((fakerUser) => {

            const {username, email, password} = fakerUser.user;

            cy.loginOrRegisterAndLoginUser(username, email, password);

            //8. Verify that 'Logged in as username' is visible
            cy.get('li > a').should('be.visible').and('contain.text', `Logged in as ${username}`);

        });

        //9. Click 'Delete Account' button
        cy.contains('Delete Account').click();

        //10. Verify that 'ACCOUNT DELETED!' is visible
        cy.contains('Account Deleted!').should('be.visible');

    });
});