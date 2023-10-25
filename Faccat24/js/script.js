// Descrição   : calcular a comissão de um vendedor sobre um produto!
let comissao = 0
let produto = parseFloat(prompt("Informe o valor de sua última venda!"))

if( produto > 1.500){
   comissao = (produto*5)/100
} else{
   comissao = (produto*3)/100
}
alert("A comissão do vendedor sobre a venda foi de: "+ comissao+"R$")
