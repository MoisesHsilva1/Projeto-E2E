describe('Pagina de Login', () => {
    it('Campos de login incorreto', () => {
        cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home')

        cy.contains('User name is required!').should('be.visible');
        cy.contains('Password is required!').should('be.visible');
        
    })
})