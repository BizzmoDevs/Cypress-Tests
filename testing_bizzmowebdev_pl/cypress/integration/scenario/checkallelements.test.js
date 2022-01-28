describe('2. Find All Elements', () => {

    it ('Get URL', ()=> {
        cy.visit('http://testing.bizzmowebdev.pl/');
    });

    it ('Find Sign Up Button', ()=> {
        cy.get('a.signup').contains(name="signup");
    });

});