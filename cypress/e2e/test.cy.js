describe('template spec', () => {
    it('passes', () => {
      cy.visit('https://demoqa.com')
  
      cy.get('div.home-body > div > div:nth-child(1)').click({force:true})
      cy.url().should('eq', 'https://demoqa.com/elements')
  
      cy.get('div.col-12.mt-4.col-md-6')
        .should('have.text', 'Please select an item from left to start practice.')
        .should('exist')
        .should('be.visible')
  
      cy.get('p>p>p')
        .should('not.exist')
  
   
    })
    
    it('test attr', () => {
      cy.visit('https://demoqa.com/elements')
      
      cy.get('header > a > img')
        .should('have.attr', 'src', '/images/Toolsqa.jpg')
  
    })
  
    it('test word input', () => {
      cy.visit('https://demoqa.com/text-box')
      cy.get('#userName')
        .type('Vadim')
      cy.get('#userEmail')
        .type('testing@ttt.tt')
  
      cy.get('#submit').click()
  
    })
  
    it('Clear', ()=>{
      cy.visit('https://demoqa.com/text-box')
      cy.get('#userName')
        .type('Vadim')
  
      cy.wait(3000)
      cy.pause()
  
      cy.get('#userName').clear()
  
    })
  })