let amigos = [];
let amigoSecreto = gerarNomeAleatorio();

function adicionarAmigo() {
   let inserirNomes = document.getElementById("amigo");
   let salvarNomes = inserirNomes.value.trim();

   if (salvarNomes !== "") {
      amigos.push(salvarNomes);
      atualizarLista();
      inserirNomes.value = "";
   } else {
      alert("Por favor, insira um nome!")
   }
}

function atualizarLista() {
   let lista = document.getElementById("listaAmigos");
   lista.innerHTML = "";

   for (let i = 0; i < amigos.length; i++) {
      let item = document.createElement("li");
      item.textContent = amigos[i];
      lista.appendChild(item);
   }
}

function gerarNomeAleatorio() {
   let nomeEscolhido = Math.floor(Math.random() * amigos.length);
   let nomeSorteado = amigos[nomeEscolhido];
}