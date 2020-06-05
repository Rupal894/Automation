///<reference types="Cypress" />
//<reference *types*="cypress-shadow-dom" />

before(() => {
    cy.visit('/')
    cy.get('#username').type('BHGE-repairengineer-1')
    cy.get('#password').type('H*^m*n3T5d')
    cy.get('.btn').click().as('Login')
})
describe('Login to the application', () => {

    it('Action', () => {

        cy.wait(20000)
        cy.shadowGet('#trigger')
            .shadowFind('.dropdown-trigger')
            .shadowClick() 
    })


})