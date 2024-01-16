export const confirmPayment = {
    BTN_PROCEED: ".primary",
    BTN_CONTINUE: ".primary",
    BTN_PLACEORDER: ".primary",
    TXT_FULLNAME: "#fullName",
    TXT_ADDR: "#address",
    TXT_CITY: "#city",
    TXT_ZIPCODE: "#zipcode",
    TXT_COUNTRY: "#country",
    H1_HEADING: "h1",
    DROPDOWN_MENU: ".dropdown",
    DROPDOWN_CONTENT: ".dropdown-content",
    STRIPE: "#stripe",
    TXT_SHIPPINGINF: ':nth-child(1) > .card > p',
    TXT_PAYMENTMETHOD: ':nth-child(2) > .card > p',

    isNameCorrect(Name) {
        cy.get(this.TXT_VALUE).should('exist');
        return this;
    },

    proceedToCheckOut(){
        cy.get(this.BTN_PROCEED).click({force:true}) 
        return this;
    },

    inputFullName(fullname){
        cy.get(this.TXT_FULLNAME).type(fullname).should('have.value',fullname)
        return this;
    },
      
    inputAddress(address){
        cy.get(this.TXT_ADDR).type(address).should('have.value',address)
        return this;
    },

    inputCity(city){
        cy.get(this.TXT_CITY).type(city).should('have.value',city)
        return this;
    },

    inputZipcode(zipcode){
        cy.get(this.TXT_ZIPCODE).type(zipcode).should('have.value',zipcode)
        return this;
    },

    inputCountry(country){
        cy.get(this.TXT_COUNTRY).type(country).should('have.value',country)
        return this;
    },

    clickContinue(){
        cy.get(this.BTN_CONTINUE).click({force: true})
        return this;
    },
    
    navigatedToPayment(){
        cy.get(this.H1_HEADING).should('contain','Payment Method')
        return this;
    }, 

    notNavigatedToPayment(){
        cy.get(this.H1_HEADING).should('not.contain','Payment Method')
        return this;
    },

    chooseStripeMethod(){
        cy.get(this.STRIPE).click({force:true})
        return this;
    },

    shippingName(){
        cy.get(this.TXT_SHIPPINGINF).should('have.text',`Name:Nguyen Van A Address: 818/28 Xo Viet Nghe Tinh StreetHCM City, 700000, Vietnam`)
        return this;
    },

    confirmPaymentMethod(){
        cy.get(this.TXT_PAYMENTMETHOD).should('contain',"Method:Stripe")
        return this;
    },
    
    clickPlaceOrder(){
        cy.get(this.BTN_PLACEORDER).click({force: true})
        return this;
    },
}