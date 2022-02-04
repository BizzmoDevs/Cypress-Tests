let name = "John";
let id = 4;

describe("CHARACTERS END POINT TEST", ()=>{

    it("1. Get all characters", ()=>{
        cy.request({
            method:"GET",
            url: "http://localhost:3000/characters"
        })

    })

    it("2. Add new character", ()=>{
        cy.request({
            method:"POST",
            url: "http://localhost:3000/characters",
            body: {
                "name": "John",
                "surname": "Doe",
                "profile": "Noob"
            }
        })
    })

    it("3. Find character by name", ()=>{
        cy.request({
            method:"GET",
            url: "http://localhost:3000/characters?name="+name
        })
    })

    it("4. Delete character by id", ()=>{
        cy.request({
            method:"DELETE",
            url: "http://localhost:3000/characters/"+id
        })
    })

})