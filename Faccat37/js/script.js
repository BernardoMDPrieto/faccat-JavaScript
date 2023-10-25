// Descrição   : Calcular o valor do kg da maçã e do morango, dependendo do quilo, será aplicado um desconto!
let precoMorango = 2.50
let precoMorangoDesconto = 2.20
let precoMaca = 1.80
let precoMacaDesconto = 1.50
let kgMacas = parseFloat(prompt("Informe a quantidade de macas que o usuário deseja comparar"))
let kgMorango = parseFloat(prompt("Informe a quantidade de morangos que o usuário deseja comprar"))
let valorMaca = 0
let valorMorango = 0
let descontoFinal = 0

if (kgMacas < 5) {
    valorMaca = kgMacas * precoMaca
} else {
    valorMaca = kgMacas * precoMacaDesconto
}
if (kgMorango < 5) {
    valorMorango < -kgMorango * precoMorango
} else {
    valorMorango < -kgMorango * precoMorangoDesconto
}

let valorTotal = valorMaca + valorMorango
let kgTotal = kgMacas + kgMorango

if (kgTotal > 8 || valorTotal > 25) {
    descontoFinal = valorTotal - ((10 / 100) * valorTotal)
    alert(`O preço que o cliente deve pagar é de:  ${descontoFinal} R$`)
} else {
    alert(`O preço que o cliente deve pagar é de:  ${valorTotal}R$`)
}