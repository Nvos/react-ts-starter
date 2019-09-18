import { Server, WebSocket } from 'mock-socket';

describe('Accessibility', function() {
  beforeEach(() => {
    cy.visit('http://localhost:3000', {
      onBeforeLoad: win => {
        // Call some code to initialize the fake server part using MockSocket
        cy.stub(win, 'WebSocket' as any, (url: any) => new WebSocket(url));
      },
    });
  });

  it('common accessibility!', () => {
    const MockServer = new Server('ws://localhost:8080');
    let didConnect = false;
    MockServer.on('connection', socket => {
      didConnect = true;
    });

    cy.get(':nth-child(3) > a')
      .click()
      .wait(500)
      .then(() => {
        expect(didConnect).to.be.true;
      });
  });
});
