Feature: Feature name

    As a invalid user
    I cannot log into the site

    As a valid user
    I want to login into the site

    Scenario: Login as a Invalid User
        Given I navigate to the Website
        When I fill username with "invalid username"
        And I fill password with "invalid password"
        When I click on sign in button
        Then I should see error message

    Scenario: Login as a Valid User
        Given I navigate to the Website
        When I fill username with "Admin"
        And I fill password with "admin123"
        When I click on sign in button
        Then Validate the title after login