/* eslint-disable */
// Disable ESLint to prevent failing linting inside the Next.js repo.
// If you're using ESLint on your project, we recommend installing the ESLint Cypress plugin instead:
// https://github.com/cypress-io/eslint-plugin-cypress

describe('Navigation', () => {
  it('should show prefecture checkboxes', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/')

    cy.get('[type="check"]').should('have.length', 1)

    cy.get('[type="check"]').first().contains('北海道')
  })
})

// Prevent TypeScript from reading file as legacy script
export {}
