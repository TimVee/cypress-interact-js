describe('Interact js', function () {
  it('should be able to be automated', function() {
    cy.visit('http://127.0.0.1:3000/');
    cy.get('.draggable').then($draggable => {
      const oldPosition = $draggable[0].getBoundingClientRect();
      cy.get('.draggable').pause().move({ x: 100, y: 100, position: 'center' });
      cy.get('.draggable').then($draggable => {
        expect(oldPosition.x).to.not.eq($draggable[0].getBoundingClientRect().x);
      });
    });
  });
});