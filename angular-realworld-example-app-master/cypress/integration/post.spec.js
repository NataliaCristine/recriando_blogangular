const { it } = require("mocha")

describe('Post', () => {
    beforeEach(() => {
        cy.login('testecypress@testecypress.com', 'testecypress')
    })
    it('Novo ', () =>{
        const tit = 'Cypress E2E'
        cy.contains('New Article').click();
        cy.location('pathname').should('equal', '/editor')
        cy.get('[form-controlname=title]').type('Cypress E2E');
        cy.get('[form-controlname=description]').type('Ponta a Ponta');
        cy.get('[form-controlname=body]').type('Agilidade, Qualidade');
        cy.contains('Publish Article').click()
        cy.get('h1').contains(tit);
    })
    it('Editar', () =>{
        cy.contains('testecypress').click();
        cy.location('pathname').should('contains', '/profile')
        cy.get('.article-preview').get('h1').first().click()
        cy.contains('Edit Article').click()
        cy.get('[form-controlname=body]').clear();
        cy.get('[form-controlname=body]').type('Economia');
        cy.contains('Publish Article').click()
        cy.contains('Economia');
    })
})