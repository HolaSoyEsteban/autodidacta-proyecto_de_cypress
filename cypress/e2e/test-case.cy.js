describe('test suite', () => {
    it('test case', () => {
        cy.visit('https://www.saucedemo.com/')       // Accede a la dirección del sitio indicado.
        cy.get('.form_input').first().type('Hola')   // Usa metodo first para seleccionar el primer elemento de varios con la misma class
        cy.wait(5000)
    })
})