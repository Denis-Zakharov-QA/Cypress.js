import * as data from "../helpers/default_data.json"
import * as main_page from "../locators/main_page.json"
import * as result_page from "../locators/result_page.json"
import * as recovery_password_page from "../locators/recovery_password_page.json"

describe('Проверка авторизации', function () {

    beforeEach('Начало теста', function () {
         cy.visit('/');// зашли на сайт
         cy.get(main_page.fogot_pass_btn).should('have.css', 'color', 'rgb(0, 85, 152)');// проверяю цвет кнопки "забыли пароль"
           });

    afterEach('Конец теста', function () {
         cy.get(result_page.close).should('be.visible');// крестик виден пользователю
        });

   it('Верный пароль и верный логин', function () {
        cy.get(main_page.email).type(data.login);// ввели верный логин
        cy.get(main_page.password).type(data.password);// ввели верный пароль
        cy.get(main_page.login_button).click();// нажал войти

        cy.get(result_page.title).contains('Авторизация прошла успешно');// Проверяю что после авт. текст совпал
        cy.get(result_page.title).should('be.visible');// текст виден пользователю
        })


    it('Востановление пароля', function () {
        cy.get(main_page.fogot_pass_btn).click();// нажал кнопку "забыли пароль"
        cy.get(recovery_password_page.email).type(data.login);// ввели верный логин
        cy.get(recovery_password_page.send_button).click();// нажал кнопку "отправить код"
        cy.get(result_page.title).contains('Успешно отправили пароль на e-mail');// Проверяю что текст совпал
    })


    it('Не верный пароль и верный логин', function () {
        cy.get(main_page.email).type(data.login);// ввели верный логин
        cy.get(main_page.password).type('qa_one_love');// ввели не верный пароль
        cy.get(main_page.login_button).click();// нажал войти

        cy.get(result_page.title).contains('Такого логина или пароля нет');// Проверяю что после авт. текст совпал
        cy.get(result_page.title).should('be.visible');// текст виден пользователю
    })


     it('Верный пароль и не верный логин', function () {
        cy.get(main_page.email).type('erman@dolnikov.ru');// ввели не верный логин
        cy.get(main_page.password).type(data.password);// ввели верный пароль
        cy.get(main_page.login_button).click();// нажал войти

        cy.get(result_page.title).contains('Такого логина или пароля нет');// Проверяю что после авт. текст совпал
        cy.get(result_page.title).should('be.visible');// текст виден пользователю
    })

    it('Проверка логина без @', function () {
        cy.get(main_page.email).type('germandolnikov.ru');// ввели логин без @
        cy.get(main_page.password).type(data.password);// ввели верный пароль
        cy.get(main_page.login_button).click();// нажал войти

        cy.get(result_page.title).contains('Нужно исправить проблему валидации');// Проверяю что после авт. текст совпал
        cy.get(result_page.title).should('be.visible');// текст виден пользователю
    })

     it('проверка на приведение к строчным буквам в логине', function () {
        cy.get(main_page.email).type('GerMan@Dolnikov.ru');// ввели верный логин заглавными буквами и строчными
        cy.get(main_page.password).type(data.password);// ввели верный пароль
        cy.get(main_page.login_button).click();// нажал войти

        cy.get(result_page.title).contains('Авторизация прошла успешно');// Проверяю что после авт. текст совпал
        cy.get(result_page.title).should('be.visible');// текст виден пользователю
    })
})
