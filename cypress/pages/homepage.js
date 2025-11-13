// pages/HomePage.js
class HomePage {
  elements = {
    carousel: () => cy.get('#slider-carousel'), // By ID
    carouselLeftNav: () => cy.get('.left control-carousel hidden-xs'), // By Class
    carouselRightNav: () => cy.get('.right control-carousel hidden-xs'),
    testCaseButton: () => cy.get('a').contains('Test Cases'), // by Link Text
    apiButton: () => cy.get('a').contains('API Testing'),
  }

  visit() {
    cy.visit('https://automationexercise.com/');
  }

  ensureLoggedIn() {
    this.elements.greeting().should('exist');
    return this;
  }

  logout() {
    this.elements.logoutButton().click();
    return this;
  }
}

export default new HomePage();
