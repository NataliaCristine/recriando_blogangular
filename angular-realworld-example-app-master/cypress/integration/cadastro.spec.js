const { EmailValidator } = require("@angular/forms");
const { createYield } = require("typescript")

describe('Conduit Cadastro', () => {
    const usuario = 'usuario' + (new Date()).getTime()
    const senha = 'senha' + (new Date()).getTime()
    it('Novo Usuario', () =>{
        cy.visit('/register');
        cy.get('[form-controlname=username]').type(usuario);
        cy.get('[form-controlname=email]').type(usuario+'@email.com');
        cy.get('[form-controlname=password]').type(senha);
        cy.get('.btn').click();
        cy.contains('.nav-item:nth-child(4) > .nav-link',usuario)
        .should('be.visible')

    })
       it('Usuário já existe', () => {
           cy.visit('/register')
           cy.get('[form-controlname=username]').type(usuario);
           cy.get('[form-controlname=email]').type(usuario+'@email.com');
           cy.get('[form-controlname=password]').type(senha);
           cy.get('.btn').click();
           cy.location('pathname').should('equal', '/register')
           cy.get('.error-messages > li:nth-child(1)')
       .should('not.be.empty')    
       })
})

