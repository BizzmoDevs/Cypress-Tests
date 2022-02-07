let name = "Knife";
let id = 4;
let endpoint = "http://localhost:3000/weapons";

describe("WEAPONS END POINT TEST", ()=>{

    it("1. Get all weapons", ()=>{
        cy.request({
            method:"GET",
            url: endpoint
        }).then((res)=>{
            expect(res.status).to.eq(200);
        })

    })

    it("2. Add new weapon", ()=>{
        cy.request({
            method:"POST",
            url: endpoint,
            body: {
                "name": name,
                "power": 13
            }
        })
    })

    it("3. Find weapon by name", ()=>{
        cy.request({
            method:"GET",
            url: endpoint+"?name="+name
        })
    })

    it("4. Delete weapon by id", ()=>{
        cy.request({
            method:"DELETE",
            url: endpoint+"/"+id
        })
    })

})