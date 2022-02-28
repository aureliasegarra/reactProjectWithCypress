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







});