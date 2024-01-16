import { deleteCart } from '../pages/cart'
import { signinPage } from '../pages/signIn'

describe('Cart Page', () => {
  it('Successfully loads', () => {
    cy.visit('/cart') 
  })
})

describe('Delete button is seen', () => {
  beforeEach(() => {
    cy.visit('/signin');
    cy.fixture('signin.json').as('signin');
  });

  it('DC1 - Verify whether the delete button is seen on the Cart page', () => {

    cy.get('@signin').then((signin) => {
      signinPage
        .inputEmail(signin.email)
        .inputPassword(signin.password)
        .clickLogin();
    
    deleteCart.navigateToCartPage() 

    })
  })
})

describe('Delete cart sucessfully', () => {
    beforeEach(() => {
      cy.visit('/signin');
      cy.fixture('signin.json').as('signin');
    });
    it('DC2 - Verify the system able to delete when click Delete button', () => {

        cy.get('@signin').then((signin) => {
          signinPage
            .inputEmail(signin.email)
            .inputPassword(signin.password)
            .clickLogin();
        
        deleteCart
            .chooseOnProduct()
            .addOnProduct()
            .deleteProduct()
    
        })
  
    })
    it('DC5 - Verify the "Go shoping" is working', () => {

        cy.get('@signin').then((signin) => {
          signinPage
            .inputEmail(signin.email)
            .inputPassword(signin.password)
            .clickLogin();
        
            deleteCart
            .chooseOnProduct()
            .addOnProduct()
            .deleteProduct()
            .navigateToHomePage()
        
        })
    })
  //   it.only('C5 - Verify user modify the number of item in Product page', () => {

  //     cy.get('@signin').then((signin) => {
  //       signinPage
  //         .inputEmail(signin.email)
  //         .inputPassword(signin.password)
  //         .clickLogin();
      
  //     deleteCart
  //         .chooseOnProduct()
  //         .isSelectExist()
  //         .choose2ItemsInProoduct()
  //         .addOnProduct()
  //         .is2itemsinCartPage()
  
  //     })

  // })
})