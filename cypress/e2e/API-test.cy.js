/// <reference types="cypress" />

describe("API Tests with Cypress", () => {
  describe("API 1: Get All Products List", () => {
    it("should return a list of all products with status code 200", () => {
      cy.request({
        method: "GET",
        url: "https://automationexercise.com/api/productsList",
      }).then((response) => {
        const responseBody = JSON.parse(response.body);

        expect(response.status).to.eq(200);
        expect(responseBody).to.have.property("responseCode", 200);
        expect(responseBody).to.have.property("products");
        expect(responseBody.products).to.be.an("array");
        expect(responseBody.products.length).to.be.greaterThan(0);

        if (responseBody.products.length > 0) {
          responseBody.products.forEach((product) => {
            expect(product).to.have.property("id");
            expect(product).to.have.property("name");
            expect(product).to.have.property("price");
            expect(product).to.have.property("brand");
            expect(product).to.have.property("category");
            expect(product.category).to.have.property("usertype");
            expect(product.category.usertype).to.have.property("usertype");
            expect(product.category).to.have.property("category");
          });
        }
      });
    });
  });

  describe("API 2: POST To All Products List", () => {
    it("should return 405 method is not supported with message", () => {
      cy.request({
        method: "POST",
        url: "https://automationexercise.com/api/productsList",
      }).then((response) => {
        const responseBody = JSON.parse(response.body);

        expect(response.status).to.eq(200);
        expect(responseBody).to.have.property("responseCode", 405);
        expect(responseBody).to.have.property(
          "message",
          "This request method is not supported."
        );
      });
    });
  });

  describe("API 3: Get All Brands List", () => {
    it("should return a list of all brands", () => {
      cy.request({
        method: "GET",
        url: "https://automationexercise.com/api/brandsList",
      }).then((response) => {
        const responseBody = JSON.parse(response.body);
        expect(response.status).to.eq(200);
        expect(responseBody).to.have.property("responseCode", 200);
        expect(responseBody.brands).to.be.an("array").that.is.not.empty;

        const ids = responseBody.brands.map((b) => b.id);
        expect(new Set(ids).size).to.eq(ids.length);

        responseBody.brands.forEach((brand) => {
          expect(brand).to.have.property("id").that.is.a("number");
          expect(brand).to.have.property("brand").that.is.a("string");
        });
      });
    });
  });

  describe("API 4: PUT To All Brands List", () => {
    it("should return 405 method is not supported with message", () => {
      cy.request({
        method: "PUT",
        url: "https://automationexercise.com/api/brandsList",
      }).then((response) => {
        const responseBody = JSON.parse(response.body);

        expect(response.status).to.eq(200);
        expect(responseBody).to.have.property("responseCode", 405);
        expect(responseBody).to.have.property(
          "message",
          "This request method is not supported."
        );
      });
    });
  });

  describe("API 5: POST To Search Product", () => {
    it("should return a list of searched product", () => {
      const searchTerm = "tshirt";

      cy.request({
        method: "POST",
        url: "https://automationexercise.com/api/searchProduct",
        form: true,
        body: { search_product: searchTerm },
        headers: { "Content-Type": "application/form-data" },
      }).then((response) => {
        const responseBody = JSON.parse(response.body);
        expect(response.status).to.eq(200);
        expect(responseBody).to.have.property("products");
        expect(responseBody.products).to.be.an("array").that.is.not.empty;

        responseBody.products.forEach((product) => {
          expect(product).to.have.property("id");
          expect(product).to.have.property("name");
          expect(product).to.have.property("price");
          expect(product).to.have.property("brand");
          expect(product).to.have.property("category");
          expect(product.category).to.have.property("usertype");
          expect(product.category.usertype).to.have.property("usertype");
          expect(product.category).to.have.property("category");
        });
      });
    });
  });

  describe("API 6: POST To Search Product without search_product parameter", () => {
    it("should return 400 Bad Request when search_product is missing", () => {
      cy.request({
        method: "POST",
        url: "https://automationexercise.com/api/searchProduct",
        form: true,
        body: {},
        headers: { "Content-Type": "application/form-data" },
      }).then((response) => {
        const responseBody = JSON.parse(response.body);
        expect(response.status).to.eq(200);
        expect(responseBody).to.have.property("responseCode", 400);
        expect(responseBody).to.have.property(
          "message",
          "Bad request, search_product parameter is missing in POST request."
        );
      });
    });
  });

  describe("API 11: POST To Create/Register User Account", () => {
    it("should create a new user successfully", () => {
      cy.request({
        method: "POST",
        url: "https://automationexercise.com/api/createAccount",
        form: true,
        body: {
          name: "TestUser66",
          email: "testuser2@testExample66.com",
          password: "password66",
          title: "Mr",
          birth_date: "1",
          birth_month: "1",
          birth_year: "2000",
          firstname: "Test",
          lastname: "User",
          company: "TestCompany",
          address1: "TestAddress1",
          address2: "TestAddress2",
          country: "Lithuania",
          zipcode: "12345",
          state: "Vilnius",
          city: "Vilnius",
          mobile_number: "+37012345678",
        },
      }).then((response) => {

        cy.log(JSON.stringify(response.body));
        console.log(response.body);
        
        const responseBody = JSON.parse(response.body);
        expect(response.status).to.eq(200);
        expect(responseBody).to.have.property("responseCode", 201);
        expect(responseBody).to.have.property(
          "message",
          "User created!"
        );
      });
    });
  });

  describe("API 7: POST To Verify Login with valid details", () => {
    it("should login the user with valid credentials", () => {
      cy.request({
        method: "POST",
        url: "https://automationexercise.com/api/verifyLogin",
        form: true,
        body: {
          email: "testuser2@testExample66.com",
          password: "password66",
        },
      }).then((response) => {
        cy.log(JSON.stringify(response.body));
        console.log(response.body);

        const responseBody = JSON.parse(response.body);
        expect(response.status).to.eq(200);
        expect(responseBody).to.have.property("responseCode", 200);
        expect(responseBody).to.have.property("message", "User exists!");
      });
    });
  });

  describe("API 8: POST To Verify Login without email parameter", () => {
    it("should return 400 Bad Request when email is missing", () => {
      cy.request({
        method: "POST",
        url: "https://automationexercise.com/api/verifyLogin",
        form: true,
        body: {
          password: "password66",
        },
      }).then((response) => {
        cy.log(JSON.stringify(response.body));
        console.log(response.body);

        const responseBody = JSON.parse(response.body);
        expect(response.status).to.eq(200);
        expect(responseBody).to.have.property("responseCode", 400);
        expect(responseBody).to.have.property(
          "message",
          "Bad request, email or password parameter is missing in POST request."
        );
      });
    });
  });

  describe("API 9: DELETE To Verify Login", () => {
    it("should return 405 Method Not Allowed", () => {
      cy.request({
        method: "DELETE",
        url: "https://automationexercise.com/api/verifyLogin",
      }).then((response) => {
        cy.log(JSON.stringify(response.body));
        console.log(response.body);

        const responseBody = JSON.parse(response.body);
        expect(response.status).to.eq(200);
        expect(responseBody).to.have.property("responseCode", 405);
        expect(responseBody).to.have.property(
          "message",
          "This request method is not supported."
        );
      });
    });
  });

  describe("API 10: POST To Verify Login with invalid details", () => {
    it("should return 404 User Not Found for invalid credentials", () => {
      cy.request({
        method: "POST",
        url: "https://automationexercise.com/api/verifyLogin",
        form: true,
        body: {
          email: "testuser2@testExample66.com",
          password: "invalidPassword",
        },
      }).then((response) => {
        cy.log(JSON.stringify(response.body));
        console.log(response.body);

        const responseBody = JSON.parse(response.body);
        expect(response.status).to.eq(200);
        expect(responseBody).to.have.property("responseCode", 404);
        expect(responseBody).to.have.property("message", "User not found!");
      });
    });
  });

  describe("API 13: PUT METHOD To Update User Account", () => {
    it("should update user successfully", () => {
      cy.request({
        method: "PUT",
        url: "https://automationexercise.com/api/updateAccount",
        form: true,
        body: {
          name: "TestUser66",
          email: "testuser2@testExample66.com",
          password: "password66",
          title: "Mr",
          birth_date: "1",
          birth_month: "1",
          birth_year: "2000",
          firstname: "TestUpdate",
          lastname: "UserUpdate",
          company: "TestCompanyUpdate",
          address1: "TestAddress1Update",
          address2: "TestAddress2",
          country: "Lithuania",
          zipcode: "12345",
          state: "Kaunas",
          city: "Kaunas",
          mobile_number: "812345678",
        },
      }).then((response) => {
        cy.log(JSON.stringify(response.body));
        console.log(response.body);

        const responseBody = JSON.parse(response.body);
        expect(response.status).to.eq(200);
        expect(responseBody).to.have.property("responseCode", 200);
        expect(responseBody).to.have.property("message", "User updated!");
      });
    });
  });

  describe("API 14: GET user account detail by email", () => {
    it("should return user details for a valid email", () => {
      cy.request({
        method: "GET",
        url: "https://automationexercise.com/api/getUserDetailByEmail",
        qs: { email: "testuser2@testExample66.com" },
      }).then((response) => {
        cy.log(JSON.stringify(response.body));
        console.log(response.body);

        const responseBody = JSON.parse(response.body);
        expect(response.status).to.eq(200);
        expect(responseBody).to.have.property("responseCode", 200);
        expect(responseBody).to.have.property("user");

        expect(responseBody.user).to.have.property("id");
        expect(responseBody.user).to.have.property("name");
        expect(responseBody.user).to.have.property("email");
        expect(responseBody.user).to.have.property("title");
        expect(responseBody.user).to.have.property("birth_day");
        expect(responseBody.user).to.have.property("birth_month");
        expect(responseBody.user).to.have.property("birth_year");
        expect(responseBody.user).to.have.property("first_name");
        expect(responseBody.user).to.have.property("last_name");
        expect(responseBody.user).to.have.property("address1");
        expect(responseBody.user).to.have.property("address2");
        expect(responseBody.user).to.have.property("country");
        expect(responseBody.user).to.have.property("state");
        expect(responseBody.user).to.have.property("city");
        expect(responseBody.user).to.have.property("zipcode");
      });
    });
  });

  describe("API 12: DELETE METHOD To Delete User Account", () => {
    it("should delete the user account successfully", () => {
      cy.request({
        method: "DELETE",
        url: "https://automationexercise.com/api/deleteAccount",
        form: true,
        body: {
          email: "testuser2@testExample66.com",
          password: "password66",
        },
      }).then((response) => {
        cy.log(JSON.stringify(response.body));
        console.log(response.body);

        const responseBody = JSON.parse(response.body);
        expect(response.status).to.eq(200);
        expect(responseBody).to.have.property("responseCode", 200);
        expect(responseBody).to.have.property("message", "Account deleted!");
      });
    });
  });
});
