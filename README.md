# cypress-demo
Small demo project for Cypress.  I found a small website that will allow us to run some automated tests against, https://automationexercise.com.

I created a few tests following a page object model that will run through 


## Running Tests:
To run the test suite, run this in the command line:

```bash
npx cypress open
```

To run a specific test file via the CLI, use the `--spec` flag:

```bash
npx cypress run --spec "cypress/e2e/contact.cy.js"
```

^^ This will run the test n headless mode aganst Electron Browser (default confguraton)