describe('Testing signup process for creating a new account', () => {
  it('Should create a new user with role of supporter in the DB', () => {
    cy.visit('http://localhost:5173/')
    cy.get('button').contains('Créer un compte').click()
  })
})