describe('e2e example', () => {
    it('.should() - assert that <title> is correct', () => {
        cy.visit('http://localhost:8081/')
        cy.title().should('include', 'Mikalai Ausiannikau')
    })

    it('.should() - assert that <title> is correct', () => {
        cy.visit('http://localhost:8081/')
        cy.get('.search__search-controls .switch__param_1')
            .click()
            .should('have.class', 'switch__param--active')
    })

});