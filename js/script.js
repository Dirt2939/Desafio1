import { getInput, setText, isInputValid } from "./Utils.js";

const funcoes = {
  escrever,
  perguntar,
  mostrarTexto,
  somar,
  calcularMedia,
  converterDolar,
  calcularTerreno,
  verificarParImpar,
  mostrarVizinhos,
  verificarVelocidade,
  verificarHabilitacao,
  calcularIMC,
  calcularDesconto,
  compararNumeros,
};

document.addEventListener("click", (event) => {
  const elemento = event.target;
  const acao = elemento.dataset.action;
  const btnToggle = event.target.closest(".btnToggle");

  if (btnToggle) {
    toggleVisibilidade(btnToggle);
    return;
  }

  if (acao && funcoes[acao]) {
    funcoes[acao]();
  }
});

function escrever() {
  document.write(
    "<div style='display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; font-family: Arial, sans-serif;'>",
  );

  document.write(
    "<b style='font-size: 48px; margin-bottom: 20px;'>Olá São Lucas!</b>",
  );
  document.write(
    "<a href='index.html' style='text-decoration: none; font-size: 14px; color: gray;'>Voltar</a>",
  );

  document.write("</div>");
}

function perguntar() {
  let nome = prompt("Qual seu nome? ");
  let idade = prompt("Qual sua idade? ");

  setText("res1", `Seu nome é ${nome} e tens ${idade} anos`);
}

function mostrarTexto() {
  let texto = getInput("entrada");
  setText("res2", `Você escreveu: ${texto}`);
}

function somar() {
  let num1 = getInput("num1", "num");
  let num2 = getInput("num2", "num");

  if (!isInputValid([num1, num2])) return;

  let total = num1 + num2;
  setText("res3", `O resultado entre ${num1} + ${num2} é igual a ${total}`);
}

function calcularMedia() {
  let num1 = getInput("num1Es", "num");
  let num2 = getInput("num2Es", "num");
  let num3 = getInput("num3Es", "num");

  if (!isInputValid([num1, num2, num3])) return;

  let total = (num1 + num2 + num3) / 3;
  setText("res4", `A média é ${total.toFixed(2)}`);
}

function converterDolar() {
  let valor = getInput("valor", "num");
  let cotacao = getInput("cotacao", "num");

  if (!isInputValid([cotacao, valor])) return;

  let total = valor / cotacao;
  setText("res5", `R$${valor.toFixed(2)} em dólar é $${total.toFixed(2)}`);
}

function calcularTerreno() {
  let largura = getInput("largura", "num");
  let altura = getInput("altura", "num");

  if (!isInputValid([altura, largura])) return;

  let total = altura * largura;
  setText("res6", `A área do terreno é: ${total.toFixed(2)}m`);
}

function mostrarVizinhos() {
  let num = getInput("numAS", "num");

  if (!isInputValid([num])) return;

  setText("res7", `Vizinhos: ${num - 1} ${num} ${num + 1}`);
}

function verificarParImpar() {
  let parImpar = getInput("parImpar", "num");
  parImpar = parImpar % 2 === 0 ? "par" : "impar";

  if (!isInputValid([parImpar])) return;

  setText("res8", `O número é ${parImpar}`);
}

function verificarVelocidade() {
  let velocidade = getInput("velocidade", "num");

  if (!isInputValid([velocidade])) return;

  let msg =
    velocidade >= 120
      ? "INFRAÇÃO GRAVÍSSIMA!"
      : velocidade >= 80
        ? "MULTADO!"
        : "Velocidade dentro do limite.";
  setText("res9", msg);
}

function verificarHabilitacao() {
  let anoNascimento = getInput("anoNascimento", "num");
  let anoAtual = getInput("anoAtual", "num");

  if (!isInputValid([anoNascimento, anoAtual])) return;

  let msg =
    anoAtual - anoNascimento >= 18
      ? "Você já pode dirigir!\n"
      : "Você ainda não tem idade para dirigir.\n";
  setText("res10", msg);
}

function calcularIMC() {
  let peso = getInput("pesoIMC", "num");
  let altura = getInput("alturaIMC", "num");

  if (!isInputValid([peso, altura])) return;

  let imc = peso / Math.pow(altura, 2);
  let msg =
    imc < 25
      ? "Você está no peso ideal"
      : "Atenção: você está acima do peso ideal";
  setText("res11", msg);
}

function calcularDesconto() {
  let valorCompra = getInput("valorCompra", "num");

  if (!isInputValid([valorCompra])) return;

  let desconto = valorCompra > 500 ? 15 : 5;
  let total = valorCompra - (valorCompra * desconto) / 100;

  setText("res12", `O valor final da sua compra é R$${total.toFixed(2)}`);
}

function compararNumeros() {
  let numA = getInput("numA", "num");
  let numB = getInput("numB", "num");

  if (!isInputValid([numA, numB])) return;

  let msg =
    numA > numB
      ? `O número ${numA} é maior que o número ${numB}`
      : `O número ${numB} é maior que o número ${numA}`;
  setText("res13", msg);
}

function toggleVisibilidade(btnToggle) {
  const blocoAtual = btnToggle.closest(".bloco");
  const interacoes = blocoAtual.querySelector(".interacoes");
  const isHidden = interacoes.classList.contains("hidden");

  if (isHidden) {
    interacoes.classList.remove("hidden");
    btnToggle.textContent = "-";
  } else {
    interacoes.classList.add("hidden");
    btnToggle.textContent = "+";
  }
}
