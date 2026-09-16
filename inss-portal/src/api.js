const BASE = "http://localhost:5088";

async function req(caminho, opcoes = {}) {
    const r = await fetch(BASE + caminho, { 
        headers:{"Content-Type": "application/json"},
        ...opcoes,
    });

    if(!r.ok) throw new Error("A API respondeu " + r.status);
    if(r.status == 204) return null;
    return r.json();    
    
}

export const api = {
    listarContribuintes: () => req("/api/contribuintes"),
    obterContribuintes: (id) =>  req('/api/contribuintes/${id}'),

    pedidosDoContribuinte: (id) => req('/api/contribuintes/${id}/pedidos'),

    criarContribuinte: (dados) => 
        req("/api/contribuintes/${id}/pedidos", {
            method: "POST",
            body: JSON.stringify(dados),
        }),

    atualizarContribuinte: (id, dados) =>
        req('api/contribuintes/${id}',{
            method: "PUT",
            body: JSON.stringify(dados),
        }),
    
    patchStatusContribuinte:(id, dados) =>
        req('api/contribuintes/${id}/status', {
            method: "PATCH",
            body: JSON.stringify(dados),
        }),
    removerContribuinte:(id) => 
       req('/api/contribuintes/${id}', {method: "DELETE"}),


    listarPedidos: (pagina = 1, tamanho = 10) => 
        req('/api/pedidos?pagina=${pagina}&tamanho=${tamanho}'),

    obterPedido: (id)=> req('/api/pedidos/${id}'),

    criarPedido: (dados)=> 
           req("api/pedidos", {
            method: "POST",
            body: JSON.stringify(dados),
        }),

        atualizarPedido: (id, dados) =>
            req("api/pedidos/${id}", {
            method: "PUT",
            body: JSON.stringify(dados),
        }),

    patchStatusPedido: (id, status) =>
          req("api/pedidos/${id}/status", {
            method: "PATCH",
            body: JSON.stringify(dados),
        }),

    removerPedido: (id) =>
        req('/api/pedidos/${id}', {method: "DELETE"}),

}