import * as Utils from "../support/utils";
import * as LoginComponent from "../components/login_component";
import * as CourseComponent from "../components/course_component";


describe('Testing courses functionalities', () => {

    context('Testing functionalities as an admin user', () => {
        beforeEach(() => {
            Utils.loginWithAPI('admin', 'admin');
            Utils.visitAPage('courses'); 
        })

        it('Admin user should see delete button', () => {
            CourseComponent.coursesButton().click();
            Utils.checkURL().should('contain', '/courses');
            CourseComponent.deleteButton().should('be.visible');
        })
    })
})