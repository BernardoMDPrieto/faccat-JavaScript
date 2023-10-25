// Descrição   : Receber três valores e verificar se os resultados representam ou não um triângulo!


let valorA = parseInt(prompt("Informe o primeiro valor"))
let valorB = parseInt(prompt("Informe o segundo valor"))
let valorC = parseInt(prompt("Informe o terceiro valor"))
let valorAB=valorA+valorB
let valorAC=valorA+valorC
let valorBC=valorB+valorC
if (valorC < valorAB && valorB < valorAC && valorA < valorBC){
   alert("É um triângulo")
} else{
   alert("Não é um triângulo")
}