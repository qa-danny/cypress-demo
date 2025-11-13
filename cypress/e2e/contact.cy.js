import contact from "../pages/contact";

describe.only('Contact Us Form Tests for Automation Exercise', () => {
  it('Submit Contact Us Form Successfully', () => {
    contact.visit();
    contact.fillContactForm('John Doe',
      'ILoveAutomatedTests@gmail.com',
      'Inquiry about services',
      'Hello, I love automated testing. Thank you for setting up this site!'
    );
    contact.submitForm();
    contact.verifySuccessMessage();
  });
});
