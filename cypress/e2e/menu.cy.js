import { signinPage } from '../pages/signIn'
import { confirmSignin } from '../pages/signIn';
import { menuProfile } from '../pages/menu'
import { deleteCart } from '../pages/cart';


describe('Profile access successfully', () => {
  beforeEach(() => {
    cy.visit('/signin');
    cy.fixture('signin.json').as('signin');
  });

  it('M1 - Verify that the profile menu link or button is visible and clickable', () => {

    cy.get('@signin').then((signin) => {
      signinPage
        .inputEmail(signin.email)
        .inputPassword(signin.password)
        .clickLogin();
    
    confirmSignin.isNameCorrect()
    
    menuProfile.isMenuVisible()

    })
  })
})

describe('Navigate to User Profile', () => {
    beforeEach(() => {
      cy.visit('/signin');
      cy.fixture('signin.json').as('signin');
    });
  
    it('M2 - Verify user can click Profile on menu and navigate to User profile page', () => {
  
      cy.get('@signin').then((signin) => {
        signinPage
          .inputEmail(signin.email)
          .inputPassword(signin.password)
          .clickLogin();
      
        menuProfile.isNavigateUserProfile()
  
      })
    })
    it('M3 - Verify page title is spelled correctly', () => {
  
        cy.get('@signin').then((signin) => {
          signinPage
            .inputEmail(signin.email)
            .inputPassword(signin.password)
            .clickLogin();
        
          menuProfile
            .isNavigateUserProfile()
            .isProfileTitleCorrect()
    
        })
      })
  })

  describe('Edit Profile successfully', () => {
    beforeEach(() => {
      cy.visit('/signin');
      cy.fixture('signin.json').as('signin');
      cy.fixture('updateProfile.json').as('update');
    });
  
    it('M4 - Verify user can edit Name, Email, Password using valid format ', () => {
  
      cy.get('@signin').then((signin) => {
        signinPage
          .inputEmail(signin.email)
          .inputPassword(signin.password)
          .clickLogin();
      
        cy.get('@update').then((update) => {
      
            menuProfile
            .isNavigateUserProfile()
            .isUpdateName(update.Name)
            .isUpdateEmail(update.Email)
            .isUpdatePassword(update.Password)
            .isUpdatConfirmPassword(update.confirmPassword)
            .clickUpdate()
            .hasSuccessUpdate(update.confirmPassword)
           
        })
      })
    })
    it('M5 - Verify user can not update if the new name overlaps with the old name ', () => {
  
      cy.get('@update').then((update) => {
        signinPage
          .inputEmail(update.Email)
          .inputPassword(update.Password)
          .clickLogin();
      
          menuProfile
          .isNavigateUserProfile()
          .isUpdateName(update.Name)
          .clickUpdate()
          .hasSuccessUpdate()
      })
    })
  })

  describe('Edit Profile unsuccessfully', () => {
    beforeEach(() => {
      cy.visit('/signin');
      cy.fixture('signin.json').as('signin');
      cy.fixture('updateProfile.json').as('update');
    });
  
    it('M6 - Verify user can not update without changing any fields', () => {
  
      cy.get('@update').then((update) => {
        signinPage
          .inputEmail(update.Email)
          .inputPassword(update.Password)
          .clickLogin();
      
          menuProfile
          .isNavigateUserProfile()
          .clickUpdate()
          .isUpdateButtonDisable()
      })
    })

    it('M7 - Verify user can not update if the new email overlaps with the existed email in database  ', () => {
  
      cy.get('@update').then((update) => {
        signinPage
          .inputEmail(update.Email)
          .inputPassword(update.Password)
          .clickLogin();
      
          menuProfile
          .isNavigateUserProfile()
          .isUpdateEmail(update.EmailM7)
          .clickUpdate()
          .hasRedWarning()
      })
    })

    it('M8 - Verify user can not update if the Confirm Password is empty', () => {
  
      cy.get('@update').then((update) => {
        signinPage
          .inputEmail(update.Email)
          .inputPassword(update.Password)
          .clickLogin();
      
          menuProfile
          .isNavigateUserProfile()
          .isUpdatePassword(update.PasswordM8)
          .clickUpdate()
          .hasBrowserPopup()
      })
    })
    it('M9 - Verify user can not update if the Confirm Password is wrong', () => {
  
      cy.get('@update').then((update) => {
        signinPage
          .inputEmail(update.Email)
          .inputPassword(update.Password)
          .clickLogin();
      
          menuProfile
          .isNavigateUserProfile()
          .isUpdatePassword(update.PasswordM8)
          .isUpdatConfirmPassword(update.confirmPassword)
          .clickUpdate()
          .hasBrowserPopup()
      })
    })
  })

  describe('Navigate to Order', () => {
    beforeEach(() => {
      cy.visit('/signin');
      cy.fixture('updateProfile.json').as('update');
    });
  
    it('M10 - Verify user can click "Order" on menu and navigate to History order page', () => {
  
      cy.get('@update').then((update) => {
        signinPage
          .inputEmail(update.Email)
          .inputPassword(update.Password)
          .clickLogin();
      
        menuProfile.isNavigateOrder()
  
      })
    })
    it('M10 - Verify user can click "Order" on menu and navigate to History order page', () => {
  
      cy.get('@update').then((update) => {
        signinPage
          .inputEmail(update.Email)
          .inputPassword(update.Password)
          .clickLogin();
      
        menuProfile.isNavigateOrder()
  
      })
    })
    it('M11 - Verify user can click "Sign Out" on menu  and sign out of account', () => {
  
      cy.get('@update').then((update) => {
        signinPage
          .inputEmail(update.Email)
          .inputPassword(update.Password)
          .clickLogin();
      
        menuProfile.isSignOut()
  
      })
    })
  })