let amigos = [];

function adicionarAmigos() {
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
}