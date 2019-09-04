const A11Y_OPTIONS = {
  runOnly: {
    type: 'tag',
    values: ['section508'],
  },
};

describe('Accessibility', function() {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
    cy.injectAxe();
  });

  it('common accessibility!', () => {
    cy.checkA11y(A11Y_OPTIONS);
  });
});
