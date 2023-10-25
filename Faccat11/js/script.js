var numeroDeCarrosVendidos = parseInt(prompt("Quantos carros você vendeu?"));
var valorTotalDasVendas = parseFloat(prompt("Quanto você recebeu pelas vendas?"));
var salarioFixo = parseFloat(prompt("Qual seu salário fixo?"));
var comissaoPorCarroVendido = parseFloat(prompt("Qual o valor da sua comissão?"));
var salarioTotal = parseFloat(salarioFixo + (comissaoPorCarroVendido*numeroDeCarrosVendidos) + ((valorTotalDasVendas*5)/100));

alert(`O seu salário final é de ${salarioTotal}`)


