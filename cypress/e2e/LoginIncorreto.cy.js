describe('Pagina de Login', () => {
    it('Campos de login incorreto', () => {
        cy.visit('http://localhost:4200/#/home')

        cy.contains('User name is required!').should('be.visible');
        cy.contains('Password is required!').should('be.visible');
        
    })
})