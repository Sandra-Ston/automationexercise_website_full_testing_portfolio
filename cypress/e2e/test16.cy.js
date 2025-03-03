/// <reference types = "cypress" />

describe("Test Case 16: Place Order: Login before Checkout", () => {
    it("should login and place order successfully", () => {
      // 1. Launch browser & 2. Navigate to URL
      cy.visit("https://automationexercise.com");
  
      // 3. Verify that home page is visible
      cy.get("body").should("be.visible");
      cy.url().should("include", "automationexercise.com");

      //4. Click 'Signup / Login' button
      cy.get('a[href="/login"]').contains('Signup / Login').click();

        // 5. Fill email, password and click 'Login' button
      cy.fixture("user").then((fakerUser) => {
        const { username, email, password } = fakerUser.user;
  
        cy.loginOrRegisterAndLoginUser(username, email, password);
  
        //6. Verify ' Logged in as username' at top
        cy.get("li > a")
          .should("be.visible")
          .and("contain.text", `Logged in as ${username}`);
      });

      
      //7. Add products to cart
      cy.get(".features_items .product-image-wrapper")
        .first()
        .trigger("mouseover")
        .within(() => {
          cy.contains("Add to cart").click();
        });
  
      cy.contains("Continue Shopping").click();
  
      cy.get(".features_items .product-image-wrapper")
        .eq(1)
        .trigger("mouseover")
        .within(() => {
          cy.contains("Add to cart").click();
        });
  
      cy.contains("Continue Shopping").click();
  
      //8. Click 'Cart' button
      cy.contains("Cart").click();
  
      //9. Verify that cart page is displayed
      cy.url().should("include", "/view_cart");
  
      //10. Click Proceed To Checkout
      cy.contains("Proceed To Checkout").click();
   
      //11. Verify Address Details and Review Your Order
      cy.get('[data-qa="checkout-info"]').should("be.visible");
  
      //Delivery
      cy.get("#address_delivery").should("be.visible");
      cy.get("#address_delivery .address_firstname.address_lastname").should("contain.text", "Mr. Alice Enough");
      cy.get("#address_delivery .address_address1.address_address2").should("contain.text", "Test Company");
      cy.get("#address_delivery .address_address1.address_address2").should("contain.text", "123 Test Street");
      cy.get("#address_delivery .address_address1.address_address2").should("contain.text", "Apt 200");
      cy.get("#address_delivery .address_city.address_state_name.address_postcode").should("contain.text", "Red Deer Alberta");
      cy.get("#address_delivery .address_city.address_state_name.address_postcode").should("contain.text", "T4E 0B2");
      cy.get("#address_delivery .address_country_name").should("contain.text", "Canada");
      cy.get("#address_delivery .address_phone").should("contain.text", "+1234567890");
  
      //Billing
      cy.get("#address_invoice").should("be.visible");
      cy.get("#address_invoice .address_firstname ").should("contain.text", "Mr. Alice Enough");
      cy.get("#address_invoice .address_address1.address_address2").should("contain.text", "Test Company");
      cy.get("#address_invoice .address_address1.address_address2").should("contain.text", "123 Test Street");
      cy.get("#address_invoice .address_address1.address_address2").should("contain.text", "Apt 200");
      cy.get("#address_invoice .address_city.address_state_name.address_postcode").should("contain.text", "Red Deer Alberta");
      cy.get("#address_invoice .address_city.address_state_name.address_postcode").should("contain.text", "T4E 0B2");
      cy.get("#address_invoice .address_country_name").should("contain.text", "Canada");
      cy.get("#address_invoice .address_phone").should("contain.text", "+1234567890");
  
      //Order
      cy.get("#cart_info").should("be.visible");
  
      //Blue Top
      cy.get("#product-1")
        .should("be.visible")
        .within(() => {
          cy.get(".cart_description h4").should("contain.text", "Blue Top");
          cy.get(".cart_price p").should("contain.text", "Rs. 500");
          cy.get(".cart_quantity button").should("contain.text", "1");
          cy.get(".cart_total .cart_total_price").should("contain.text", "Rs. 500");
        });
  
      //Men Tshirt
      cy.get("#product-2")
        .should("be.visible")
        .within(() => {
          cy.get(".cart_description h4").should("contain.text", "Men Tshirt");
          cy.get(".cart_price p").should("contain.text", "Rs. 400");
          cy.get(".cart_quantity button").should("contain.text", "1");
          cy.get(".cart_total .cart_total_price").should("contain.text", "Rs. 400");
        });
  
      //Total price
      cy.get(".cart_total_price").should("contain.text", "Rs. 900");
  
      //12. Enter description in comment text area and click 'Place Order'
      cy.get(".form-control").type(
        "Please deliver between 9 AM - 5 PM. Other times I'll be hungry like a wolf"
      );
      cy.contains("Place Order").click();
  
      //13. Enter payment details: Name on Card, Card Number, CVC, Expiration date
      cy.get('[data-qa="name-on-card"]').type("Duran Duran");
      cy.get('[data-qa="card-number"]').type("123456789");
      cy.get('[data-qa="cvc"]').type("123");
      cy.get('[data-qa="expiry-month"]').type("03");
      cy.get('[data-qa="expiry-year"]').type("2025");
  
      //14. Click 'Pay and Confirm Order' button
      cy.get("form#payment-form").then(($form) => {
        $form.on("submit", (e) => {
          e.preventDefault();
        });
      });
  
      cy.get('[data-qa="pay-button"]').click();
  
      //15. Verify success message 'Your order has been placed successfully!'
      cy.get("#success_message > .alert-success").should(
        "contain.text",
        "Your order has been placed successfully!"
      );
  
      cy.get("form#payment-form").then(($form) => {
        $form.off("submit");
      });
      cy.get('[data-qa="pay-button"]').click();
  
      //16. Click 'Delete Account' button
      cy.contains("Delete Account").click();
      
      //17. Verify 'ACCOUNT DELETED!' and click 'Continue' button
      cy.contains("Account Deleted!").should("be.visible");
      cy.get("a[data-qa='continue-button']").click();
    });
  });