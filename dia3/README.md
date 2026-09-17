# Dia 3 — M13 + M14

Slides: `aula-dia3-m13-m14.html`

**Professor:** Fernando Lopes Cardoso Ferreira  
**16 de setembro de 2026**

**Ponto de partida:** o `InssApi` da **tarde do Dia 2 (M8)** — camadas, middleware, `inss.db`.  
Os alunos **continuam esse projeto** (não criam API nova) e ligam o portal React.

## Estrutura (back e front separados)

```
dia3\
  aula-dia3-m13-m14.html
  manha\
    back\     ← Visual Studio (CORS sobre o InssApi do Dia 2)
    front\    ← VS Code (Vite + React)
  tarde\
    back\     ← Visual Studio (JWT + [Authorize])
    front\    ← VS Code (Auth + rotas protegidas)
```

| Aula | Back | Front |
|---|---|---|
| Manhã M13 | `C:\fiap_exemplo\dia3\manha\back` | `C:\fiap_exemplo\dia3\manha\front` |
| Tarde M14 | `C:\fiap_exemplo\dia3\tarde\back` | `C:\fiap_exemplo\dia3\tarde\front` |

Portas: API `5088` · Portal `5173`  
Login tarde: `ana@inss.gov.mz` / `1234`
