import {testFunction} from "../../support/utils";

describe('3. Check Sign Up Button and Form', () => {

    before ('Get URL', ()=> {
        cy.visit('');
        testFunction('Test');
    });

    it ('Click Sign Up Button and Check if Form Opened', ()=> {
        cy.get('a').contains("SIGN UP").click();
        cy.get('.cont').should('be.visible');
    });

    it ('Fill up Sign In Form', ()=> {
        cy.get('.cont input:first').click().type('John Doe');
        cy.get('input[name=passwordin]').click().type('1234');
        cy.get('button[name=submitsignup]').click();
    });

    it ('Find Get Back Button Click and Check if Returned To Main Page', ()=> {
        cy.get('a').contains("BACK TO MAIN PAGE").click();
        cy.url().should('eq','http://testing.bizzmowebdev.pl/');
    });

});