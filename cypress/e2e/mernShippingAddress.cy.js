import mernAddCart from '../pages/mernAddCart.js'

describe('Testing Shipping address functionality',()=>{
  beforeEach(() => {
    cy.fixture('merndata.json').as('data')
    cy.visit('http://localhost:3000/signin')
    cy.get("@data").then((data)=>{
      const add= new mernAddCart();
      add.Signin(data.Email,data.Password)
      add.ClickOnProduct()
      add.AddToCart()
      add.proceedToCheckOut()
      })
  });
  it('S1 - Verify user can proceed to pay by inputting all valid information in the shipping address fields',()=>{
    cy.get("@data").then((data)=>{
    const Ship= new mernAddCart();
    Ship.inputFullName(data.Name)
    Ship.inputAddress(data.Address)
    Ship.inputCity(data.City)
    Ship.inputZipcode(data.Zipcode)
    Ship.inputCountry(data.Country)
    Ship.ClickContinue()
    Ship.NavigatedToPayment()
  });
})
  it('S2 - Verify user can not proceed to payment except the data type of Name is a number',()=>{
    cy.get("@data").then((data)=>{
    const Ship= new mernAddCart();
    Ship.inputFullName(data.NameL2)
    Ship.inputAddress(data.Address)
    Ship.inputCity(data.City)
    Ship.inputZipcode(data.Zipcode)
    Ship.inputCountry(data.Country)
    Ship.ClickContinue()
    Ship.NotNavigatedToPayment()
    })
  });
    it('S3 - Verify user can not proceed to pay by inputting all valid information except the Name includes all special characters',()=>{
    cy.get("@data").then((data)=>{
      const Ship= new mernAddCart();
      Ship.inputFullName(data.NameL3)
      Ship.inputAddress(data.Address)
      Ship.inputCity(data.City)
      Ship.inputZipcode(data.Zipcode)
      Ship.inputCountry(data.Country)
      Ship.ClickContinue()
      Ship.NotNavigatedToPayment()
    })
  });
  it('S4 - Verify user can not proceed to pay by leaving all fields empty',()=>{
    const Ship= new mernAddCart();
    Ship.ClickContinue()
    Ship.NotNavigatedToPayment()
  })
;
  it('S5 - Verify user proceed to pay by leaving only the Name blank and filling in all other valid data fields', () => {
    cy.get("@data").then((data)=>{
      const Ship= new mernAddCart();
      Ship.inputAddress(data.Address)
      Ship.inputCity(data.City)
      Ship.inputZipcode(data.Zipcode)
      Ship.inputCountry(data.Country)
      Ship.ClickContinue()
      Ship.NotNavigatedToPayment()
      })
  });
  it('S6 - Verify user can not proceed to pay by leaving only the Address blank and filling in all other valid data fields',()=>{
    cy.get("@data").then((data)=>{
      const Ship= new mernAddCart();
      Ship.inputFullName(data.Name)
      Ship.inputCity(data.City)
      Ship.inputZipcode(data.Zipcode)
      Ship.inputCountry(data.Country)
      Ship.ClickContinue()
      Ship.NotNavigatedToPayment()
    })
  });
  it('S7 - Verify user can not proceed to pay by leaving only the City blank and filling in all other valid data fields',()=>{
    cy.get("@data").then((data)=>{
      const Ship= new mernAddCart();
      Ship.inputFullName(data.Name)
      Ship.inputAddress(data.Address)
      Ship.inputZipcode(data.Zipcode)
      Ship.inputCountry(data.Country)
      Ship.ClickContinue()
      Ship.NotNavigatedToPayment()
    })
  });
  it('S8 - Verify user can not proceed to pay by leaving only the Zipcode blank and filling in all other valid data fields ',()=>{
    cy.get("@data").then((data)=>{
      const Ship= new mernAddCart();
      Ship.inputFullName(data.Name)
      Ship.inputAddress(data.Address)
      Ship.inputCity(data.City)
      Ship.inputCountry(data.Country)
      Ship.ClickContinue()
      Ship.NotNavigatedToPayment()
    })
  });
  it('S9 - Verify user can not proceed to pay by leaving only the Country blank and filling in all other valid data fields',()=>{
    cy.get("@data").then((data)=>{
      const Ship= new mernAddCart();
      Ship.inputFullName(data.Name)
      Ship.inputAddress(data.Address)
      Ship.inputCity(data.City)
      Ship.inputZipcode(data.Zipcode)
      Ship.ClickContinue()
      Ship.NotNavigatedToPayment()
    })
  });
  it('S10 - Verify user can proceed to pay by filling in valid data except for wrongly formatted or non-existent Address',()=>{
    cy.get("@data").then((data)=>{
      const Ship= new mernAddCart();
      Ship.inputFullName(data.Name)
      Ship.inputAddress(data.NameL2)
      Ship.inputCity(data.City)
      Ship.inputZipcode(data.Zipcode)
      Ship.inputCountry(data.Country)
      Ship.ClickContinue()
      Ship.NavigatedToPayment()
    })
  });
  it('S11 - Verify user can not  proceed to pay by filling in valid data except for wrongly formatted or non-existent City',()=>{
    cy.get("@data").then((data)=>{
      const Ship= new mernAddCart();
      Ship.inputFullName(data.Name)
      Ship.inputAddress(data.Address)
      Ship.inputCity(data.NameL2)
      Ship.inputZipcode(data.Zipcode)
      Ship.inputCountry(data.Country)
      Ship.ClickContinue()
      Ship.NotNavigatedToPayment()
    })
  });
  it('S12 - Verify user can not  proceed to pay by filling in valid data except for wrongly formatted or non-existent Zipcode',()=>{
    cy.get("@data").then((data)=>{
      const Ship= new mernAddCart();
      Ship.inputFullName(data.Name)
      Ship.inputAddress(data.Address)
      Ship.inputCity(data.City)
      Ship.inputZipcode(data.NameL2)
      Ship.inputCountry(data.Country)
      Ship.ClickContinue()
      Ship.NotNavigatedToPayment()
    })
  });
  it('S13 - Verify user can not proceed to payby filling in valid data except for wrongly formatted or non-existent Country',()=>{
    cy.get("@data").then((data)=>{
      const Ship= new mernAddCart();
      Ship.inputFullName(data.Name)
      Ship.inputAddress(data.Address)
      Ship.inputCity(data.City)
      Ship.inputZipcode(data.Zipcode)
      Ship.inputCountry(data.NameL2)
      Ship.ClickContinue()
      Ship.NotNavigatedToPayment()
    })
  });
})
