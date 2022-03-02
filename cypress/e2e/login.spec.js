/// <reference types="Cypress" />

import * as LoginComponent from "../components/login_component";
import * as HeaderComponent from "../components/header_component";
import * as CourseComponent from "../components/course_component";
import * as Utils from "../support/utils";

describe("Testing all the functionnalities", () => {
  beforeEach(() => {
    Utils.visitAPage('login');
  });

  it('Testing login with normal email and password', () => {
    LoginComponent.performLogin('user', 'user');
    HeaderComponent.signoutButton().should('be.visible');
  });

  /* ==== Test Created with Cypress Studio ==== */
  it('Should login correctly as an admin user', function() {
    /* ==== Generated with Cypress Studio ==== */
    LoginComponent.performLogin('admin', 'admin');
    LoginComponent.loginButton().click();
    HeaderComponent.signoutButton().should('be.visible');
    CourseComponent.coursesButton().click();
    Utils.checkURL().should('contain', '/courses');
    CourseComponent.deleteButton().should('be.visible');
    /* ==== End Cypress Studio ==== */
  });
});