/// <reference types="cypress" />
import cadastro from '../support/page_objects/cad.page'

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */
describe('funcionalidade produtos', () => {
    
});
    beforeEach(() => {
        cy.visit('produtos')
    });

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
        cy.produtos('Abominable Hoodie', 'M', 'Green', '1')// produto
        cy.get('#primary-menu > .menu-item-629 > a').click()// menu comprar
        cy.get(':nth-child(2) > .page-numbers').click()// página 2
        cy.produtos('Ajax Full-Zip Sweatshirt', 'M', 'Red', '1')// produto
        cy.get('.single_add_to_cart_button').click()//botão comprar
        cy.get('#primary-menu > .menu-item-629 > a').click()// menu comprar
        cy.get(':nth-child(3) > .page-numbers').click() //vai pra página 3
        cy.produtos('Atlas Fitness Tank', 'XL', 'Blue', '1')// produto
        cy.get('#primary-menu > .menu-item-629 > a').click()//menu comprar
        cy.get(':nth-child(3) > .page-numbers').click() //vai pra página 3
        cy.produtos('Atomic Endurance Running Tee (V-neck', 'S', 'Green', '1')// produtoS
        cy.get('.woocommerce-message > .button').click()// ver carrinho
        cy.get('.checkout-button').click()// concluir compra
       
        cadastro.preenchimento('Simone', 'Santos Silva', 'Google', 'Brasil', 'Rua dos Carajás, 15', 'Itapevi','São Paulo', '06656350', '999999999', 'sosooliveira2210@gmail.com')
         
        cy.get('.wc_payment_method.payment_method_cod > label').click()// forma de pagamento
        cy.get('.form-row-wide > .woocommerce-form__label > span').click()// opção criar conta
        cy.get('.woocommerce-terms-and-conditions-checkbox-text').click()// opção termos de uso
        cy.get('#account_password').type('Mud55uwu009130@!')// senha
        cy.get('#place_order').click()// finalizar compra
        cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')// assert
       
    });

   


})