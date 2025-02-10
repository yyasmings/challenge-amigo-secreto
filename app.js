let amigos = [];
let sorteados = [];

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

function sortearAmigo() {
   if (amigos.length === 0 && sorteados.length > 0) {
      alert ("Todos os nomes já foram sorteados! A página será atualizada.");
      location.reload();
      return;
   } else if (amigos.length === 0) {
      alert("Opa, você não adicionou nenhum amigo, faça isso antes de sortear!");
      return
   }

   let indiceAleatorio = Math.floor(Math.random() * amigos.length);
   let nomeSorteado = amigos[indiceAleatorio];

   sorteados.push(nomeSorteado);
   amigos.splice(indiceAleatorio, 1);
   
   document.getElementById("resultado");
   resultado.innerHTML = `O amigo sorteado é: ${nomeSorteado}`;
}