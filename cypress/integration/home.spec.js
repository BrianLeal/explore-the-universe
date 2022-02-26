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

describe("Photos on home page", () => {
    beforeEach(() => {
        cy.visit('/')
    })

    //As a student, I want to see all the images on my phone, so I can marvel in what humanity has been able to capture.
    // As a student, I want to see multiple photos at once (on my laptop), so that I can dig into additional details on the images that are the most relevant.
    it('it should load a grid', () => {
        cy.findByTestId('grid-container');
    })

    // As a student, I want to see the title of each photo on the home page, so that I have a better idea of whether I want to see more detailed information on.
    it('it should display a title with every image', () => {
        cy.findByTestId('img-title')
    })

});