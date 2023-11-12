describe('test suite', () => {
    it('test case', () => {
        cy.visit('https://www.saucedemo.com/')     // Accede a la dirección del sitio indicado.
        cy.get('#user-name').type('Hola')    // Usa em metodo type, para introducir texto en ese selector
        cy.get('#user-name').should('have.value', 'Hola') // Comprueba que ese selector tenga como valor , 'Hola'
        cy.wait(5000)
    })
})