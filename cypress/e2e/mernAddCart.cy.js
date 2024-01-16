import mernAddCart from '../pages/mernAddCart.js'

describe('Testing Adding Cart functionality',()=>{
  beforeEach(() => {
    cy.fixture('merndata.json').as('data')
    cy.visit('http://localhost:3000/signin')
    cy.get("@data").then((data)=>{
      const add= new mernAddCart();
      add.Signin(data.Email,data.Password)
      })
  });
  it ('C1 - Verify the user can not access the cart when not signed in',()=>{
    cy.get("@data").then((data)=>{
    const add= new mernAddCart();
    add.Signout()
    add.NavigateToCart()
    add.CartIsEmpty()
    })
  });
  it ('C2 - Verify the cart has 0 items when click the cart for the first',()=>{
    cy.get("@data").then((data)=>{
    const add= new mernAddCart();
    add.NavigateToCart()
    add.CartIsEmpty()
    })
  });
  it ('C3 - Verify the cart page is able to display correct product when user adds a product',()=>{
    cy.get("@data").then((data)=>{
    const add= new mernAddCart();
    add.ClickOnProduct()
    add.AddToCart()
    add.NavigateToCart()
    add.IsCorrectProductName()
    add.IsCorrectNumberOfItems_1()
    add.IsCorrectTotal_1()
    })
  });
    it('C3 - Verify the cart page is able to display correct product when user adds a product',()=>{
    cy.get("@data").then((data)=>{
    const add= new mernAddCart();
    add.ClickOnProduct()
    add.AddToCart()
    add.NavigateToCart()
    add.IsCorrectProductName()
    add.IsCorrectNumberOfItems_1()
    add.IsCorrectTotal_1()
    })
  });
  it('C4 - Verify user modify the number of items in cart',()=>{
    cy.get("@data").then((data)=>{
    const add= new mernAddCart();
    add.ClickOnProduct()
    add.AddToCart()
    add.NavigateToCart()
    add.choose2ItemsInProoduct()
    add.IsCorrectNumberOfItems_2()
    })
  });
  it('C5 - Verify user modify the number of item in Product page', () => {
    cy.get("@data").then((data)=>{
      const add= new mernAddCart();
      add.ClickOnProduct()
      add.isSelectExist()
      add.choose2ItemsInProoduct()
      add.addOnProduct()
      add.is2itemsinCartPage()
      })
  });
  it('C6 - Verify the total price is calculated correctly according to the number of items added in',()=>{
    cy.get("@data").then((data)=>{
    const add= new mernAddCart();
    add.ClickOnProduct()
    add.AddToCart()
    add.NavigateToCart()
    add.choose2ItemsInProoduct()
    add.IsCorrectTotal_2()
    })
  });
})

