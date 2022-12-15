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

When("I click on Admin Module", () => {
    MainPage.admin()
})

When("I click on PIM Info Module", () => {
    MainPage.pim()
})

When("I click on Leave List Module", () => {
    MainPage.leave()
})

When("I click on Time Sheet Module", () => {
    MainPage.time()
})

When("I click on Recruitment Module", () => {
    MainPage.recruit()
})

When("I click on My Info Module", () => {
    MainPage.myinfo()
})

When("I click on Performance Module", () => {
    MainPage.performance()
})

When("I click on Dashboard Module", () => {
    MainPage.dashboard()
})

When("I click on Directory Module", () => {
    MainPage.directory()
})

When("I click on Buzz Module", () => {
    MainPage.buzz()
})

When("I click on Maintenance Module", () => {
    MainPage.maintenance()
})

