describe('Tiny Patient', () => {
  beforeEach(function() {
    cy.request('POST', 'http://localhost:3001/api/testing/reset');
    cy.visit('http://localhost:3000');
  });
  it('front page can be opened', () => {
    cy.contains('Tiny Patient');
  });

  it('add patient form can be opened', () => {
    cy.get('button').contains('Add Patient').should('exist');

    // Check if AddPatientModal is not visible
    cy.contains('Tiny Patient').should('be.visible');

    // Click the "Add Patient" button
    cy.get('button').contains('Add Patient').click();

    // Check if the AddPatientModal is now visible
    cy.get('Button#add').should('be.visible');
  });

  it('patients can be added', () => {
    // Click the "Add Patient" button
    cy.contains('Add Patient').click();

    // Fill in the form
    cy.get('#first').type('Aaron'); // Enter first name
    cy.get('#last').type('Tan'); // Enter last name
    cy.get('#info').type('engineer'); // Enter info

    // Submit the form
    cy.get('#add').click();

    // Check if the new patient is added to the list correctly
    cy.get('tr').should('have.length', 2); // Check if there are two rows in the table
    cy.get('td#firstcell').contains('Aaron').should('exist'); 
    cy.get('td#secondcell').contains('Tan').should('exist'); 
    cy.get('td#thirdcell').contains('engineer').should('exist'); 
    cy.get('Button#edit').should('exist'); 
    cy.get('Button#delete').should('exist');
  });

});