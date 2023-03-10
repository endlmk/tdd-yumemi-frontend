/* eslint-disable */
// Disable ESLint to prevent failing linting inside the Next.js repo.
// If you're using ESLint on your project, we recommend installing the ESLint Cypress plugin instead:
// https://github.com/cypress-io/eslint-plugin-cypress

describe("Navigation", () => {
  it("should show prefecture checkboxes and show charts", () => {
    // Start from the index page
    cy.visit("http://localhost:3000/");

    cy.get('[type="checkbox"]').should("have.length", 47);

    cy.get("label").first().contains("北海道");
    cy.get("label").eq(1).contains("青森");

    cy.get('[type="checkbox"]').first().check();

    cy.get(".recharts-legend-item").first().contains("北海道");

    cy.get('[type="checkbox"]').eq(46).check();

    cy.get(".recharts-legend-item").eq(1).contains("沖縄");
  });
});

// Prevent TypeScript from reading file as legacy script
export {};
