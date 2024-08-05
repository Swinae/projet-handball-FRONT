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
  })
  
  describe('Flow sign in ADMIN', () => {
    it('should sign in as ADMIN', () => {
      //execcute beforeeach
    });
  });

  describe("flow sign in ADMIN and Create news without media", () => {
    it("should create news without media", () => {//execcute beforeeach
      cy.contains('Tableau de bord');
      cy.get('a[id=dashboard-navbar]').click();
      cy.wait(2000);
      cy.url().should('include', 'dashboard');
      cy.get('button[data-modal-target=crud-modal]').click();
      cy.wait(2000);
      cy.get('input[id=title]').type('Test Cypress');
      cy.wait(2000);
      cy.get('textarea[id=content]').type(`J'espère que vous appréciez la présentation !`);
      cy.wait(1000);
      cy.get('button[id=submit-news]').click();
      cy.wait(2000);
      cy.contains('Test Cypress');
      cy.contains('ok').click();
      cy.wait(2000);
      cy.get('.cy-navlink-actualites').click();
      cy.contains('Test Cypress');
    })
  })
});