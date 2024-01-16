import { deleteCart } from '../pages/cart'
import { signinPage } from '../pages/signIn'
import { confirmPayment } from '../pages/payment'

describe('Payment successful', () => {
    beforeEach(() => {
      cy.visit('/signin');
      cy.fixture('updateprofile.json').as('update');
      cy.fixture('payment.json').as('payment');
    });
    it('P1 - Verify user can pay using all valid information', () => {

        cy.get('@update').then((update) => {
        cy.get('@payment').then((payment) => {
          signinPage
            .inputEmail(update.Email)
            .inputPassword(update.Password)
            .clickLogin();
        
            deleteCart
            .chooseOnProduct()
            .addOnProduct()
        
            confirmPayment
            .proceedToCheckOut()
            .inputFullName(payment.fullname)
            .inputAddress(payment.address)
            .inputCity(payment.city)
            .inputZipcode(payment.zipcode)
            .inputCountry(payment.country)
            .clickContinue()
            .navigatedToPayment()
            .chooseStripeMethod()
            .clickContinue()
            .shippingName()
            .confirmPaymentMethod()
            .clickPlaceOrder()

        
        cy.origin('https://paypal.com', () => {
                cy.get('#password')
                    .type('myPassword')
            
                cy.get('#btnLogin')
                    .should('be.enabled')
                    .click()
            
                cy.get('[data-testid="submit-button-initial"]')
                    .should('be.enabled')
                    .click()
            })
        })
        })
  
    })
})