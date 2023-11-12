describe('test suite', () => {
    it('test case', () => {
        cy.visit('https://www.saucedemo.com/')       // Accede a la dirección del sitio indicado.
        cy.get('.form_input').eq(1).type('Algo')   // Usa metodo eq para seleccionar (en objetos que repiten su selector) la posicion (como un array, su indice) dentro del scope
        cy.wait(5000)
    })
})