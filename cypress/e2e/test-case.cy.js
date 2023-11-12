describe('test case', () => {
    it('test case', () => {
        cy.visit('https://www.saucedemo.com/') // Accede a la dirección del sitio indicado
        cy.get('#user-name').as('username')    // Se le asigna un alias al Selector

        cy.get('@username').type('hello')      // Se usa el alias y se le asigna un valor
        cy.wait(10000)                         // Tiempo de espera para lograr ver la acción
    })
})