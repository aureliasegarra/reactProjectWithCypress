import * as Utils from "../support/utils";
import * as LoginComponent from "../components/login_component";
import * as CourseComponent from "../components/course_component";


describe('Testing courses functionalities', () => {

    context('Testing functionalities as an admin user', () => {
        beforeEach(() => {
            //Utils.loginWithAPI('admin', 'admin');
            Utils.visitAPage('login');
            LoginComponent.performLogin('admin', 'admin');
            
        });

        it('Admin user should see delete button', () => {
            CourseComponent.coursesButton().click();
            Utils.checkURL().should('contain', '/courses');
            CourseComponent.deleteButton().should('be.visible');
        });

        it('Should be able to add a nex course correctly', () => {
            Utils.visitAPage('courses');
            CourseComponent.newCourseInput().type('Learn Vue');
            CourseComponent.newCourseButton().click();
            CourseComponent.deleteButton().should('have.length', 3);
        });

        it('Should be able to delete a task', () => {
            Utils.visitAPage('courses');
            CourseComponent.deleteButton().last().click();
            CourseComponent.deleteButton().should('have.length', 2);
        });
    })
})