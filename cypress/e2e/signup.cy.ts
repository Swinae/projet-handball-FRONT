import { faker } from '@faker-js/faker';

const email = faker.internet.email()
const password = faker.helpers.fromRegExp(/[A-Z][a-z][0-9][#?!@$ %^&*-]{8,12}/
)

describe('Testing signup process for creating a new account', () => {
  it('Should create a new user with role of supporter in the DB', () => {
    cy.visit('http://localhost:5173/')
    cy.get('button').contains('Créer un compte').click()
    cy.get('[id="email-signup"]').type(email)
    cy.get('[id="password-signup"]').type(password)
    cy.get('[id="confirm-signup"]').type(password)
    cy.get('button').contains('Créer le compte').click()
  })
})