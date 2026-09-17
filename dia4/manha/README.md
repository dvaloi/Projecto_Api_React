# Dia 4 — manhã — M15

Continua o **mesmo** `InssApi` + `inss-portal` do Dia 3 tarde (JWT + portal com login).  
**Passo 0 dos slides:** abrir os projetos e provar F5 + login. **Passo 1:** criar `InssApi.Tests` ao lado do `InssApi`.

## Pastas (aluno)

| Pasta | Ferramenta | O que é |
|---|---|---|
| `InssApi\` | Visual Studio | API (Dia 1–3) + `partial Program` |
| `InssApi.Tests\` | Visual Studio / Terminal | xUnit + Moq + WebApplicationFactory |
| `inss-portal\` | VS Code | Portal + Playwright (`e2e\`) |

## Criar InssApi.Tests (Passo 1 — terminal na **raiz** fiap_turma_2)

```bash
cd C:\fiap_turma_2
dotnet new xunit -n InssApi.Tests -o InssApi.Tests
dotnet add InssApi.Tests\InssApi.Tests.csproj reference InssApi\InssApi.csproj

```

Passo 1a — botão direito na linha **Solução 'InssApi'** (topo do Gerenciador — **não** no projeto InssApi) → **Adicionar → Projeto Existente** → `InssApi.Tests\InssApi.Tests.csproj`. Alternativa: **Arquivo → Adicionar → Projeto Existente**. Prova: **2 de 2 projetos** · apagar `UnitTest1.cs`.

## Rodar testes da API

```bash
cd C:\fiap_turma_2
dotnet test InssApi.Tests
```

Esperado: **7 aprovados**.

## Rodar e2e (Playwright)

1. Visual Studio → F5 na InssApi (`5088`)
2. VS Code → pasta `inss-portal`:

```bash
npm install
npx playwright install chromium
npm run test:e2e
```

Login demo: `ana@inss.gov.mz` / `1234`
