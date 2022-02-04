require('cypress-xpath');

describe('2. Find All Elements', () => {

    before ('Get URL', ()=> {
        cy.visit('').url().should('eq','http://testing.bizzmowebdev.pl/');
    });

    it ('Find Sign Up Button', ()=> {
        cy.get('a').contains("SIGN UP").should("be.visible");
    });

    it ('Find Log In Button', ()=> {
        cy.get('a').contains("LOG IN").should("be.visible");
    });

    it ('Find Clock', ()=> {
        cy.xpath('/html[1]/body[1]/div[1]/section[2]/div[1]').should("be.visible");
    });

    it ('Find Calculator', ()=> {
        cy.get('.calculator-grid').should("be.visible");
    });

});