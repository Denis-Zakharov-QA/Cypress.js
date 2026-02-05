
describe('покупка нового аватара для своего тренера', function () {
     it('Покупка аватара', function () {
        cy.visit('https://pokemonbattle.ru/login');// зашли на сайт
        cy.wait(3000);
        cy.get('#k_email').type('email');// ввели верный логин
        cy.get('#k_password').type('password');// ввели верный пароль
        cy.get('.MuiButton-root').click();// нажал войти
        cy.wait(3000);
        cy.get('.header_card_trainer').click();// нажал на тренера
        cy.wait(3000);
        cy.get('[data-qa="shop"]').click();// нажал на cмену аватара
        cy.wait(3000);
        cy.get('.available > button').first().click();   // кликаем Купить у первого доступного аватара
        cy.get('.payment_form_card_form > :nth-child(2) > .style_1_base_input').type('4111 1111 1111 1111');// ввели номер карты
        cy.get(':nth-child(1) > .style_1_base_input').type('1226');// ввели срок карты
        cy.get('.payment_form_card_form_inputs > :nth-child(2) > .style_1_base_input').type('125');// ввели код
        cy.get('.payment_form_card_form_input_last > .style_1_base_input').type('Denis Zakharov');// ввели имя
        cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();// нажал оплатить
        cy.wait(3000);
        cy.get('.style_1_base_input').type('56456');                            // вводим код подтверждения СМС
        cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();// нажал оплатить
        cy.wait(3000);
        cy.get('.payment_status_back').click();// нажал вернуться на страницу тренера

    })


})
