Feature: Feature name

    I wan to login into the site

    Scenario: Login as a new sign up user
        Given I navigate to the Website
        When I enter user name and password
        When User click on sign in button
        Then Validate the title after login