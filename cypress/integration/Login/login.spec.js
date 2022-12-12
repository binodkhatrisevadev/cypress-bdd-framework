import LoginPage from "./loginPage";

Given("I navigate to the Website", () => {
    LoginPage.visit()
})

When("I fill username with {string}", username => {
    LoginPage.fillUsername(username)
})

When("I fill password with {string}", password => {
    LoginPage.fillPassword(password)
})

When("I click on sign in button", () => {
    LoginPage.submit()
})

Then("Validate the title after login", () => {
    cy.contains("Dashboard").should('be.visible')
})

Then("I should see error message", () => {
    LoginPage.errorMsg()
})


