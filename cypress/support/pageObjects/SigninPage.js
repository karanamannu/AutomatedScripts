class SigninPage {
    visit() {
      cy.visit('https://magento.softwaretestingboard.com/');
    }
  
    clickSignIn() {
      cy.xpath('//a[contains(text(),"Sign In")]')
      .eq(0) //gets yu first element with the same above xpath
      .click();
    }
  
    enterCredentials() {
      cy.readFile('cypress/fixtures/credentials.json').then((data)=>{
        cy.get('#email').type(data.email);
      })
      
      cy.get('#pass').type('Password123');
    }
  
    submitLogin() {
      cy.xpath('//span[contains(text(),"Sign In")]').eq(0).click();
    }
  
    verifyLoginSuccess() {
      cy.xpath('//span[contains(text(),"Home Page")]').should('be.visible');
    }
  }
  
  export default SigninPage;
  