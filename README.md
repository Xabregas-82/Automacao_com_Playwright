# Teste de login com Playwright

Teste automatizado de login do LinkedIn usando Playwright nos navegadores Chrome e Edge.

## Pré-requisitos

- Node.js instalado
- Playwright instalado no projeto
- Uma conta de teste do LinkedIn

## Configuração

No PowerShell, defina as credenciais apenas na sessão atual do terminal:

```powershell
$env:LINKEDIN_EMAIL = "seu email"
$env:LINKEDIN_PASSWORD = "sua senha"
```

Não inclua credenciais em arquivos versionados.

## Execução

Defina as credenciais e execute o teste no Chrome:

```powershell
$env:LINKEDIN_EMAIL = "seu-email"
$env:LINKEDIN_PASSWORD = "sua-senha"
npx playwright test --project=chrome
```

Para executar nos dois navegadores:

```powershell
npx playwright test
```

Para executar apenas no Edge:

```powershell
npx playwright test --project=edge
```

Para abrir a interface interativa:

```powershell
npx playwright test --ui
```

Os vídeos são salvos em `test-results/`, inclusive quando o teste passa. O relatório HTML pode ser aberto com:

```powershell
npx playwright show-report
```

## Estrutura

- `playwright.config.js`: configuração do Playwright.
- `playwright/login.spec.js`: teste de login do Playwright.
