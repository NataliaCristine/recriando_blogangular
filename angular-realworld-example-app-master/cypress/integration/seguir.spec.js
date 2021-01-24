describe('Seguir', () =>{
    it('Seguir Usuario', () =>{
        const usuario = 'usuario' + (new Date()).getTime()
        const senha = 'senha' + (new Date()).getTime()
            cy.visit('/register', {timeout:10000});
            cy.get('[form-controlname=username]').type(usuario);
            cy.get('[form-controlname=email]').type(usuario+'@email.com');
            cy.get('[form-controlname=password]').type(senha);
            cy.get('.btn').click();
            cy.wait(10000)
            cy.visit('/profile/testecypress')
            cy.contains('Follow').click()
            
    })
})