import { confirmSignin, signinPage } from '../pages/signIn'

describe('Sign In Page', () => {
  it('Successfully loads', () => {
    cy.visit('/') 
  })
})

describe('Sign in successfully', () => {
  beforeEach(() => {
    cy.visit('/signin');
    cy.fixture('signin.json').as('signin');
    cy.fixture('register.json').as('data');
  });

  it('L1 - Login with valid email and valid password', () => {

    cy.get('@signin').then((signin) => {
      signinPage
        .inputEmail(signin.email)
        .inputPassword(signin.password)
        .clickLogin();

    cy.url().should('include', '/')

    cy.get('@data').then((data) => {
        confirmSignin.isNameCorrect(data.Name);
      
      })
    })
  })

  it('L7 - Clicking on the browser back button still take the User to sign in mode', () => {

    cy.get('@signin').then((signin) => {
      signinPage
        .inputEmail(signin.email)
        .inputPassword(signin.password)
        .clickLogin();

    cy.go('back')
    cy.url().should('include', '/')
    cy.get('@data').then((data) => {
        confirmSignin.isNameCorrect(data.Name);
      })
    })
  })

  it('L8 - Still signed in after actions: close the browser, and reopen the application', () => {

    cy.get('@signin').then((signin) => {
      signinPage
        .inputEmail(signin.email)
        .inputPassword(signin.password)
        .clickLogin();

      
    cy.window().then((win) => {
          // Save the session state to local storage
        win.sessionStorage.setItem('loggedIn', 'true');
    });
    
      // Close the browser (simulated action)
    cy.visit('about:blank'); 
        // Reopen the application
    cy.visit('/'); 
    
        // Check if the user is still logged in
    cy.window().then((win) => {
      const isLoggedIn = win.sessionStorage.getItem('loggedIn');
      expect(isLoggedIn).to.equal('true');
    });
    cy.get('@data').then((data) => {
        confirmSignin.isNameCorrect(data.Name);
      
      })
    })
  })
})

describe('Sign in unsuccessfully', () => {
  beforeEach(() => {
    cy.visit('/signin');
    cy.fixture('signin.json').as('signin');
    
  });

  it('L2 - Cannot login when enter valid email and invalid password', () => {

    cy.get('@signin').then((signin) => {
      signinPage
        .inputEmail(signin.email)
        .inputPassword(signin.passwordl2)
        .clickLogin();

        confirmSignin.hasRedWarning()
    })
  })

  it('L3 - Cannot login when enter valid email and empty password', () => {

    cy.get('@signin').then((signin) => {
      signinPage
        .inputEmail(signin.email)
        .clickLogin();

        confirmSignin.notNavigatetoHomepage()
    })
  })

  it('L4 - Cannot login when enter invalid email and valid password', () => {

    cy.get('@signin').then((signin) => {
      signinPage
        .inputEmail(signin.emaill4)
        .inputPassword(signin.password)
        .clickLogin();

        confirmSignin.hasRedWarning()
    })
  })

  it('L5 - Cannot login when enter empty email and valid password', () => {

    cy.get('@signin').then((signin) => {
      signinPage
        .inputPassword(signin.password)
        .clickLogin();

        confirmSignin.notNavigatetoHomepage()
    })
  })

  it('L6 - Cannot login when email and pasword field is empty', () => {

    cy.get('@signin').then((signin) => {
      signinPage.clickLogin();

      confirmSignin.notNavigatetoHomepage()
    })
  })
})

describe('Navigation to create an account page', () => {
  beforeEach(() => {
    cy.visit('/signin');
    cy.fixture('signin.json').as('signin');
    cy.fixture('register.json').as('data');
  });

  it('L9 - Redirected to the Create an account page when clicking on the Create an account link', () => {

      confirmSignin.navigateToRegisterPage()
    cy.get('h1').should('contain', 'Create An Account');
  })
})



