# Cypress Project: Automated Testing for iMusic

This project uses Cypress to automate end-to-end tests for an e-commerce music site, iMusic. The tests cover product search, adding items to the cart, and validating the cart.

## Overview

The main goal of this project is to ensure that the essential functionalities of the iMusic site work correctly. The tests cover the following actions:

- **Home Page Access**: Verifies that the navbar is visible when accessing the home page.
- **Search Field**: Tests the product search functionality.
- **Add to Cart**: Verifies that a product can be added to the cart.
- **Cart Validation**: Confirms that the product was correctly added to the cart.

![testingimusic-ezgif com-video-to-gif-converter](https://github.com/user-attachments/assets/1a6c9126-7053-4bf8-a598-28f30c4213e2)

## Project Setup

To get started with this project, follow these steps:

### 1. Install Dependencies

Make sure you have [Node.js](https://nodejs.org/) installed. Then, clone the repository and install the dependencies:

```bash
git clone https://github.com/YOUR_USERNAME/cypress-project.git
cd cypress-project
npm install
```

### 2. Configure Cypress
To configure Cypress, you can use the command:
```bash
npx cypress open
```
This will open the Cypress graphical interface and create the default configuration files if they do not already exist.

### Running the Tests
To run the tests, you can use the following command:
```bash
npx cypress run
```
If you prefer to use the Cypress graphical interface to run and view the tests, use:
```bash
npx cypress open
```


## Example Test
Here is an example of how a test is structured in the project. This example covers accessing the iMusic home page, searching for products, adding to the cart, and validating the cart.

~~~javascript
beforeEach(() => {
  cy.visit('https://imusic.br.com/');
});

describe('Search and Cart Checkout iMusic', () => {
  it('Home Page Access', () => {
    cy.get('#top-navbar').should('be.visible');
  });

  it('Search in the Search Field', () => {
    searchProduct('Evanescence');
  });

  it('Add to Cart', () => {
    searchProduct('Evanescence');
    cy.get(':nth-child(1) > :nth-child(1) > .media > .media-left > a > .item-cover').click();
    cy.get('#quantityRow > .input-group > .input-group-btn > .btn').click();
    cy.get('#confirmAddForm > .btn-success').click();
  });

  it('Validate Cart', () => {
    searchProduct('Evanescence');
    cy.get(':nth-child(1) > :nth-child(1) > .media > .media-left > a > .item-cover').click().should('be.visible');
    cy.get('#quantityRow > .input-group > .input-group-btn > .btn').click();
    cy.get('#confirmAddForm > .btn-success').click();

    cy.get('.cart > #items-in-cart').click();
    cy.get('#cart-quantity-888072284890').should('contain', '1');
  });
});

function searchProduct(artist) {
  cy.get('#mainsearch').type(artist).type('{enter}');
}
~~~

## Useful Links
- [Testing with Cypress: A Comprehensive Guide](https://docs.cypress.io/guides/overview/why-cypress)
 - [Cypress no Stack Overflow](https://stackoverflow.com/questions/tagged/cypress)
 - [About iMusic](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)

## Authors
- [@viniandmelo](https://github.com/ViniandMelo)
