import { getInput, setText, isNumInputValid, timer } from "./Utils.js";

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
  classificarTriangulo,
  escolherBebida,
  verificarVogalConsoante,
  calcularCalculadora,
  converterMoedaPro,
  contarAte50,
  gerarTabuada,
  somarCincoNumeros,
  listarPares,
  calcularFatorial,
  validarNota,
  calcularMediaIdades,
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

  if (!isNumInputValid([num1, num2])) return;

  let total = num1 + num2;
  setText("res3", `O resultado entre ${num1} + ${num2} é igual a ${total}`);
}

function calcularMedia() {
  let num1 = getInput("num1Es", "num");
  let num2 = getInput("num2Es", "num");
  let num3 = getInput("num3Es", "num");

  if (!isNumInputValid([num1, num2, num3])) return;

  let total = (num1 + num2 + num3) / 3;
  setText("res4", `A média é ${total.toFixed(2)}`);
}

function converterDolar() {
  let valor = getInput("valor", "num");
  let cotacao = getInput("cotacao", "num");

  if (!isNumInputValid([cotacao, valor])) return;

  let total = valor / cotacao;
  setText("res5", `R$${valor.toFixed(2)} em dólar é $${total.toFixed(2)}`);
}

function calcularTerreno() {
  let largura = getInput("largura", "num");
  let altura = getInput("altura", "num");

  if (!isNumInputValid([altura, largura])) return;

  let total = altura * largura;
  setText("res6", `A área do terreno é: ${total.toFixed(2)}m`);
}

function mostrarVizinhos() {
  let num = getInput("numAS", "num");

  if (!isNumInputValid([num])) return;

  setText("res7", `Vizinhos: ${num - 1} ${num} ${num + 1}`);
}

function verificarParImpar() {
  let parImpar = getInput("parImpar", "num");

  if (!isNumInputValid([parImpar])) return;

  parImpar = parImpar % 2 === 0 ? "par" : "impar";

  setText("res8", `O número é ${parImpar}`);
}

function verificarVelocidade() {
  let velocidade = getInput("velocidade", "num");

  if (!isNumInputValid([velocidade])) return;

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

  if (!isNumInputValid([anoNascimento, anoAtual])) return;

  let msg =
    anoAtual - anoNascimento >= 18
      ? "Você já pode dirigir!\n"
      : "Você ainda não tem idade para dirigir.\n";
  setText("res10", msg);
}

function calcularIMC() {
  let peso = getInput("pesoIMC", "num");
  let altura = getInput("alturaIMC", "num");

  if (!isNumInputValid([peso, altura])) return;

  let imc = peso / Math.pow(altura, 2);
  let msg =
    imc < 25
      ? "Você está no peso ideal"
      : "Atenção: você está acima do peso ideal";
  setText("res11", msg);
}

function calcularDesconto() {
  let valorCompra = getInput("valorCompra", "num");

  if (!isNumInputValid([valorCompra])) return;

  let desconto = valorCompra > 500 ? 15 : 5;
  let total = valorCompra - (valorCompra * desconto) / 100;

  setText("res12", `O valor final da sua compra é R$${total.toFixed(2)}`);
}

function compararNumeros() {
  let numA = getInput("numA", "num");
  let numB = getInput("numB", "num");

  if (!isNumInputValid([numA, numB])) return;

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

function classificarTriangulo() {
  let lado1 = getInput("lado1", "num");
  let lado2 = getInput("lado2", "num");
  let lado3 = getInput("lado3", "num");

  if (!isNumInputValid([lado1, lado2, lado3])) return;

  // COLOCAR VERIFICAÇÃO DE TRIANGULO: 1° LADO MAIOR Q A SOMA DOS OUTROS 2

  let resultado =
    lado1 == lado2 && lado2 == lado3
      ? "equilátero"
      : lado1 == lado2 || lado1 == lado3 || lado2 == lado3
        ? "isóceles"
        : "escaleno";

  setText("res16", `O triângulo é ${resultado}`);
}

function escolherBebida() {
  let escolha = getInput("menuBebidas");

  setText("res17", `Você escolheu: ${escolha}`);
}

function verificarVogalConsoante() {
  let letra = getInput("letraInformada");
  let resultado = "consoante";

  if (/[aeiou]/.test(letra)) resultado = "vogal";

  setText("res18", `A letra é uma ${resultado}`);
}

function calcularCalculadora() {
  let num1 = getInput("calcN1", "num");
  let num2 = getInput("calcN2", "num");
  let operador = getInput("selecionarOperacao");
  if (!isNumInputValid([num1, num2])) return;

  let resultado = 0;
  switch (operador) {
    case "+":
      resultado = num1 + num2;
      break;
    case "-":
      resultado = num1 - num2;
      break;
    case "*":
      resultado = num1 * num2;
      break;
    case "/":
      resultado = num1 != 0 ? num1 / num2 : 0;
  }

  setText("res19", `O resultado da operação é ${resultado}`);
}

function converterMoedaPro() {
  let valor = getInput("valorReal", "num");
  let moedaConverter = getInput("moedaDestino");

  if (!isNumInputValid([valor])) return;

  const taxas = {
    Dólar: 4.99,
    Euro: 5.85,
    "Peso Argentino": 0.0036,
  };

  let resultado = valor / taxas[moedaConverter];

  setText("res20", `O preço agora é ${resultado.toFixed(2)} ${moedaConverter}`);
}

async function contarAte50() {
  for (let i = 0; i <= 50; i++) {
    setText("res21", i);
    await timer(100);
  }
}

async function gerarTabuada() {
  let num = getInput("numTabuada", "num");

  if (!isNumInputValid([num])) return;

  let tabelaHTML = `
  <table style="width: 100%; border-collapse: collapse; font-family: sans-serif;">
      <thead style="background-color: #f2f2f2;">
        <tr>
          <th style="padding: 10px; border: 1px solid #ddd; color: black;">Cálculo</th>
          <th style="padding: 10px; border: 1px solid #ddd; color: black;">Resultado</th>
        </tr>
      </thead>
      <tbody id="corpoTabuada"></tbody>
    </table>
  `;

  document.getElementById("res22").innerHTML = tabelaHTML;
  let corpo = document.getElementById("corpoTabuada");

  for (let i = 0; i <= 10; i++) {
    let linha = `
      <tr style="text-align: center;">
        <td style="padding: 8px; border: 1px solid #ddd;">${num} x ${i} = </td>
        <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold; color: #27ae60;">
          ${num * i}
        </td>
      </tr>
    `;

    corpo.innerHTML += linha;
    await timer(150);
  }
}

function somarCincoNumeros() {
  let numeros = getInput("numsSoma", "vet");

  if (!isNumInputValid(numeros)) return;

  let total = 0;

  for (let n of numeros) {
    total += n;
  }

  setText("res23", `A soma dos números é ${total}`);
}

async function listarPares() {
  for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
      setText("res24", i);
      await timer(150);
    }
  }
}

function calcularFatorial() {
  let num = getInput("numFatorial", "num");

  if (!isNumInputValid([num]) || num <= 0) return;

  for (let i = num - 1; i > 0; i--) {
    num *= i;
  }

  setText("res25", `O fatorial é ${num}`);
}

function validarNota() {
  let nota = getInput("nota", "num");

  if (!isNumInputValid([nota]) || nota < 0 || nota > 10)
    return alert("Digite uma nota válida entre 0 e 10");

  setText("res26", `A nota ${nota} é válida!`);
}

function calcularMediaIdades() {
  let idades = getInput("idades", "vet");

  if (!isNumInputValid(idades) || idades.some((idade) => idade < 0))
    return alert("Digite idades válidas (números positivos)");

  let total = 0;
  for (let idade of idades) {
    total += idade;
  }
  let media = total / idades.length;
  setText("res27", `A média das idades é ${media.toFixed(2)}`);
}
