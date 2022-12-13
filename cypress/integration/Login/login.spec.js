import LoginPage from "./loginPage";

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

When("I provide with incorrect credentials", (table) => {
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

Then("I should see error message", () => {
    LoginPage.errorMsg()
})


