Feature: User signs up on Magento website

  Scenario: User successfully creates an account
    Given I visit the Magento website
    When I click on the "Create an Account" button
    And I fill in the sign-up form with valid details
    And I submit the form
    Then I should see the "Thank you for registering with Main Website Store" message
