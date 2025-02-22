const phrases = [
  "Alinhar sua imagem à sua essência.",
  "Construir conexões estratégicas.",
  "Destacar-se em sua área de atuação.",
  "Projetar sucesso e autoridade.",
  "Impactar nas redes sociais.",
];

const textContainer = document.getElementById("animatedText");
let wordIndex = 0;

function typeWords() {
  const word = document.createElement("span");
  word.classList.add("word");
  word.textContent = phrases[wordIndex];
  textContainer.innerHTML = ""; // Limpa o texto atual
  textContainer.appendChild(word);
  wordIndex = (wordIndex + 1) % phrases.length; // Loop infinito

  // Aguarda 2 segundos antes de exibir a próxima palavra
  setTimeout(typeWords, 2000);
}

typeWords(); // Inicia o ciclo de palavras