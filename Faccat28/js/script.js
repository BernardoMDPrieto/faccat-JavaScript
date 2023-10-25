// Descrição   : Comparar 3 valores informados pelo usuário e ver qual dos três é o maior!
let maiorValor = 0
let valorA = parseInt(prompt("Informe o primeiro valor"))
let valorB = parseInt(prompt("Informe o segundo valor"))
let valorC = parseInt(prompt("Informe o terceiro valor"))
if (valorA > valorB && valorA > valorB) {
    maiorValor = valorA
}
if (valorB > valorA && valorB > valorC) {
    maiorValor = valorB
}
if (valorC > valorA && valorC > valorB) {
    maiorValor = valorC
}
alert("O maior valor é: "+ maiorValor)