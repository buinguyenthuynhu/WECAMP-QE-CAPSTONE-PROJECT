class mernregister {
    Name = "#name";
    Email= "#email";
    Password = "#password";
    confirmPassword = "#confirmPassword";
    Registerbtn = ".primary";
    Dropdown = ".dropdown-content";
    RED =  "rgb(160, 32, 32)";
    TXT_WARN = ".alert-danger";


    inputName(name) {
        cy.get(this.Name).type(name, { force: true });
    };

    inputEmail(email) {
        cy.get(this.Email).type(email);
    };

    inputPassword(password) {
        cy.get(this.Password).type(password);
    };

    inputConfirmPassword(confirm) {
        cy.get(this.confirmPassword).type(confirm);
    };

    clickRegister() 
    {
        cy.get(this.Registerbtn).click({ force: true });
    };

    SuccessfullyNavigatetoHomepage() {
        cy.get(this.Dropdown).should('exist')
    };
    NotSuccessfullyNavigatetoHomepage() {
        cy.get(this.Dropdown).should('not.exist')
    };
    hasRedWarning() {
        cy.get(this.TXT_WARN)
          .should('exist') 
          .and('be.visible') 
          .and('have.css', 'color', this.RED)
          .contains('E11000 duplicate key error collection'); 
    };
    windowAlert(){
            cy.on("window:alert", (s) => {
                expect(s).to.contains('password and confirm password do not match');
                return true
    })}
    SignIn(){
        cy.get()
    }
}


export default mernregister

