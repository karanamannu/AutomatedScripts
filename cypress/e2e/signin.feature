Feature: User logs in to Magento website

  Scenario: User successfully logs in
    Given I visit the Magento website to login
    When I click on the "Sign In" button
    And I enter valid login credentials
    And I submit the login form
    Then I should see the "Welcome back" message