//Descrição: Calcular os preços da mação junto com o desconto
let valor = 0
let macas = parseInt(prompt("Informe a quantidade de maçãs que deseja comprar!"))
if(macas > 11){
    valor = macas*1.00
} else{
    valor = macas*1.30
}
alert(`Sua compra ficou em ${valor} R$`)