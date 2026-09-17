# Dia 4 — M15 + M16

Slides: `aula-dia4-m15-m16.html`

**Professor:** Fernando Lopes Cardoso Ferreira  
**17 de setembro de 2026**

**Ponto de partida:** o **mesmo** projeto do Dia 3 tarde — `InssApi` (Visual Studio) + `inss-portal` (VS Code) dentro de `D:\fiap_turma_2`.  
**Não copiam pasta nenhuma.** Só acrescentam `InssApi.Tests` (manhã) e `.github/workflows/ci.yml` (tarde).

Gabarito organizado em `fiap_turma_2\dia4\manha\` e `dia4\tarde\` (pastas `back/front/tests` do professor). Alunos trabalham na raiz `fiap_turma_2`.

## Estrutura do aluno

```
D:\fiap_turma_2\
  InssApi\              ← Visual Studio (Dia 1–3, + partial Program)
  InssApi.Tests\        ← xUnit + Moq + WebApplicationFactory (novo)
  inss-portal\          ← VS Code + Playwright (Dia 3, + e2e)
  .github\workflows\    ← ci.yml (tarde)
```

## Comandos rápidos

```bash
dotnet test D:\fiap_turma_2\InssApi.Tests
```

```bash
cd D:\fiap_turma_2\inss-portal
npm install
npx playwright install chromium
# Visual Studio F5 na InssApi antes:
npm run test:e2e
```

Portas: API `5088` · Portal `5173`  
Login demo: `ana@inss.gov.mz` / `1234`
