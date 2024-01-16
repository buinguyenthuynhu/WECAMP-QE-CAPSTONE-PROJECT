export const updateProfile = {
    TXT_NAME: "#name",
    TXT_EMAIL: "#email",
    TXT_PW: "#password",
    TXT_CONFIRMPW: "#confirmPassword",
    BTO_UPDATE: ".primary",



    inputName(Name) {
        cy.get(this.Name).type(Name, { force: true });
    },

    inputEmail(email) {
        cy.get(this.Email).type(email);
    }
}



