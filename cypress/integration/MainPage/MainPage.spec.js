import LoginPage from "../Login/loginPage"
import MainPage from "./MainPage"

Given("I navigate to the Website", () => {
    LoginPage.visit()
})

When("I provide with correct credentials", (table) => {
    table.hashes().forEach(row => {
        cy.log(row.username)
        cy.log(row.password)
        LoginPage.fillUsername(row.username)
        LoginPage.fillPassword(row.password)
    })
})

When("I click on sign in button", () => {
    LoginPage.submit()
})

Then("Validate the title after login", () => {
    cy.contains("Dashboard").should('be.visible')
})

When("I click on Admin Module", () => {
    MainPage.admin()
})

Then("Validate header after clicking Admin", () => {
    cy.contains('System Users')
})

When("I click on PIM Info Module", () => {
    MainPage.pim()
})

Then("Validate header after clicking PIM", () => {
    cy.contains('Employee Information')
})

When("I click on Leave List Module", () => {
    MainPage.leave()
})

Then("Validate header after clicking Leave", () => {
    cy.contains('Leave List')
})

When("I click on Time Sheet Module", () => {
    MainPage.time()
})

Then("Validate header after clicking Time", () => {
    cy.contains('Select Employee')
})

When("I click on Recruitment Module", () => {
    MainPage.recruit()
})

Then("Validate header after clicking Recruitment", () => {
    cy.contains('Candidates')
})

When("I click on My Info Module", () => {
    MainPage.myinfo()
})

Then("Validate header after clicking My Info", () => {
    cy.contains('Personal Details')
})

When("I click on Performance Module", () => {
    MainPage.performance()
})

Then("Validate header after clicking Performance", () => {
    cy.contains('Employee Reviews')
})

When("I click on Dashboard Module", () => {
    MainPage.dashboard()
})

Then("Validate header after clicking Dashboard", () => {
    cy.contains('Time at Work')
})

When("I click on Directory Module", () => {
    MainPage.directory()
})

Then("Validate header after clicking Directory", () => {
    cy.contains('Directory')
})

When("I click on Buzz Module", () => {
    MainPage.buzz()
})

Then("Validate header after clicking Buzz", () => {
    cy.contains('Launching Soon')
})

When("I click on Maintenance Module", () => {
    MainPage.maintenance()
})

Then("Validate header after clicking Maintenance", () => {
    cy.contains('Administrator Access')
})

