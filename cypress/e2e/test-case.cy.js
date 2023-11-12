describe('test suite', () => {
    it('test case', () => {
        cy.visit('https://www.saucedemo.com/')     // Accede a la dirección del sitio indicado.
        cy.get('#user-name').type('Navidad')       // Usa el metodo type, para insertar texto en el elemento
        cy.get('#user-name').should('contain.value', 'idad')    // Usa el metodo should, con el argumento contain, para verificar que contenga el valor solicitado
        cy.wait(5000)
    })
})