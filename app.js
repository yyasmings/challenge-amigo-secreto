let amigos = [];
let amigoSecreto = sortearAmigo();

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
   let indiceAleatorio = Math.floor(Math.random() * amigos.length);
   let nomeSorteado = amigos[indiceAleatorio];
   
   
   document.getElementById("resultado");
   resultado.innerHTML = `O amigo sorteado foi: ${nomeSorteado}`;
}