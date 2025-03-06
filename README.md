# Automation Exercise Website - Full Testing Portfolio

[![Cypress Tests](https://img.shields.io/badge/Tested%20with-Cypress-04C38E.svg)](https://www.cypress.io/) [![CI/CD](https://github.com/Sandra-Ston/automationexercise_website_full_testing_portfolio/actions/workflows/cypress-tests.yml/badge.svg)](https://github.com/Sandra-Ston/automationexercise_website_full_testing_portfolio/actions)

This project is a comprehensive **test automation suite** for the [Automation Exercise](https://www.automationexercise.com/) website, developed using **Cypress**. It includes both **API and UI tests** to ensure the website's functionality and reliability.

## 📌 Overview

This project demonstrates **test automation skills** by focusing on:

✅ **End-to-End Testing** – Simulates real user interactions and workflows.  
✅ **Test Automation** – Reduces manual effort by automating repetitive test cases.  
✅ **Cypress Framework** – Uses Cypress for **fast, reliable** UI and API testing.  
✅ **CI/CD with GitHub Actions** – Automates test execution on each push or pull request.


## 📂 Repository Contents

*   `.github/workflows`: Contains GitHub Actions workflow files for continuous integration.
*   `cypress`: Contains all Cypress-related files, including:
    *   `e2e`: Test files defining the test scenarios.
    *   `fixtures`: Mock data used in tests.
    *   `support`: Custom commands and reusable functions.
*   `.gitignore`: Specifies intentionally untracked files that Git should ignore.
*   `cypress.config.js`: Cypress configuration file.
*   `package-lock.json`: Records the exact versions of dependencies used in the project.
*   `package.json`: Contains project metadata, dependencies, and scripts.


## 🛠️ Technologies Used

- **Cypress** – Automated testing framework.
- **JavaScript** – Scripting language for test cases.
- **GitHub Actions** – CI/CD pipeline for automated test execution.
- **Node.js** – Runtime for executing Cypress tests.

## 🚀 Setup and Installation

Ensure you have [Node.js](https://nodejs.org/) installed before proceeding.

1. **Clone the repository**:

    ```sh
    git clone https://github.com/Sandra-Ston/automationexercise_website_full_testing_portfolio.git
    cd automationexercise_website_full_testing_portfolio
    ```

2. **Install dependencies**:

    ```sh
    npm install
    ```

## ✅ Running the Tests

You can run the tests in different ways:

**1️⃣ Headless Mode** – Runs tests in the terminal (useful for CI/CD). 

```sh
npm run cy:run
```

**2️⃣ Interactive Mode** – Opens Cypress Test Runner (useful for debugging).

```sh
npm run cy:open
```

## 🔄 CI/CD Pipeline (GitHub Actions)

This repository is configured with **GitHub Actions** for continuous integration.
Every time changes are pushed, the workflow will:

1. Install dependencies.
2. Run Cypress tests in headless mode.
3. Provide feedback on test results.

You can view the test runs in the GitHub Actions tab.

## 🧪 Test Coverage

The test suite covers the following functionalities:

- **User Authentication** – Signup, Login, Logout.
- **Navigation & UI Tests** – Ensures all pages function correctly.
- **Product & Cart Operations** – Adding/removing products, checking out.
- **Form Validations** – Ensures correct error handling.
- **API Tests** – Validates backend responses.

## 📜 License

This project is licensed under the ISC License. See the [LICENSE](License) file for details.

## 👩‍💻 Author

[Sandra-Ston](https://github.com/Sandra-Ston)
