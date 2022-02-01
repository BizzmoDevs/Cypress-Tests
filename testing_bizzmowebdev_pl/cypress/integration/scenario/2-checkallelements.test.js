describe('2. Find All Elements', () => {

    before ('Get URL', ()=> {
        cy.visit('');
    });

    it ('Find Sign Up Button', ()=> {
        cy.get('a').contains("SIGN UP").should("be.visible");
    });

    it ('Find Log In Button', ()=> {
        cy.get('a').contains("LOG IN").should("be.visible");
    });

    it ('Find Calculator', ()=> {
        cy.get('.calculator-grid').should("be.visible");
    });

});