describe('test suite', () => {
    it('test case', () => {
        cy.visit('https://the-internet.herokuapp.com/checkboxes')     // Accede a la dirección del sitio indicado.
        cy.get('input[type="checkbox"]').eq(0).should('not.be.checked')   // Usa el metodo eq para  seleccionar la ubicacion del elemento, luego el metodo should, con argumento (notese el 'not' que fue agregado) 'not.be.checked' para chequear que el elemento NO este seleccionado
        
        cy.wait(5000)
    })
})