import * as Utils from '../support/utils';
import * as LoginComponent from '../components/login_component';
import * as CourseComponent from "../components/course_component";
import * as HeaderComponent from "../components/header_component";

describe('Test logout functionality', () => {
    it('Admin user should be able to logout correctly', () => {
        Utils.visitAPage('login');
        LoginComponent.performLogin('admin', 'admin');
        CourseComponent.coursesButton().click();
        Utils.visitAPage('courses');
        HeaderComponent.signoutButton().click();
        Utils.checkURL().should('contain', '/notloggedin');
        
    });

    it('Normal user should be able to logout correctly', () => {
        Utils.visitAPage('login');
        LoginComponent.performLogin('user', 'user');
        CourseComponent.coursesButton().click();
        Utils.visitAPage('courses');
        HeaderComponent.signoutButton().click();
        Utils.checkURL().should('contain', '/notloggedin');
    });
 })