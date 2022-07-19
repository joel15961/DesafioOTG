/// <reference path="./e2e.js" />
// -- This is a parent command --
const commands_test = commands_teste_aleatorio()
var conteudo = []
let id
Cypress.Commands.add("login", () => {
	cy.visit("https://www.advantageonlineshopping.com",{setTimeout: 80000});
	cy.get('#menuUser').click()
	cy.get('[a-hint="Username"] > .inputContainer > .ng-pristine').type('teste15961')
	cy.get('[a-hint="Password"] > .inputContainer > .ng-pristine').type('Teste123')
	cy.wait(800)
	cy.get('#sign_in_btnundefined').click()
	cy.get('#menuUserLink').contains('teste15961')

});

Cypress.Commands.add("customer", () => {

	cy.request({
		method: 'POST',
		url: '/customer',
		form: false,
		body: {
			birthDate: "1997-05-20",
			lastName: "Alem",
			name: "Joel" + commands_test
		},

	})

	cy.request({
		method: 'GET',
		url: '/customer',
		form: false,

	}).then((resp) => {
		let teste = resp.body
		expect(resp.status).to.eq(200)
		cy.writeFile('cypress/fixtures/captura.json', JSON.stringify(resp.body[0]))
		teste.forEach(element => {
			conteudo.push(element.id)
		});
	})




});

Cypress.Commands.add("customerDeletar", () => {

	cy.readFile('cypress/fixtures/captura.json').then((num) => {
		id = num.id
		cy.request({
			method: 'DELETE',
			url: '/customer/' + id,
			form: false,
			body: {
			},

		}).then((resp) => {
			expect(resp.status).to.eq(204)
		})
	})




});

function commands_teste_aleatorio() {
	var text = "";
	var possible = "0123456789";

	for (var i = 0; i < 3; i++)
		text += possible.charAt(Math.floor(Math.random() * possible.length));

	return text;
}
