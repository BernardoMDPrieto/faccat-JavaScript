// Descrição   : somar a idade do homem mais velho com a mulher mais nova depois o produto do 
// homem mais novo com a mulher mais velha!
let homemNovo = 0
let homemVelho = 0
let mulherNova = 0
let mulherVelha = 0
let homemA = parseInt(prompt("Informe a idade do primeiro homem"))
let homemB = parseInt(prompt("Informe a idade do segundo homem"))
let mulherA = parseInt(prompt("Informe a idade da primeira mulher"))
let mulherB = parseInt(prompt("Informe a idade da segunda mulher"))
if( homemA > homemB){
   homemVelho=homemA
   homemNovo=homemB
}else{
   homemVelho=homemB
   homemNovo=homemA
}
if( mulherA > mulherB){
   mulherVelha=mulherA
   mulherNova=mulherB
} else{
   mulherVelha=mulherB
   mulherNova=mulherA
}
let soma = homemVelho+mulherNova
let produto = homemNovo*mulherVelha
alert("A soma do homem mais velho com a mulher mais nova é "+soma)
alert("O produto do homem mais novo com a mulher mais velha é "+produto)