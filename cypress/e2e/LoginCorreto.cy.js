describe('Pagina de login', () => {
    it('Preecher o campo de login corretamente', () => {
        cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home')

        cy.get('[data-test="loginUserName"]').type('catarinatn');
        cy.get('[data-test="loginPassword"]').type('12345678');
        
        cy.contains('button', 'login').click();
    })
})