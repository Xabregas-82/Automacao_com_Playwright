# Teste de login com Cypress

Testes automatizados de login do LinkedIn usando Cypress e Playwright.

## Pré-requisitos

- Node.js instalado
- Dependências instaladas com `npm install`
- Uma conta de teste do LinkedIn

## Configuração

No PowerShell, defina as credenciais apenas na sessão atual do terminal:

```powershell
$env:LINKEDIN_EMAIL = "seu email"
$env:LINKEDIN_PASSWORD = "sua senha"
```

Não inclua credenciais em arquivos versionados.

## Execução

Execute o teste em modo headless:

```powershell
npx cypress run --spec .\login.cy.js
```

Para executar com Playwright:

```powershell
$env:LINKEDIN_EMAIL = "seu-email"
$env:LINKEDIN_PASSWORD = "sua-senha"
npm run test:playwright
```

O comando acima executa nos navegadores Chrome e Edge. Para executar apenas um deles:

```powershell
npm run test:playwright:chrome
npm run test:playwright:edge
```

Para abrir a interface interativa do Playwright:

```powershell
npm run test:playwright:ui
```

Ou abra a interface gráfica:

```powershell
npx cypress open
```

## Estrutura

- `login.cy.js`: especificação do teste.
- `index.js`: Page Object da tela de login.
- `elements.js`: seletores da tela de login.
- `cypress.config.js`: configuração do Cypress.
- `playwright.config.js`: configuração do Playwright.
- `playwright/login.spec.js`: teste de login do Playwright.
