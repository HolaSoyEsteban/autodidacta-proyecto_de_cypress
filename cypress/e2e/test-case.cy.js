describe('test suite', () => {
    it('test case', () => {
        cy.visit('https://www.saucedemo.com/')     // Accede a la dirección del sitio indicado.
        cy.get('#user-name').should('exist')       // Usa em metodo should, con el argumento exist, verifica que el elemento exista en el DOM 
        cy.wait(5000)
    })
})