export const signinPage = {
    TXT_EMAIL: "#email",
    TXT_PASSWORD: "#password",
    BTO_SIGNIN: ".primary",
  
    inputEmail(email) {
      cy.get(this.TXT_EMAIL).type(email, { force: true });
      return this;
    },
  
    inputPassword(password) {
      cy.get(this.TXT_PASSWORD).type(password, { force: true });
      return this;
    },
  
    clickLogin() {
      cy.get(this.BTO_SIGNIN).click();
      return this;
    },
  };

export const confirmSignin = {
    TXT_VALUE: ".dropdown-content",
    TXT_WARN: ".alert-danger",
    TXT_ALERT: ".loading ",
    RED: "rgb(160, 32, 32)",
    LNK_RERIS: 'a[href="/register?redirect=/"]',

    isNameCorrect(Name) {
        cy.get(this.TXT_VALUE).should('exist');
        return this;
    },

    hasRedWarning() {
        cy.get(this.TXT_WARN)
          .should('exist') 
          .and('be.visible') 
          .and('have.css', 'color', this.RED)
          .contains('Invalid email or password'); 
        return this;
    },

    // hasAlert() {
    //   cy.get(this.TXT_ALERT)
    //       .should('exist') 
    //     return this;
    // },

    notNavigatetoHomepage() {
      cy.get(this.TXT_VALUE).should('not.exist')
    },

    navigateToRegisterPage() {
      cy.get(this.LNK_RERIS).click();
      cy.url().should('include', '/register?redirect=/');
      return this;
    },
    
}