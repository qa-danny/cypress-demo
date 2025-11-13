// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

// .type Does not accept empty strings. This custom command allows us to submit empty strings
// to the input box but performs a "clear" on the text, so it is empty.
Cypress.Commands.add('safeType', { prevSubject: 'element' }, (subject, text) => {
  if (text) {
    cy.wrap(subject).type(text);
  } else {
    cy.wrap(subject).clear();
  }
});