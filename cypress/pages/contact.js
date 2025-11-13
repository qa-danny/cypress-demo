class Contact {
  elements = {
    contactForm: () => cy.get('.contact-form'),
    nameInput: () => cy.get('input[name="name"]'),
    emailInput: () => cy.get('input[name="email"]'),
    subjectInput: () => cy.get('input[name="subject"]'),
    messageTextarea: () => cy.get('textarea[name="message"]'),
    submitButton: () => cy.get('input[type="submit"]'),
    successMessage: () => cy.get('.status.alert.alert-success'),
  };
  visit() {
    cy.visit('https://automationexercise.com/contact_us');
  };
  
  fillContactForm(name, email, subject, message) {
    this.elements.nameInput().safeType(name);
    this.elements.emailInput().safeType(email);
    this.elements.subjectInput().safeType(subject);
    this.elements.messageTextarea().safeType(message);
  };

  fillContactFormFromObject({ name= '', email = '', subject = '', message = '' }) {
    this.fillContactForm(name, email, subject, message);
  };
  
  submitForm() {
    this.elements.submitButton().click();
  };

  verifySuccessMessage() {
    this.elements.successMessage().should('be.visible');
    this.elements.successMessage().should('contain.text', 'submitted successfully'); 
  };

}

export default new Contact();