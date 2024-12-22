import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import SigninPage from '../support/pageObjects/SigninPage';

const signinPage = new SigninPage();

Given('I visit the Magento website to login', () => {
  signinPage.visit();
});

When('I click on the "Sign In" button', () => {
  signinPage.clickSignIn();
});

When('I enter valid login credentials', () => {
  signinPage.enterCredentials();
});

When('I submit the login form', () => {
  signinPage.submitLogin();
});

Then('I should see the "Welcome back" message', () => {
  signinPage.verifyLoginSuccess();
});
