require('cypress-xpath');

describe('5. Check Sign Up Button and Form', () => {

    before ('Get URL', ()=> {
        cy.visit('').url().should('eq','http://testing.bizzmowebdev.pl/');
    });

    it ('Check Calculator Addition Function', ()=> {
        cy.get('.calculator-grid').should("be.visible");
        //Click '5' twice
        cy.xpath('/html[1]/body[1]/div[1]/div[1]/button[9]').click();
        cy.xpath('/html[1]/body[1]/div[1]/div[1]/button[9]').click();
        //Click '+'
        cy.xpath('/html[1]/body[1]/div[1]/div[1]/button[11]').click();
        //Click '6'
        cy.xpath('/html[1]/body[1]/div[1]/div[1]/button[10]').click();
        //Click '='
        cy.xpath('/html[1]/body[1]/div[1]/div[1]/button[18]').click();
        //Verify result - expected 61
        cy.xpath('/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]').should('contain.text','61');
    });

});