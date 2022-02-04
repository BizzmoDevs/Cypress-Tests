describe("INIT TEST", ()=>{

    it ("1.Get URL and check if it's correct", ()=> {
        cy.visit("").url().should("eq","http://localhost:3000/");
    });

});