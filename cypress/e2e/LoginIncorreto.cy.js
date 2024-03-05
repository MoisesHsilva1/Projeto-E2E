describe('Pagina de Login', () => {
  
        beforeEach(() => {
              cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home')

              cy.intercept('POST', 'https://alurapic-api.onrender.com/user/login', {
                 statusCode: 400
              }).as('stubPost')             
        })
      
        it('Campos de login incorreto', () => {
        cy.contains('User name is required!').should('be.visible');
        cy.contains('Password is required!').should('be.visible');
        
    })


        it('Deve falhar mesmo que os campos seja prenchidos corretos', ()=> {
           cy.login('moisas', '12345678');
           cy.wait('@stubPost')
        })
})