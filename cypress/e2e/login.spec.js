/// <reference types="Cypress" />

describe("Testing all the functionnalities", () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('Testing login with normal email and password', () => {
    cy.get('[data-cy= "email-field"]').type('user');
    cy.get('[data-cy= "password-field"]').type('user');
    cy.get('[data-cy="login-button"]').click();
  });

  /* ==== Test Created with Cypress Studio ==== */
  it('Should login correctly as an admin user', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.get('[data-cy="email-field"]').clear();
    cy.get('[data-cy="email-field"]').type('admin');
    cy.get('[data-cy="password-field"]').clear();
    cy.get('[data-cy="password-field"]').type('admin');
    cy.get('[data-cy="login-button"]').click();
    /* ==== End Cypress Studio ==== */
  });
});