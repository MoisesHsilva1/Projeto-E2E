describe('Pagina de login', () => {

    beforeEach(()  => {
    cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home') })

    it('Preecher o campo de login corretamente', () => {
      cy.login('pedroT', '123456789')
    })
})