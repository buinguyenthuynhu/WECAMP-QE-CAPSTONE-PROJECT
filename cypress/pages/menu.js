export const menuProfile = {
    DROPDOWN_MENU: ".dropdown",
    DROPDOWN_CONTENT: ".dropdown-content",
    TXT_NAME: "#name",
    TXT_EMAIL: "#email",
    TXT_PW: "#password",
    TXT_CONFIRMPW: "#confirmPassword",
    BTO_UPDATE: ".primary",
    TXT_SUCCESSNOTI: ".alert-success",
    TXT_WARN: ".alert-danger",
    GREEN: "rgb(32, 160, 32)",
    RED: "rgb(160, 32, 32)",
   

    isMenuVisible(Name) {
        cy.get(this.DROPDOWN_MENU).trigger('mouseover');
        cy.get(this.DROPDOWN_MENU).should('be.visible');
        return this;
    },

    isNavigateUserProfile() {
        cy.get(this.DROPDOWN_CONTENT).contains('Profile').click({force: true}); 
        cy.url().should('include', '/profile');
        return this;
    },

    isProfileTitleCorrect() {
        cy.get('h1').should('have.text','User Profile')
        return this
    },

    isUpdateName(Name){
        cy.get(this.TXT_NAME).clear()
        cy.get(this.TXT_NAME).type(Name, { force: true })
        return this
    },

    isUpdateEmail(Email){
        cy.get(this.TXT_EMAIL).clear()
        cy.get(this.TXT_EMAIL).type(Email)
        return this
    },

    isUpdatePassword(Password){
        cy.get(this.TXT_PW).clear()
        cy.get(this.TXT_PW).type(Password)
        return this
    },

    isUpdatConfirmPassword(confirmPassword){
        cy.get(this.TXT_CONFIRMPW).clear()
        cy.get(this.TXT_CONFIRMPW).type(confirmPassword)
        return this
    },

    clickUpdate() {
        cy.get(this.BTO_UPDATE).click()
        return this;
    },

    hasSuccessUpdate() {
        cy.get(this.TXT_SUCCESSNOTI)
          .should('exist') 
          .and('be.visible') 
          .and('have.css', 'color', this.GREEN)
          .contains('Profile updated successfully'); 
        return this;
    },

    isUpdateButtonDisable() {
        cy.get( this.BTO_UPDATE).should('be.disabled')
        return this;
    },

    hasSuccessUpdate() {
        cy.get(this.TXT_SUCCESSNOTI)
          .should('exist') 
          .and('be.visible') 
          .and('have.css', 'color', this.GREEN)
          .contains('Profile updated successfully'); 
        return this;
    },

    hasRedWarning() {
        cy.get(this.TXT_WARN)
          .should('exist') 
          .and('be.visible') 
          .and('have.css', 'color', this.RED)
        return this;
    },

    hasBrowserPopup() {
        cy.on('window:alert', (message) => {
            expect(message).to.equal('Password and confirm password do not match')})
        return this;
    },

    isNavigateOrder() {
        cy.get(this.DROPDOWN_CONTENT).contains('Order').click({force: true}); 
        cy.url().should('include', '/orderhistory');
        return this;
    },

    isSignOut() {
        cy.get(this.DROPDOWN_CONTENT).contains('Sign Out').click({force: true}); 
        cy.url().should('include', '/#signout');
        return this;
    },
}