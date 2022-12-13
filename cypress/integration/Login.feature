Feature: Feature name

    Background:
        Given I navigate to the Website

    Scenario: Login as a Valid User
        When I provide with correct credentials
            | username | password |
            | Admin    | admin123 |
        When I click on sign in button
        Then Validate the title after login

    Scenario: Login as a Invalid User
        When I provide with incorrect credentials
            | username | password |
            | invuser  | invpass  |
        When I click on sign in button
        Then I should see error message

