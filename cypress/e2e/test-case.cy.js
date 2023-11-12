describe('test suite', () => {
    it('test case', () => {
        cy.visit('https://www.saucedemo.com/')     // Accede a la dirección del sitio indicado.
        cy.get('.login_logo').should('contain.text', 'Labs')    // Usa em metodo should, con el argumento contain, para verificar que contenga el texto solicitado
        cy.wait(5000)
    })
})