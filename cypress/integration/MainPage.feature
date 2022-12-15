Feature: Main Page

    Background:
        Given I navigate to the Website

    Scenario: Login as a Valid User
        When I provide with correct credentials
            | username | password |
            | Admin    | admin123 |
        When I click on sign in button
        When I click on Admin Module
        When I click on PIM Info Module
        When I click on Leave List Module
        When I click on Time Sheet Module
        When I click on Recruitment Module
        When I click on My Info Module
        When I click on Performance Module
        When I click on Dashboard Module
        When I click on Directory Module
        When I click on Buzz Module
        When I click on Maintenance Module
        
        

 