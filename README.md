
# Projeto Cypress: Testes Automatizados para o iMusic

Este projeto utiliza o Cypress para automatizar testes end-to-end em um site de e-commerce de música, iMusic. Os testes abordam a pesquisa de produtos, adição de itens ao carrinho e a validação do carrinho.

## Documentação Projeto Cypress

### Simulação Cypress: Testes Automatizados para o iMusic

Este projeto utiliza o Cypress para automatizar testes end-to-end em um site de e-commerce de música, iMusic. Os testes abordam a pesquisa de produtos, adição de itens ao carrinho e a validação do carrinho.

## Visão Geral

O objetivo principal deste projeto é garantir que as funcionalidades essenciais do site iMusic funcionem corretamente. Os testes cobrem as seguintes ações:

- **Entrada na Home**: Verifica se o navbar está visível ao acessar a home.
- **Pesquisa no Campo de Busca**: Testa a funcionalidade de pesquisa de produtos.
- **Adicionar ao Carrinho**: Verifica se um produto pode ser adicionado ao carrinho.
- **Validar Carrinho**: Confirma se o produto foi adicionado corretamente ao carrinho.


![testingimusic-ezgif com-video-to-gif-converter](https://github.com/user-attachments/assets/d9aaa463-0286-43ee-aab3-783455e30c34)


## Configuração do Projeto

Para começar a usar este projeto, siga os passos abaixo:

### 1. Instalação das Dependências

Certifique-se de ter o [Node.js](https://nodejs.org/) instalado. Em seguida, clone o repositório e instale as dependências:

```bash
git clone https://github.com/SEU_USUARIO/cypress-project.git
cd cypress-project
npm install
```
### 2. Configuração do Cypress 

Para configurar o Cypress, você pode usar o comando:

```npx cypress open```
Isso abrirá a interface gráfica do Cypress e criará os arquivos de configuração padrão se eles ainda não existirem.
## Executando os Testes

Para rodar os testes, você pode usar o seguinte comando:

```npx cypress run```

Se preferir usar a interface gráfica do Cypress para executar e visualizar os testes, utilize:

```npx cypress open```


## Exemplo de Teste

Aqui está um exemplo de como um teste está estruturado no projeto. Este exemplo cobre a entrada na home do iMusic, pesquisa de produtos, adição ao carrinho e validação do carrinho.

~~~javascript
beforeEach(() => {
  cy.visit('https://imusic.br.com/')
});

describe('Pesquisa e finalização carrinho Imusic', () => {
  it('entrada home Imusic', () => {
    cy.get('#top-navbar').should('be.visible');
  });

  it('Pesquisa no campo de busca', () => {
    buscaProduto('Evanescence');
  });

  it('Adicionar ao carrinho', () => {
    buscaProduto('Evanescence');
    cy.get(':nth-child(1) > :nth-child(1) > .media > .media-left > a > .item-cover').click();
    cy.get('#quantityRow > .input-group > .input-group-btn > .btn').click();
    cy.get('#confirmAddForm > .btn-success').click();
  });

  it('Validar Carrinho', () => {
    buscaProduto('Evanescence');
    cy.get(':nth-child(1) > :nth-child(1) > .media > .media-left > a > .item-cover').click().should('be.visible');
    cy.get('#quantityRow > .input-group > .input-group-btn > .btn').click();
    cy.get('#confirmAddForm > .btn-success').click();

    cy.get('.cart > #items-in-cart').click();
    cy.get('#cart-quantity-888072284890').should('contain', '1');
  });
});

function buscaProduto(artista) {
  cy.get('#mainsearch').type(artista).type('{enter}');
}



~~~


## Referência

 - [Testing with Cypress: A Comprehensive Guide](https://docs.cypress.io/guides/overview/why-cypress)
 - [Cypress no Stack Overflow](https://stackoverflow.com/questions/tagged/cypress)
 - [About iMusic](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)


## Autores

- [@viniandmelo](https://github.com/ViniandMelo)

