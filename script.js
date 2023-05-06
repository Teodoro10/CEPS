async function clique() {
  const campo = document.querySelector("#campo").value;
  if (campo == "") {
    alert("BOA NOITE");
    return;
  }
  const botao = document.querySelector("#botao");
  botao.innerHTML = "Carregando..."; //quando estiver carregando a api
  const apiresponse = await fetch(`https://viacep.com.br/ws/${campo}/json/`);
  const data = await apiresponse.json();

  const cidade = document.querySelector("#cidade");
  const estado = document.querySelector("#estado");
  const bairro = document.querySelector("#bairro");
  const rua = document.querySelector("#rua");

  cidade.innerHTML = data.localidade;
  estado.innerHTML = data.uf;
  bairro.innerHTML = data.bairro;
  rua.innerHTML = data.logradouro;
  botao.innerHTML = "Pesquisar"; // quando depois de feito
}
