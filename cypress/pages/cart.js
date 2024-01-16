export const deleteCart = {
    LNK_CART: 'a[href="/cart"]',
    IMG_CART1: 'img[src="/images/p1.jpg"]',
    BTO_ADDCART: '.primary',
    BTO_DELETE: 'button[type="button"]',
    TXT_DELNOTI: 'div.alert',
    LNK_HOME: ".alert > a",
    SelectProduct: 'select',
    

    navigateToCartPage() {
        cy.get(this.LNK_CART).click();
        cy.url().should('include', '/cart');
        return this;
      },
    
    chooseOnProduct(){
        cy.get(this.IMG_CART1).click( { force: true })
        return this;
        },

    addOnProduct(){
        cy.get(this.BTO_ADDCART).click()
        return this;
        },

    deleteProduct() {
        cy.get(this.BTO_DELETE)
            .contains('Delete')
            .should('be.visible')
            .click();
        cy.get(this.TXT_DELNOTI)
            .should('be.visible')
            .invoke('text')
            .should('include', 'Cart is empty');
            return this;
          },
    
    navigateToHomePage() {
        cy.get(this.LNK_HOME).click()
        cy.url().should('include', '')
        return this;
    },

    isSelectExist(){
        cy.get(this.SelectProduct).should('have.value', '1') .find('option').should('have.length', 10);
        return this;
    },

    choose2ItemsInProoduct(){
        cy.get(this.SelectProduct).select('2')
        return this;
    },
    
    is2itemsinCartPage(){
        cy.url().should('include', '/cart')
        cy.get(this.SelectProduct).should('have.value', '2')
        return this;
    },

    
          
  };