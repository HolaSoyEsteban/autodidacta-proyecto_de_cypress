describe('test suite', () => {
    it('test case', () => {
        cy.visit('https://www.saucedemo.com/')              // Accede a la dirección del sitio indicado.
        cy.get('.login_wrapper-inner').find('#user-name').should('exist')   // Usa metodo find para buscar DENTRO del scope indicado, si está por fuera, no lo encontrará
    })
})