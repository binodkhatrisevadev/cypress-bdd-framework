import { When, Then, Given } from 'cypress-cucumber-preprocessor/steps'

Given('I navigate to IPrice {word} Page', (word) => {
    if (word == 'Home') {
        cy.visit('https://iprice.my/')
    } else if (word == 'Coupons') {
        cy.visit('https://iprice.my/coupons/')
    }
})

// Given('I navigate to IPrice Coupons Page', () => {
//     cy.visit('https://iprice.my/coupons/')
// })

When('I grab the list of stores in Find the Best Deals Online', () => {
    cy.get('div[class="kF"]:nth-child(2) a')
        .as('stores')
        .each(($el) => {
            cy.log($el.attr('href'))
        })
})

Then('I count the list of stores in Find the Best Deals Online', () => {
    cy.get('@stores')
        .then(($el) => {
            cy.log('Number of Stores: ' + $el.length)
        })
    cy.get('@stores').should('have.length', 20)
})

Then('I count the list of items in Top Trending Products', () => {
    cy.get('div[class="C I l eU"]:nth-child(3) a')
        .as('trending-products')
        .then(($el) => {
            cy.log('Number of Items in Top Trending Products: ' + $el.length)
        })
})

Then('I validate each item in the list of Top Trending Products', () => {
    cy.get('@trending-products')
        .each(($el) => {
            cy.get($el).should('have.attr', 'data-vars-cgt')
        })
})

Then('I validate that all urls in Top Stores are working', () => {
    cy.get('[data-uat="top-stores"] > div > p > a')
        .as('top-stores')
        .each(($el) => {
            cy.request({
                url: $el.attr('href'),
                method: 'GET'
            }).then((response) => {
                expect(response.status).to.equal(200)
            })
        })
})

Then('I validate that all urls in Top Stores are redirecting to proper stores', () => {
    cy.get('@top-stores')
        .each(($el) => {
            let text = $el.text().trim().replace(/\s+/g, '-').toLowerCase()
            expect($el.attr('href')).to.include(text)
        })
})

Then('I validate that all urls in Sitemap are working', () => {
    cy.get('a[href]').each(page => {
        cy.request({
            url: page.prop('href'),
            method: 'GET'
        }).then(response => {
            expect(response.status).to.equal(200)
        })
    })

})