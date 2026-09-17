# Dia 4 — tarde — M16

CI com GitHub Actions (gabarito).

## Ordem na aula (passo a passo)

1. Copiar `dia4\manhã` → `dia4\tarde`
2. **Conta GitHub** (https://github.com/signup) — se ainda não tiver
3. **Repo vazio** no site (sem README / .gitignore)
4. `git init` + `.gitignore` na raiz de `tarde`
5. Primeiro `git push` (`back`, `tests`, `front`)
6. Criar `.github/workflows/ci.yml`
7. Push do workflow → aba **Actions**

## O que o pipeline faz

1. `dotnet test` nos testes do M15
2. `npm ci` + `npm run build` no portal
3. Quality gate: o front só builda se os testes passaram (`needs: test-api`)

Arquivo: `.github/workflows/ci.yml`  
Na raiz do repo: `back/`, `front/`, `tests/`.

## .gitignore mínimo (raiz tarde)

```
node_modules/
bin/
obj/
*.db
dist/
.vs/
```

## Como o aluno experimenta

1. Código no GitHub (push inicial)
2. Copia o workflow para `.github/workflows/ci.yml`
3. `git add` → `git commit` → `git push`
4. GitHub → aba **Actions** → job verde ou vermelho

## Artefatos

- Resultado dos testes (`.trx`)
- Pasta `dist` do Vite (build do portal)
