const botao = document.getElementById("gerarBtn");
const area = document.getElementById("area");

const gatos = [
    "😺",
    "😹",
    "😸",
    "😼",
    "😾",
    "🙀",
    "😽",
    "😻"
];

function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function gerarGatinho() {
    const gatinho = document.createElement("div");
    const emoji = gatos[Math.floor(Math.random() * gatos.length)];

    gatinho.classList.add("gatinho");
    gatinho.dataset.emoji = emoji;

    const tamanho = numeroAleatorio(60, 150);
    const areaWidth = area.clientWidth;
    const areaHeight = area.clientHeight;

    const posX = numeroAleatorio(0, Math.max(0, areaWidth - tamanho));
    const posY = numeroAleatorio(0, Math.max(0, areaHeight - tamanho));
    const rotacao = numeroAleatorio(-20, 20);

    gatinho.style.left = `${posX}px`;
    gatinho.style.top = `${posY}px`;
    gatinho.style.setProperty("--tamanho", `${tamanho}px`);
    gatinho.style.setProperty("--rotacao", `${rotacao}deg`);

    area.appendChild(gatinho);
}

botao.addEventListener("click", gerarGatinho);
