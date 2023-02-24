/// <reference types="cypress" />
const perfil = require('../fixtures/perfil.json')

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    beforeEach(() => {
        cy.visit('produtos/')
    });

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
        //TODO 
        var quantidade = 1
        cy.get('[class="product-block grid"]')
            .contains('Abominable Hoodie').click()// produto
            cy.get('.button-variable-item-M').click()// tamanho
            cy.get('.button-variable-item-Green').click()// cor
            cy.get('.input-text').clear().type(quantidade)// quantidade
            cy.get('.single_add_to_cart_button').click()// botão adicionar

            cy.get('.dropdown-toggle > .mini-cart-items').should('contain' , quantidade)// validação do carrinho
           
            cy.get('#primary-menu > .menu-item-629 > a').click()// menu comprar
            cy.get('.post-3528 > .product-block > .caption > .meta > .infor > .name > a').click()
            cy.get('.button-variable-item-36').click()//tamanho
            cy.get('.button-variable-item-Blue').click()// cor
            cy.get('.input-text').clear().type(quantidade)// quantidade
            cy.get('.single_add_to_cart_button').click()// botão adicionar
           
            cy.get('#primary-menu > .menu-item-629 > a').click()// menu comprar
            cy.get('.post-2622 > .product-block > .caption > .meta > .infor > .name > a').click()
            cy.get('.button-variable-item-M').click()//tamanho
            cy.get('.button-variable-item-Red').click()
            cy.get('.input-text').clear().type(quantidade)// quantidade
            cy.get('.single_add_to_cart_button').click()// botão adicionar

            cy.get('#primary-menu > .menu-item-629 > a').click()// menu comprar
            cy.get(':nth-child(2) > .page-numbers').click()// vai pra segunda página
            cy.get('.post-3680 > .product-block > .caption > .meta > .infor > .name > a').click()// produto
            cy.get('.button-variable-item-M').click()//tamanho
            cy.get(':nth-child(2) > .value > .variable-items-wrapper > .variable-item').click()//cor
            cy.get('.input-text').clear().type(quantidade)// quantidade
            cy.get('.single_add_to_cart_button').click()// botão adicionar
            cy.get('.woocommerce-message > .button').click()//ver carrinho
            cy.get('.checkout-button').click()//finalizar compra
    });


})