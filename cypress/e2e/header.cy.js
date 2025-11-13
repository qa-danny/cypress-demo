import header from "../pages/header";

describe('Header Tests for Automation Exercise', () => {
  beforeEach(() => {
    cy.visit('https://automationexercise.com/');
    cy.get('body').should('be.visible');
  });
  it('Click All Links In Header', () => {
    header.clickProducts();
    cy.url().should('include', '/products');
    // header.clickCart();
    // cy.url().should('include', '/view_cart');
    header.clickSignupLogin();
    cy.url().should('include', '/login');
    header.clickTestCases();
    cy.url().should('include', '/test_cases');
    // header.clickAPITesting();
    // cy.url().should('include', '/api_testing');
    // header.clickVideos();
    // cy.url().should('include', '/video_tutorials');
    header.clickContactUs();
    cy.url().should('include', '/contact_us');
  });
});