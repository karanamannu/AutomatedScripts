/// <reference types="cypress" />

import { Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';
import SignupPage from '../support/pageObjects/SignupPage';

before(() => {
  cy.exec('npm cache clear --force');
  
});


const signupPage = new SignupPage();

Given('I visit the Magento website',()=>{
  signupPage.visit()
})
When('I click on the "Create an Account" button', () => {
  signupPage.clickCreateAccount();
});
When('I fill in the sign-up form with valid details', () => {
  signupPage.fillInSignUpForm();
});

When('I submit the form', () => {
  signupPage.submitForm();
});

Then('I should see the "Thank you for registering with Main Website Store" message', () => {
  signupPage.verifyRegistrationSuccess();
});
