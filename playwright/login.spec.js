const { test, expect } = require('@playwright/test');

test('faz login com credenciais validas', async ({ page }) => {
  const email = process.env.LINKEDIN_EMAIL;
  const password = process.env.LINKEDIN_PASSWORD;

  expect(email, 'Defina LINKEDIN_EMAIL antes de executar o teste.').toBeTruthy();
  expect(password, 'Defina LINKEDIN_PASSWORD antes de executar o teste.').toBeTruthy();

  await page.goto('/login');
  await page.getByRole('textbox', { name: 'E-mail ou telefone' }).first().fill(email);
  await page.getByRole('textbox', { name: 'Senha' }).first().fill(password);
  await page.getByRole('button', { name: 'Entrar', exact: true }).click();

  await expect(page).toHaveURL(/\/feed/);
});