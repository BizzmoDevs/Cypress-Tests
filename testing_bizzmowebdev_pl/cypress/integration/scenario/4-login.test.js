describe('3. Check Sign Up Button and Form', () => {

    before ('Get URL', ()=> {
        cy.visit('');
    });

    it ('Click Log In Button and Check if Form Opened', ()=> {
        cy.get('a').contains("LOG IN").click();
        cy.get('.cont').should('be.visible');
    });

    it ('Fill up Log In Form', ()=> {
        cy.get('input[name=loginout]').click().type('John Doe');
        cy.get('input[name=passwordout]').click().type('1234');
        cy.get('button[name=submitlogin]').click();
    });

    it ('Find Get Back Button Click and Check if Returned To Main Page', ()=> {
        cy.get('a').contains("BACK TO MAIN PAGE").click();
        cy.url().should('eq','http://testing.bizzmowebdev.pl/');
    });

});