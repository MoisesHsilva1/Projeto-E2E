describe('Pagina de cadastro', () => {
  it('Preencher os campos dos formularios corretamente para cadastrar um novo usuario', () => {
    cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home')
    cy.contains('a', 'Register now').click();
    cy.get('[data-test="email"]').type('pedro@email.com.br');
    cy.get('[data-test="fullName"]').type('pedro teste ');
    cy.get('[data-test="registerUserName"]').type('pedrot');
    cy.get('[data-test="registerPassword"]').type('123456789');
    cy.contains('button', 'Register').click();
  })
})