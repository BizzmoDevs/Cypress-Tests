describe('1. Open Page', () => {
    it ('Get URL', ()=> {
        cy.visit('').url().should('eq','http://testing.bizzmowebdev.pl/');
    });
});