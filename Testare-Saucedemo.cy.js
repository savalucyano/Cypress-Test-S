describe('Saucedemo', () => {

    //Login test with wrong user
    it('I check if I can log in with wrong user', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name').type('lucian_test')
        cy.get('#password').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
    })
})


//     // Login test with wrong password
//     it('I check if i can log in with wrong password', () => {
//      cy.visit('https://www.saucedemo.com/')
//      cy.get('#user-name').type('standard_user')
//      cy.get('#password').type('smart_pass')
//      cy.get('[data-test="login-button"]').click()
//    }) 
// })


//       //Logout test
//     it('I log in with the correct data and log out', () => {
//     cy.visit('https://www.saucedemo.com/')
//     cy.get('#user-name').type('standard_user')
//     cy.get('#password').type('secret_sauce')
//     cy.get('[data-test="login-button"]').click() 
//     cy.get('#react-burger-menu-btn').click()  
//     cy.get('[data-test="logout-sidebar-link"]').click()
//     })
// })

       //Open and close side menu
//      it('Verify that the side menu can be successfully opened and closed', () => {
//     cy.visit('https://www.saucedemo.com/')
//     cy.get('#user-name').type('standard_user')
//     cy.get('#password').type('secret_sauce')
//     cy.get('[data-test="login-button"]').click() 
//     cy.get('#react-burger-menu-btn').click()  
//     cy.get('#react-burger-cross-btn').click()
//     })
// })

      //Add product to cart 
//     it('Verify that a product can be added to the cart and is displayed in the cart', () => {
//     cy.visit('https://www.saucedemo.com/')
//     cy.get('#user-name').type('standard_user')
//     cy.get('#password').type('secret_sauce')
//     cy.get('[data-test="login-button"]').click()
//     cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
//     })
// })

       //Remove product from cart
//     it('Verify that a product can be removed from the cart and is no longer displayed', () => {
//     cy.visit('https://www.saucedemo.com/')
//     cy.get('#user-name').type('standard_user')
//     cy.get('#password').type('secret_sauce')
//     cy.get('[data-test="login-button"]').click()
//     cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
//     cy.get('[data-test="shopping-cart-link"]').click()
//     cy.get('[data-test="remove-sauce-labs-backpack"]').click()
//     })
// })

       //Complete checkout process
//     it('Verify that a product can be added to the cart and the checkout process can be completed successfully until order placement', () => {
//     cy.visit('https://www.saucedemo.com/')
//     cy.get('#user-name').type('standard_user')
//     cy.get('#password').type('secret_sauce')
//     cy.get('[data-test="login-button"]').click()
//     cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
//     cy.get('[data-test="shopping-cart-link"]').click()
//     cy.get('[data-test="checkout"]').click()
//     cy.get('[data-test="firstName"]').type('Sava')
//     cy.get('[data-test="lastName"]').type('Lucian')
//     cy.get('[data-test="postalCode"]').type('12345')
//     cy.get('[data-test="continue"]').click()
//     cy.get('[data-test="finish"]').click()
//     })
// })


    //Open product details page 
//  it('Verify that the product details page can be accessed from the product list', () => {
//     cy.visit('https://www.saucedemo.com/')
//     cy.get('#user-name').type('standard_user')
//     cy.get('#password').type('secret_sauce')
//     cy.get('[data-test="login-button"]').click()
//     cy.get('[data-test="item-4-img-link"]').click()
//  })
// })

   //Navigate back to products from product page
// it('Verify that the "Back to products" button redirects the user to the main products page', () => {
//     cy.visit('https://www.saucedemo.com/')
//     cy.get('#user-name').type('standard_user')
//     cy.get('#password').type('secret_sauce')
//     cy.get('[data-test="login-button"]').click()
//     cy.get('[data-test="item-4-img-link"]').click()
//     cy.get('[data-test="back-to-products"]').click()
//  })
// })