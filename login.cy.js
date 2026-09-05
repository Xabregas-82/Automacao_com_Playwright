const { Login } = require('./index');

describe('Login', () => {
  it('should log in successfully with valid credentials', () => {
    const login = new Login();

    cy.env(['LINKEDIN_EMAIL', 'LINKEDIN_PASSWORD']).then(
      ({ LINKEDIN_EMAIL, LINKEDIN_PASSWORD }) => {
        if (!LINKEDIN_EMAIL || !LINKEDIN_PASSWORD) {
          throw new Error(
            'Defina LINKEDIN_EMAIL e LINKEDIN_PASSWORD no terminal antes de executar o teste.',
          );
        }

        login.visit();
        login.fillCredentials(LINKEDIN_EMAIL, LINKEDIN_PASSWORD);
        login.submit();
        login.shouldBeLoggedIn();
      },
    );
  });
});
