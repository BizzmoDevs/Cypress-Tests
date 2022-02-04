import {testFunction} from "../../support/utils";
require('cypress-xpath');

describe('3. Check Sign Up Button and Form', () => {

    before ('Get URL', ()=> {
        cy.visit('').url().should('eq','http://testing.bizzmowebdev.pl/');
        testFunction('Test');
    });

    it ('Click Sign Up Button, Check if Form Opened and Close Popup', ()=> {
        cy.get('a').contains("SIGN UP").click();
        cy.get('.cont').should('be.visible');
        cy.xpath('/html[1]/body[1]/div[2]/div[1]/form[1]/div[1]').click();
    });

    it ('Click Sign Up Button and Fill up Form', ()=> {
        cy.get('a').contains("SIGN UP").click();
        cy.get('.cont input:first').click().type('John Doe');
        cy.get('input[name=passwordin]').click().type('1234');
        cy.get('button[name=submitsignup]').click();
    });

    it ('Find Get Back Button Click and Check if Returned To Main Page', ()=> {
        cy.get('a').contains("BACK TO MAIN PAGE").click();
        cy.url().should('eq','http://testing.bizzmowebdev.pl/');
    });

});