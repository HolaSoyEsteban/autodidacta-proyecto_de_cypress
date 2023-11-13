describe('test suite', () => {
    it('test case', () => {
        cy.visit('https://the-internet.herokuapp.com/checkboxes')     // Accede a la dirección del sitio indicado.
        cy.get('input[type="checkbox"]').eq(1).should('be.checked')   // Usa el metodo eq para  seleccionar la ubicacion del elemento, luego el metodo should, con argumento 'be.checked' para chequear que el elemento este seleccionado
        
        cy.wait(5000)
    })
})