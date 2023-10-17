describe('Tiny Patient', () => {
  beforeEach(function() {
    cy.request('POST', 'http://localhost:3001/api/testing/reset');
    cy.visit('http://localhost:3000');
  });

  it('front page is loaded', () => {
    cy.contains('Tiny Patient');
    cy.contains('Add Patient');
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
    cy.get('#firstAdd').type('Aaron');
    cy.get('#lastAdd').type('Tan'); 
    cy.get('#infoAdd').type('Engineer'); 

    // Submit the form
    cy.get('#add').click();

    // Check if the new patient is added to the list correctly
    cy.get('tr').should('have.length', 2); 
    cy.get('td#firstcell').contains('Aaron').should('exist'); 
    cy.get('td#secondcell').contains('Tan').should('exist'); 
    cy.get('td#thirdcell').contains('Engineer').should('exist'); 
    cy.get('Button#edit').should('exist'); 
    cy.get('Button#delete').should('exist');
  });

});

describe('Test edit and delete buttons', () => {
  beforeEach(function() {
    cy.request('POST', 'http://localhost:3001/api/testing/reset');
    cy.visit('http://localhost:3000');

    // Add Patient
    cy.contains('Add Patient').click();
    cy.get('#firstAdd').type('Aaron');
    cy.get('#lastAdd').type('Tan'); 
    cy.get('#infoAdd').type('Engineer'); 
    cy.get('#add').click();
  });
  
  it('patients can be edited', () => {
    cy.get('Button#edit').click();

    // Check if the EditPatientModal is now visible with the correct values
    cy.get('tr').should('have.length', 2); 
    cy.get('input#firstEdit').should('have.value', 'Aaron');
    cy.get('input#lastEdit').should('have.value', 'Tan');
    cy.get('input#infoEdit').should('have.value', 'Engineer');

    // Edit the values
    cy.get('#firstEdit').clear();
    cy.get('#firstEdit').type('Tan');
    cy.get('#lastEdit').clear();
    cy.get('#lastEdit').type('Aaron');
    cy.get('#infoEdit').clear();
    cy.get('#infoEdit').type('Developer');
    cy.get('#editSubmit').click();
    cy.wait(500);

    // Check if the values are edited correctly
    cy.get('td#firstcell').contains('Tan').should('exist'); 
    cy.get('td#secondcell').contains('Aaron').should('exist'); 
    cy.get('td#thirdcell').contains('Developer').should('exist'); 
  });

  it('patients can be deleted', () => {
    cy.get('Button#delete').click();

    cy.contains('Aaron').should('not.exist'); 
    cy.contains('Tan').should('not.exist'); 
    cy.contains('Engineer').should('not.exist');
  });
});