const botao = document.getElementById("gerarBtn");
const area = document.getElementById("area");

const formas = [
    "circulo",
    "quadrado",
    "triangulo",
    "retangulo",
    "losango",
    "hexagono",
    "estrela"
];

function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function corAleatoria() {
    const letras = "0123456789ABCDEF";
    let cor = "#";

    for (let i = 0; i < 6; i++) {
        cor += letras[Math.floor(Math.random() * 16)];
    }

    return cor;
}

function gerarForma() {
    // Cria o elemento
    const forma = document.createElement("div");

    // Escolhe uma forma aleatoriamente
    const tipo = formas[Math.floor(Math.random() * formas.length)];

    forma.classList.add("forma", tipo);

    // Tamanho aleatório
    const tamanho = numeroAleatorio(40, 150);

    // Posição aleatória
    const areaWidth = area.clientWidth;
    const areaHeight = area.clientHeight;

    const posX = numeroAleatorio(
        0,
        Math.max(0, areaWidth - tamanho)
    );

    const posY = numeroAleatorio(
        0,
        Math.max(0, areaHeight - tamanho)
    );

    // Rotação aleatória
    const rotacao = numeroAleatorio(0, 360);

    // Cor aleatória
    const cor = corAleatoria();

    // Configura a forma
    forma.style.left = `${posX}px`;
    forma.style.top = `${posY}px`;
    forma.style.width = `${tamanho}px`;
    forma.style.height = `${tamanho}px`;
    forma.style.backgroundColor = cor;
    forma.style.setProperty("--cor", cor);

    // Algumas formas recebem rotação
    if (tipo !== "triangulo" && tipo !== "losango") {
        forma.style.transform = `rotate(${rotacao}deg)`;
    }

    // Adiciona na tela
    area.appendChild(forma);
}

// Quando clicar no botão
botao.addEventListener("click", gerarForma);
