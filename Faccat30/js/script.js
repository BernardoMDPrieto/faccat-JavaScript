// Descrição   : Ordenar três valores em ordem crescente!
let armario = 0
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
alert(`A ordem crescente é: ${valorA}, ${valorB} e ${valorC}`)