/// <reference types="cypress" />
describe("Testing: sign in as Admin and create news", () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/');
    cy.wait(3000);
    cy.contains('Se connecter');
    cy.get('button.btn-login').click();
    cy.get('input[id=email-login]').type('elise.lefebvre@hotmail.com');
    cy.wait(3000);
    cy.get('input[id=password-login]').type('azerty01');
    cy.wait(3000);
    cy.get('button[id=login]').click();
    cy.wait(3000);
    cy.contains('Se déconnecter');
    cy.wait(4000);
  });

  describe('Flow sign in ADMIN', () => {
    it('should sign in as ADMIN', () => {
      // execute the beforeEahch
    });
  });

  describe('Flow create news', () => {
    it('should create news without media', () => {//the beforeEach also will be execute
      cy.contains('Tableau de bord');
      cy.get('a[id=dashboard-navbar]').click();
      cy.wait(3000);
      cy.url().should('include', 'dashboard');
      cy.get('button[data-modal-target=crud-modal]').click();
      cy.wait(3000);
      cy.get('input[id=title]').type('Test cypress pour le Jury');
      cy.wait(3000);
      cy.get('textarea[id=content]').type('Le test fonctionne !');
      cy.wait(3000);
      cy.get('button[id="submit-news"]').click();
    });
  });
});