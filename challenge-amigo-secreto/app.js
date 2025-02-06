//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
const amigos = [];

function adicionarAmigo()
{
    const input = document.getElementById("amigo")
    const nome = input.value.trim();
    
    if(nome === "")
    {
        alert("Por favor, digite um nome válido.");
    return;
    }
    
amigos.push(nome);
atualizarListaDeAmigos();
input.value = "";
}

function atualizarListaDeAmigos()
{
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    
    amigos.forEach(amigo => {
        const item = document.createElement("li");
        item.textContent = amigo;
        lista.appendChild(item);
    });
}

function sortearAmigo()
{
    if(amigos.length === 0)
    {
        alert("Adicione ao menos um nome para realizar o sorteio.");
        return;
    }
    const sorteado = amigos[Math.floor(Math.random() * amigos.length)];
    const resultado = document.getElementById("resultado");
    resultado.textContent = `O amigo secreto sorteado é: ${sorteado}`;
}