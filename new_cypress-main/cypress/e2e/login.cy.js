describe('позитивный кейс авторизации', function () {

    it('Верный пароль и верный логин', function () {
         cy.visit('https://login.qa.studio/');            //Вход на сайт
         cy.get('#mail').type('german@dolnikov.ru');      //Ввод логина
         cy.get('#pass').type('iLoveqastudio1');          //Ввод пароля
         cy.get('#loginButton').click();                  //клик по кнопке входа
         cy.get('#messageHeader').should('be.visible');   //видно уведомление
         cy.get('#messageHeader').contains('Авторизация прошла успешно');   //валидация текста уведомления
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');     //проверка видимости крестика
        
 })
 it('логика восстановления пароля', function () {
    cy.visit('https://login.qa.studio');              //Вход на сайт
    cy.get('#forgotEmailButton').click();             //клик по кнопке забыли пароль
    cy.get('#mailForgot').type('love@dogs.ru');       //ввод невалидного логина
    cy.get('#restoreEmailButton').click();            //клик по кнопке забыли пароль    
    cy.get('#messageHeader').should('be.visible');    //видно уведомление
    cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');  //валидация текста уведомления
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');   //проверка видимости крестика
})
it('негативный кейс авторизации.неверныйт пароль', function () {
    cy.visit('https://login.qa.studio');             //Вход на сайт
    cy.get('#mail').type('german@dolnikov.ru');      //ввод  валидного логина 
    cy.get('#pass').type('iLoveqastudio2');          //ввод не валидного пароля
    cy.get('#loginButton').click();                  //клик по кнопке входа
    cy.get('#messageHeader').should('be.visible');   //видно уведомление
    cy.get('#messageHeader').contains('Такого логина или пароля нет');  //валидация текста уведомления
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');      //проверка видимости крестика
})
it('негативный кейс авторизации.неверныйт логин', function () {
    cy.visit('https://login.qa.studio');             //Вход на сайт
    cy.get('#mail').type('love@dogs.ru');            //ввод  невалидного логина 
    cy.get('#pass').type('iLoveqastudio1');          //ввод валидного пароля
    cy.get('#loginButton').click();                  //клик по кнопке входа
    cy.get('#messageHeader').should('be.visible');   //видно уведомление
    cy.get('#messageHeader').contains('Такого логина или пароля нет');  //валидация текста уведомления
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');      //проверка видимости крестика
})
it('негативный кейс валидации логина', function () {
    cy.visit('https://login.qa.studio');             //Вход на сайт
    cy.get('#mail').type('germandolnikov.ru');            //ввод  невалидного логина без @
    cy.get('#pass').type('iLoveqastudio1');          //ввод валидного пароля
    cy.get('#loginButton').click();                  //клик по кнопке входа
    cy.get('#messageHeader').should('be.visible');   //видно уведомление
    cy.get('#messageHeader').contains('Нужно исправить проблему валидации');  //валидация текста уведомления
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');      //проверка видимости крестика

})
it('негативный кейс валидации логина. строчные буквы логина', function () {
    cy.visit('https://login.qa.studio');             //Вход на сайт
    cy.get('#mail').type('GerMan@Dolnikov.ru');       //ввод логина со строчными буквами
    cy.get('#pass').type('iLoveqastudio1');          //ввод валидного пароля
    cy.get('#loginButton').click();                  //клик по кнопке входа
    cy.get('#messageHeader').should('be.visible');   //видно уведомление
    cy.get('#messageHeader').contains('Авторизация прошла успешно');  //валидация текста уведомления
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');      //проверка видимости крестика
})
})
