const el = require("./elements").ELEMENTS;

class conta {
	criar_conta() {

        cy.visit('https://www.advantageonlineshopping.com')
        cy.get('#menuUser').click()
        cy.get('.create-new-account').click()

        cy.get(el.username).type('teste15961')
        cy.get(el.email).type(chance.email())
        cy.get(el.password).type('Teste123')
        cy.get(el.confirmPassword).type('Teste123')

        cy.get(el.firstName).type(chance.first())
        cy.get(el.lastName).type(chance.last())
        cy.get(el.phoneNumber).type('94132381')

        cy.get(el.city).type(chance.city())
        cy.get(el.address).type(chance.address())
        cy.get(el.state).type(chance.state())
        cy.get(el.postalCode).type(chance.zip())
        cy.get(el.iAgree).check()
        cy.get('#register_btnundefined').click()
        
    


        
	
	}

        excluir_conta(){

                
                cy.get('#menuUserLink').click()
                cy.get('#loginMiniTitle > [translate="My_account"]').click()
                cy.get('.deleteMainBtnContainer').click()
                cy.get('.deleteRed').click()
                
        }
}

export default new conta ();