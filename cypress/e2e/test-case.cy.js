describe('test suite', () => {
    it('test case', () => {
        cy.visit('https://www.saucedemo.com/')     // Accede a la dirección del sitio indicado.
        cy.get('.login_logo').should('have.text', 'Swag Labs')    // Usa em metodo should, con el argumento have, verifica si su texto corresponde al indicado por parametro
        cy.wait(5000)
    })
})