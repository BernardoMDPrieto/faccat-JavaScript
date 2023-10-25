// Descrição   : Somar os dois maiores valores informados pelo usuário!

let armario = 0
let soma = 0
let valorA = parseInt(prompt("Informe o primeiro valor"))
let valorB = parseInt(prompt("Informe o segundo valor"))
let valorC = parseInt(prompt("Informe o terceiro valor"))

if (valorA > valorB){ 
   armario=valorA
   valorA=valorB
   valorB=armario
}
if (valorC < valorB){
   armario=valorC
   valorC=valorB
   valorB=armario
}
if (valorB < valorA){
   armario=valorA
   valorA=valorB
   valorB=armario
}
soma=valorB+valorC
alert("A soma dos dois maiores é "+soma)