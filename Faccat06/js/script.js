var base;
var altura;
var area;
var forma = prompt("Informe se será forma geométrica: r para retângulo e t para triângulo");

switch (forma) {
    case "r":
        base = parseInt(prompt("Informe a base do retângulo:"));
        altura = parseInt(prompt("Informe a altura do retângulo"));
        area = base * altura
        alert("A área do retangulo é: " + area)
        break;
    case "t":
        base = parseInt(prompt("Informe a base do retângulo:"));
        altura = parseInt(prompt("Informe a altura do retângulo"));
        area = base * altura / 2;
        alert("A área do triangulo é: " + area)
    default:
        alert("Não é uma forma especificada")
}