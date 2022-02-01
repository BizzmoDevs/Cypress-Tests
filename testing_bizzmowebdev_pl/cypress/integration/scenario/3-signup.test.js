describe('3. Check Sign Up Button and Form', () => {

    before ('Get URL', ()=> {
        cy.visit('');
    });

    it ('Click Sign Up Button and Check if Form Opened', ()=> {
        cy.get('a').contains("SIGN UP").click();
        cy.get('.cont').should('be.visible');
    });

    it ('Fill up Form', ()=> {
        cy.get('.cont input:first').click().type('John Doe');
        cy.get('input[name=passwordin]').click().type('1234');
        cy.get('button[name=submitsignup]').click();
    });


});