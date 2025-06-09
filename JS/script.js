// Abas ativas
const links = document.querySelectorAll(".header-menu a");
function ativarlinks(link) {
  const url = location.href;
  const href = link.href;
  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}

links.forEach(ativarlinks);

//Ativar itens do orçamento

const parametros = new URLSearchParams(location.search);

parametros.forEach(ativarProdutos);

function ativarProdutos(parametro) {
  const elemento = document.getElementById(parametro);
  console.log(parametro);
  if (elemento) {
    elemento.checked = true;
  }
}

//Perguntas frequentes

const perguntas = document.querySelectorAll(".perguntas button");

perguntas.forEach(eventosPerguntas);

function eventosPerguntas(pergunta) {
  pergunta.addEventListener("click", ativarPergunta);
}
function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);
  const ativa = resposta.classList.contains("ativa");

  resposta.classList.toggle("ativa");
  pergunta.setAttribute("aria-expanded", ativa);
}

//Galeria de bicicletas
const galeria = document.querySelectorAll(".bicicleta-img img");
const galeriaContainer = document.querySelector(".bicicleta-img");

galeria.forEach(eventosGaleria);

function eventosGaleria(img) {
  img.addEventListener("click", trocarImagem);
}

function trocarImagem(event) {
  const img = event.currentTarget;
  const media = matchMedia("(min-width: 1000px)").matches;
  if (media) {
    galeriaContainer.prepend(img);
  }
}
