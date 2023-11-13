describe('test suite', () => {
    it('test case', () => {
        cy.visit('https://www.saucedemo.com/')     // Accede a la dirección del sitio indicado.
        cy.get('#user-name').type('standard_user')   // Usa el metodo type, para insertar texto en el elemento
        cy.get('#password').type('secret_sauce')     // Usa el metodo type, para insertar texto en el elemento
        cy.get('#login-button').click()              // Usa el metodo clic para clickear en el elemento
        cy.get('#react-burger-menu-btn').click()    // Usa el metodo clic para clickear en el elemento
        cy.get('.bm-menu-wrap').should('be.visible') // Usa el metodo should, con argumento 'be.visible' para ver si se muestra el elemento
        cy.wait(5000)
    })
})