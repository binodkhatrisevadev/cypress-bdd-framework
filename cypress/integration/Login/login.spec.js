Given("I navigate to the Website", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com")
});
When("I enter user name and password", () => {
    cy.get("input[name=username]").type("Admin")
    cy.get("input[name=password]").type("admin123")
})

When("User click on sign in button", () => {
    cy.get(".oxd-button").click();
})

Then("Validate the title after login", () => {
    cy.contains("Dashboard")
})