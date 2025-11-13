class Header {
  elements = {
    logo: () => cy.get('.logo pull-left'),
    home: () => cy.get('.nav navbar-nav').contains('Home'),
    products: () => cy.get('a').contains('Products'),
    cart: () => cy.get('a').contains(' Cart'),
    signupLogin: () => cy.get('a').contains('Signup / Login'),
    testCases: () => cy.get('a').contains('Test Cases'),
    apiTesting: () => cy.get('a').contains('API Testing'),
    videos: () => cy.get('a').contains('Video Tutorials'),
    contactUs: () => cy.get('a').contains('Contact us')
  };

  clickHome() {
    this.elements.home().click();
  };
  clickProducts() {
    this.elements.products().click();
  };
  clickCart() {
    this.elements.cart().click();
  };
  clickSignupLogin() {
    this.elements.signupLogin().click();
  };
  clickTestCases() {
    this.elements.testCases().click();
  };
  clickAPITesting() {
    this.elements.apiTesting().click();
  };
  clickVideos() {
    this.elements.videos().click();
  };
  clickContactUs() {
    this.elements.contactUs().click();
  };
};

export default new Header();