import { Given} from '@badeball/cypress-cucumber-preprocessor';

Given('I visit the Goibibo website to login', () => {
  cy.visit("https://www.goibibo.com/")
  cy.xpath('//span[contains(@class,"logSprite icClose")]').click({force:true})
  cy.xpath('//p[contains(text(),"Enter city or airport")]').eq(0).wait(2000).type('beng', { delay: 0 })
  cy.xpath('//*[@id="root"]/div[5]/div/div/div[2]/div[1]/div/div').should('be.visible') // Ensure the dropdown is visible
  .contains('Bengaluru International Airport') // Ensure the dropdown contains the option
  .click();
});