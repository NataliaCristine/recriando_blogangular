const { createYield } = require("typescript")

describe('Logout',() =>{
    it('Logout via Perfil', () =>{
        cy.login('testecypress@testecypress.com', 'testecypress')
        cy.contains('Settings').click()
        cy.url().should('incluide', '/settings')
        cy.get('.btn-outline-danger').click()
        
    })
})