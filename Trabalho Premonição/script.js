const btnFrase = document.getElementById("btn-frase");
const frase = document.getElementById("frase");

const btnFilme = document.getElementById("btn-filme");
const fraseFilme = document.getElementById("frase-filme");

const frases = [
  "A morte não esquece ninguém.",
  "Toda fuga tem um preço.",
  "Escapar do acidente é só o começo."
];

const frasesDosFilmes = [
  "Premonição (2000): você pode escapar do acidente, mas não do destino.",
  "Premonição 2 (2003): mudar a ordem da morte tem consequências.",
  "Premonição 3 (2006): os sinais estão em toda parte, mas nem todos conseguem vê-los.",
  "Premonição 4 (2009): sobreviver ao desastre é apenas o primeiro passo.",
  "Premonição 5 (2011): a morte sempre encontra um caminho.",
  "Premonição 6: laços do passado podem reacender o ciclo da morte."
];

btnFrase.addEventListener("click", function () {
  const indice = Math.floor(Math.random() * frases.length);
  frase.textContent = frases[indice];
});

btnFilme.addEventListener("click", function () {
  const indice = Math.floor(Math.random() * frasesDosFilmes.length);
  fraseFilme.textContent = frasesDosFilmes[indice];
});