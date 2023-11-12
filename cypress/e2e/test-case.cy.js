describe('test suite', () => {
    it('test case', () => {
        cy.visit('https://www.saucedemo.com/')              // Accede a la dirección del sitio indicado.
        cy.contains('div', 'Swag Labs').then(title => {     // Busca usando texto (al no poder usar un Selector CSS)
                                                            // lo que encuentra lo trabaja en 'title'
            
            cy.log(title.attr('class'))                     // Accede al atributo 'class' de 'title' y muestra su valor
        })
        cy.wait(5000)                                       // Tiempo de espera
    })
})