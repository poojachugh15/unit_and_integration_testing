describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })
//Do the number buttons update the display of the running total?
  it('should have working number buttons update the display of the running total', () => {
    cy.get('#number9').click();
    cy.get('.display').should('contain', '9')
  })
//Do the arithmetical operations update the display with the result of the operation?
  it ('should have the arithmetical operations update the display with the result of the operation', () => {
    cy.get('#number9').click();
    cy.get('#operator_add').click();
    cy.get('#number6').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '15')
  })
  //Is the output as expected for a range of numbers (for example, positive, negative, decimals and very large numbers)?
  //output as expected to be positive
  it('should have the output as expected to be positive', () => {
    cy.get('#number8').click();
    cy.get('#operator_multiply').click();
    cy.get('#number3').click();
    cy.get('#operator_equals').click();
    cy.get('#operator_subtract').click();
    cy.get('#number4').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '20')
  })
  //output as expected to be negative
  it('should have the output as expected to be negative', () => {
    cy.get('#number2').click();
    cy.get('#operator_subtract').click();
    cy.get('#number5').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '-3')
  })

  //output as expected to be decimal
  it('should have the output as expected to be decimal', () => {
    cy.get('#number3').click();
    cy.get('#operator_divide').click();
    cy.get('#number2').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '1.5')

  })
  
  // output as expected to be large
  it('should have the output as expected to be large', () => {
    cy.get('#number5').click();
    cy.get('#number5').click();
    cy.get('#number5').click();
    cy.get('#operator_multiply').click();
    cy.get('#number2').click();
    cy.get('#number2').click();
    cy.get('#number2').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '123210')

  })


//What does the code do in exceptional circumstances? Specifically, if you divide by zero, what is the effect? 
//Write a test to describe what you'd prefer to happen, and then correct the code to make that test pass (you will need to modify the Calculator model to meet this requirement).
//divide by zero get "undefined"
it('should have divide by zero get "undefined"', () => {
      cy.get('#number3').click();
      cy.get('#operator_divide').click();
      cy.get('#number0').click();
      cy.get('#operator_equals').click();
      cy.get('.display').should('contain', 'Undefined')
    })

})