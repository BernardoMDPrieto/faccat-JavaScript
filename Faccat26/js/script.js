// Descrição   : calcular a média de um estoque!
let quantidadeAtual = parseInt(prompt("Informe a quantidade atual em estoque!"))
let quantidadeMaxima = parseInt(prompt("Informe a quantidade máxima em estoque!"))
let quantidadeMinima = parseInt(prompt("Informe a quantidade mínima em estoque!"))
let quantidadeMedia = (quantidadeMaxima + quantidadeMinima) / 2

if (quantidadeAtual >= quantidadeMedia) {
    alert("Não efetuar compra")
} else{
    alert("Efetuar compra")
}