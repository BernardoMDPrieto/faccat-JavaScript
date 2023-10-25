var salario = parseFloat(prompt("Informe o salário mensal"));
var reajuste = parseInt(prompt("Informe o porcental do reajuste"));

var porcentagemDoReajuste = salario + ((salario*reajuste)/100)

alert(`O reajuste salarial será R$${porcentagemDoReajuste}`)