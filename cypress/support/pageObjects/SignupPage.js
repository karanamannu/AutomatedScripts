import EmailGenerator from "../../e2e/common/EmailGenerator";
class SignupPage {
  
    visit() {
      cy.visit('https://magento.softwaretestingboard.com/');
    }
  
    clickCreateAccount() {
      cy.xpath('//a[contains(text(),"Create an Account")]')
        .eq(0)
        .click();
    }
  
    fillInSignUpForm() {
      let EmailAddress=""
      let Sent_Dttm=""
      const currentDate = new Date();
      
      const currentDayOfMonth = currentDate.getDate();
      const currentMonth = currentDate.getMonth(); // Be careful! January is 0, not 1
      const currentYear = currentDate.getFullYear();
      
       Sent_Dttm = currentYear + "-" + (currentMonth + 1) + "-" + currentDayOfMonth;
      
      cy.get('#firstname').type('annu');
      cy.get('#lastname').type('karanam');
      EmailAddress=EmailGenerator.generate('test@gmail.com')
      cy.writeFile('cypress/fixtures/credentials.json', { email: EmailAddress });
      cy.get('#email_address').type(EmailAddress);
      cy.get('#password').type('Password123');
      cy.get('#password-confirmation').type('Password123');
    }
  
    submitForm() {
      cy.xpath('//button[contains(@type,"submit")]//span[contains(text(),"Create an Account")]').click();
    }
  
    verifyRegistrationSuccess() {
      cy.contains('Thank you for registering with Main Website Store').should('be.visible');
    }
  }
  
  export default SignupPage;
  