beforeEach(() => {
  cy.visit('https://imusic.br.com/')
});

describe('Pesquisa e finalizaçao carrinho Imusic', () => {
  it('entrada home Imusic', () => {
  
    cy.get('#top-navbar')

  });
  it('Pesquisa no campo de busca', () => {
    buscaProduto('Evanescence')
    
  });
  it('Adcionar ao carrinho', () => {
    buscaProduto('Evanescence')
    cy.get(':nth-child(1) > :nth-child(1) > .media > .media-left > a > .item-cover')
    .click()
    cy.get('.col-md-6 > .h3')
    cy.get('#quantityRow > .input-group > .input-group-btn > .btn').click()
    cy.get('#confirmAddForm > .btn-success').click()
    
  });
  it('Validar Carrinho', () => {
    buscaProduto('Evanescence')
    cy.get(':nth-child(1) > :nth-child(1) > .media > .media-left > a > .item-cover')
    .click()
    .should('be.visible');
    cy.get('.col-md-6 > .h3')
    cy.get('#quantityRow > .input-group > .input-group-btn > .btn').click()
    cy.get('#confirmAddForm > .btn-success').click()

    cy.get('.cart > #items-in-cart')
    .click()
    cy.get('#cart-quantity-888072284890')
    .should('be.visible', '1')
  });
})

function buscaProduto(artista){
  cy.get('#mainsearch').type(artista).type('{enter}');
}