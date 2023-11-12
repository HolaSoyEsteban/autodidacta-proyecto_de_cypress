describe('test suite', () => {
    it('test case', () => {
        cy.visit('https://www.saucedemo.com/')       // Accede a la dirección del sitio indicado.
        cy.get('#user-name').closest('#login_button_container').then(parent => { // Usa el metodo closest, para acceder al padre
            cy.log(parent.attr('class'))
        })
        cy.wait(5000)
    })
})