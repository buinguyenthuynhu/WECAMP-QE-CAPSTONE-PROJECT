import mernregister from '../pages/mernregister.js'

describe('test',()=>{
  beforeEach(() => {
    cy.fixture('merndata.json').as('data')
    cy.visit('http://localhost:3000/register')
  });
  it ('R1 - Verify user can register using all valid information',()=>{
    cy.get("@data").then((data)=>{
    const re= new mernregister();
    re.inputName(data.Name)
    re.inputEmail(data.Email)
    re.inputPassword(data.Password)
    re.inputConfirmPassword(data.Password)
    re.clickRegister()
    re.SuccessfullyNavigatetoHomepage(data.Name)
    })
  });
  it ('R2 - Verify user can not register using all valid information except the data type of Name is a number',()=>{
    cy.get("@data").then((data)=>{
    const re= new mernregister();
    re.inputName(data.NameL2)
    re.inputEmail(data.EmailL2)
    re.inputPassword(data.Password)
    re.inputConfirmPassword(data.Password)
    re.clickRegister()
    re.NotSuccessfullyNavigatetoHomepage()
    })
  })
  it ('R3 - Verify user can not register using all valid information except the Name includes all special characters',()=>{
    cy.get("@data").then((data)=>{
    const re= new mernregister();
    re.inputName(data.NameL3)
    re.inputEmail(data.EmailL3)
    re.inputPassword(data.Password)
    re.inputConfirmPassword(data.Password)
    re.clickRegister()
    re.NotSuccessfullyNavigatetoHomepage()
    })
  })
  it ('R4 - Verify user can not register by leaving all fields empty',()=>{
    const re= new mernregister()
    re.clickRegister()
    re.NotSuccessfullyNavigatetoHomepage()
    })
    it('R5 - Verify user can not register by leaving only the Name blank and filling in all other valid data fields ',()=>{
      cy.get("@data").then((data)=>{
      const re= new mernregister();
      re.inputEmail(data.EmailL4)
      re.inputPassword(data.Password)
      re.inputConfirmPassword(data.Password)
      re.clickRegister()
      re.NotSuccessfullyNavigatetoHomepage()
      })
    })
    it('R6 - Verify user can not register by leaving only the Email blank and filling in all other valid data fields',()=>{
      cy.get("@data").then((data)=>{
      const re= new mernregister();
      re.inputName(data.Name)
      re.inputPassword(data.Password)
      re.inputConfirmPassword(data.Password)
      re.clickRegister()
      re.NotSuccessfullyNavigatetoHomepage()
      })
    })
    it('R7 - Verify user can not register by filling in valid data except for non-existent Email',()=>{
      cy.get("@data").then((data)=>{
      const re= new mernregister();
      re.inputName(data.Name)
      re.inputEmail(data.EmailL7)
      re.inputPassword(data.Password)
      re.inputConfirmPassword(data.Password)
      re.clickRegister()
      re.NotSuccessfullyNavigatetoHomepage()
      })
    })
    it('R8 - Verify user can not register by filling in valid data except for wrong formatted Email (without @)',()=>{
      cy.get("@data").then((data)=>{
      const re= new mernregister();
      re.inputName(data.Name)
      re.inputEmail(data.EmailL8)
      re.inputPassword(data.Password)
      re.inputConfirmPassword(data.Password)
      re.clickRegister()
      re.NotSuccessfullyNavigatetoHomepage()
      })
    })
    it('R9 - Verify user can not register by filling in valid data except for wrong formatted Email (without the following part after "@")',()=>{
      cy.get("@data").then((data)=>{
      const re= new mernregister();
      re.inputName(data.Name)
      re.inputEmail(data.EmailL9)
      re.inputPassword(data.Password)
      re.inputConfirmPassword(data.Password)
      re.clickRegister()
      re.NotSuccessfullyNavigatetoHomepage()
      })
    })
    it('R10 - Verify user can not register by filling in valid data except for wrong formatted Email (the following part is wrongly formatted after "@")',()=>{
      cy.get("@data").then((data)=>{
      const re= new mernregister();
      re.inputName(data.Name)
      re.inputEmail(data.EmailL10)
      re.inputPassword(data.Password)
      re.inputConfirmPassword(data.Password)
      re.clickRegister()
      re.NotSuccessfullyNavigatetoHomepage()
      })
    })
    it('R11 - Verify user can not register by filling in valid data except the already registered Email)',()=>{
      cy.get("@data").then((data)=>{
      const re= new mernregister();
      re.inputName(data.Name)
      re.inputEmail(data.Email)
      re.inputPassword(data.Password)
      re.inputConfirmPassword(data.Password)
      re.clickRegister()
      re.hasRedWarning()
      })
    })
    it('R12 - Verify user can not register by filling in valid data but the confirm Password is different from Password)',()=>{
      cy.get("@data").then((data)=>{
      const re= new mernregister();
      re.inputName(data.Name)
      re.inputEmail(data.EmailL12)
      re.inputPassword(data.Password)
      re.inputConfirmPassword(data.confirmPassword)
      re.clickRegister()
      re.windowAlert()
      })
    })
    it('R13 - Verify user can not register by leaving only the Password blank and filling in all other valid data fields',()=>{
      cy.get("@data").then((data)=>{
      const re= new mernregister();
      re.inputName(data.Name)
      re.inputEmail(data.Email)
      re.inputConfirmPassword(data.Password)
      re.clickRegister()
      re.NotSuccessfullyNavigatetoHomepage()
      })
    })
    it('R14 - Verify user can not register by leaving only the Confirm Password blank and filling in all other valid data fields',()=>{
      cy.get("@data").then((data)=>{
      const re= new mernregister();
      re.inputName(data.Name)
      re.inputEmail(data.Email)
      re.inputPassword(data.Password)
      re.clickRegister()
      re.NotSuccessfullyNavigatetoHomepage()
      })
    })
})
