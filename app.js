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
   if (amigos.length === 0) {
      alert("Opa, você não adicionou nenhum amigo, faça isso antes de sortear!");
      return
   }

   let indiceAleatorio;
   let nomeSorteado;

   do {
      indiceAleatorio = Math.floor(Math.random() * amigos.length);
      nomeSorteado = amigos[indiceAleatorio];
   } while (sorteados.includes(nomeSorteado));

   sorteados.push(nomeSorteado);
   amigos.splice(indiceAleatorio, 1);
   
   document.getElementById("resultado");
   resultado.innerHTML = `O amigo sorteado é: ${nomeSorteado}`;
}