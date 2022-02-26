// home.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe("Home page", () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it("header contains explore heading", () => {
        cy.findByRole('heading').should('contain', 'Explore The Universe')
    })

    it('contains a search bar with a placeholder text', () => {
        cy.get('form').findByRole('button').should('exist')
    })



    // As a student, I want the page to still load if the photo data becomes corrupted so that I can still the additional information attached to that photo.

    // As a student, I want to click on an image and see more detailed information so I can learn about space

});

