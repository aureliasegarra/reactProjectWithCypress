export const visitAPage = (path) => {
    cy.visit('/' + path);
}

export const checkURL = () => cy.url();

export const loginWithAPI = () => {
    cy.request({
        method: 'GET',
        url: '/user_token',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: 'Basic' + btoa(`${username}: ${password}`)
        }
    }).then(response => {
        localStorage.setItem('userToken', response.body.token);
        localStorage.setItem('userToken', response.body.username);
        localStorage.setItem('userToken', response.body.role);
    })
}