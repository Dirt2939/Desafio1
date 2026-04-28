export const getInput = (id, tipo) => {
    const conteudo = document.getElementById(id).value
    return tipo === "num" ? parseFloat(conteudo) : conteudo

    function retornarVetor(nums) {

    }
}

export const isInputValid = (lista) => !lista.some(isNaN) || (alert("Digite números válidos"), false)

export const setText = (id, texto) => document.getElementById(id).innerHTML = texto

export const timer = (ms) => new Promise(resolve => setTimeout(resolve, ms));