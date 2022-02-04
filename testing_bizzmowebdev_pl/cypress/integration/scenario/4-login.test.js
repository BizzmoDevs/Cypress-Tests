require('cypress-xpath');

describe('3. Check Sign Up Button and Form', () => {

    before ('Get URL', ()=> {
        cy.visit('').url().should('eq','http://testing.bizzmowebdev.pl/');
    });

    it ('Click Log In Button, Check if Form Opened and Close Popup', ()=> {
        cy.get('a').contains("LOG IN").click();
        cy.get('.cont').should('be.visible');
        cy.xpath('/html[1]/body[1]/div[3]/div[1]/form[1]/div[1]').click();
    });

    it ('Click Log In Button and Fill up Form', ()=> {
        cy.get('a').contains("LOG IN").click();
        cy.get('input[name=loginout]').click().type('John Doe');
        cy.get('input[name=passwordout]').click().type('1234');
        cy.get('button[name=submitlogin]').click();
    });

    // it ('Find Get Back Button Click and Check if Returned To Main Page', ()=> {
    //     cy.get('a').contains("BACK TO MAIN PAGE", {timeout: 3000}).click();
    //     cy.url().should('eq','http://testing.bizzmowebdev.pl/');
    // });

});