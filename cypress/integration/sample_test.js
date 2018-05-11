describe('Kitchen Sink', () => {
    it('.should() - assert that <title> is correct', () => {
        cy.visit('http://localhost:8081/')
        cy.title().should('include', 'Mikalai Ausiannikau')

    })
});