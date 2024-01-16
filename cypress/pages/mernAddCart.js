class mernAddCart {
    TXT_EMAIL= "#email";
    TXT_PASSWORD = "#password";
    BTO_SIGNIN =".primary";
    BTO_ADDCART = '.primary';
    Cart = "a[href='/cart']"; 
    CartText = 'div.alert';  
    ProductImg = 'img[src="/images/p1.jpg"]';
    AddIntoCart  = '.primary';
    ProductName = 'a[href="/product/6551d9b010ac3acc9ff377b3"]'
    Subtotal = 'h2'
    SelectProduct = 'select';
    FullName = "#fullName";
    Address = "#address";
    City = "#city";
    Zipcode = "#zipcode";
    Country = "#country";
    Heading ="h1";
    DROPDOWN_MENU =".dropdown";
    DROPDOWN_CONTENT = ".dropdown-content";
    Stripe = "#stripe";
    ShippingPayment =':nth-child(1) > .card > p';
    PaymentMethod =':nth-child(2) > .card > p';
    OrderItems =':nth-child(3) > .card > p';
    ProductNameOrder = '.min-30 > a'
    ProductTotalOrder ='li > .row > :nth-child(3)';
    TaxAmount = ':nth-child(4) > .row'
    TotalAmount = ':nth-child(2) > .row'
    OrderTotal = ':nth-child(5) > .row'

    Signin(email,password) {
        cy.get(this.TXT_EMAIL).type(email, { force: true });
        cy.get(this.TXT_PASSWORD).type(password, { force: true });
        cy.get(this.BTO_SIGNIN).click({ force: true });
      };
    NavigateToCart(){
        cy.get(this.Cart).click({force: true})
    }
    CartIsEmpty(){
        cy.get(this.CartText).should('contain','Cart is empty')
    }
    ClickOnProduct(){
        cy.get(this.ProductImg).click( { force: true })
    }
    AddToCart(){
        cy.get(this.AddIntoCart).click({click:true})
    }
    IsCorrectProductName(){
        cy.get(this.ProductName).should('contain','Nike Slim Shirt')
    }
    IsCorrectNumberOfItems_1(){
        cy.get(this.Subtotal).should('contain','1 itmes')
    }
    IsCorrectTotal_1(){
        cy.get(this.Subtotal).should('contain','$ 120')
    }
    IsCorrectNumberOfItems_2(){
        cy.get(this.Subtotal).should('contain','2 itmes')
    }
    IsCorrectTotal_2(){
        cy.get(this.Subtotal).should('contain','$ 240')}
    
    choose2ItemsInProoduct() {
        cy.get(this.SelectProduct).select('2')}
            
    isSelectExist(){
        cy.get(this.SelectProduct).should('have.value', '1') .find('option').should('have.length', 10);
            };
            
    is2itemsinCartPage(){
        cy.url().should('include', '/cart')
        cy.get(this.SelectProduct).should('have.value', '2')
            };
    proceedToCheckOut(){
      cy.get(this.BTO_ADDCART).click({force:true}) 
    }
    addOnProduct(){
     cy.get(this.BTO_ADDCART).click()
    }
    inputFullName(fullname){
        cy.get(this.FullName).type(fullname)
    }
    inputAddress(address){
        cy.get(this.Address).type(address)
    }
    inputCity(city){
        cy.get(this.City).type(city)
    }
    inputZipcode(zipcode){
        cy.get(this.Zipcode).type(zipcode)
    }
    inputCountry(country){
        cy.get(this.Country).type(country)
    }
    ClickContinue(){
        cy.get(this.BTO_ADDCART).click({force: true})
    }
    NavigatedToPayment(){
        cy.get(this.Heading).should('contain','Payment Method')
    }
    NotNavigatedToPayment(){
        cy.get(this.Heading).should('not.contain','Payment Method')
    }
    Signout() {
        cy.get(this.DROPDOWN_CONTENT).contains('Sign Out').click({force: true}); 
    }
    ChooseStripeMethod(){
        cy.get(this.Stripe).click({force:true})
    }
    ShippingName(){
        cy.get(this.ShippingPayment).should('have.text',`Name:Nguyen Van A Address: 818/28 Xo Viet Nghe Tinh StreetHCM City, 700000, Vietnam`)
        }
    PaymentMethodd(){
        cy.get(this.PaymentMethod).should('have.text','Method:Stripe')
    }
    OrderItem(){
        cy.get(this.OrderItems).should('have.text',`Method:Stripe`)
        }
    IsCorrectOrderInfo_ProductName(){
        cy.get(this.ProductNameOrder).should('have.text','Nike Slim Shirt')
    }
    IsCorrectOrderInfo_ProductTotal(){
        cy.get(this.ProductTotalOrder).should('have.text','1 x $120 = $120')
    }
    IsCorrectTaxAmount(){
        cy.get(this.TaxAmount).should('have.text','Tax$18.00')
        }
    IsCorrectTotalOrder(){
        cy.get(this.OrderTotal).should('have.text','Order Total$138.00')
    }
}


export default mernAddCart

