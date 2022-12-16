Feature: Main Page

    Background: Login as a Valid User
        Given I navigate to the Website
        When I provide with correct credentials
            | username | password |
            | Admin    | admin123 |
        When I click on sign in button
        Then Validate the title after login

    Scenario: Verify Admin Module
        When I click on Admin Module
        Then Validate header after clicking Admin

    Scenario: Verify PIM Module
        When I click on PIM Info Module
        Then Validate header after clicking PIM

    Scenario: Verify Leave Module
        When I click on Leave List Module 
        Then Validate header after clicking Leave

    Scenario: Verify Time Module
        When I click on Time Sheet Module
        Then Validate header after clicking Time

    Scenario: Verify Recruitment Module
        When I click on Recruitment Module
        Then Validate header after clicking Recruitment

    Scenario: Verify My Info Module
        When I click on My Info Module
        Then Validate header after clicking My Info

    Scenario: Verify Performance Module
        When I click on Performance Module
        Then Validate header after clicking Performance

    Scenario: Verify Dashboard Module
        When I click on Dashboard Module
        Then Validate header after clicking Dashboard

    Scenario: Verify Directory Module
        When I click on Directory Module
        Then Validate header after clicking Directory

    Scenario: Verify Buzz Module
        When I click on Buzz Module
        Then Validate header after clicking Buzz

    Scenario: Verify Maintenance Module
        When I click on Maintenance Module
        Then Validate header after clicking Maintenance


