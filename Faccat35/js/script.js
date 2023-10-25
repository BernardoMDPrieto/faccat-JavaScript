// Descrição   : Calcular o preço do combustível e aplicar desconto!

let gasolina = 3.30
let alcool = 2.90
let valorCombustivel = 0
let litros = 0
let combustivel = prompt("Informe o combustível: A para alcool ; G para gasolina")

switch (combustivel) {
    case "A":
        litros = prompt("Quantos litros serão comprados")
        if (litros == 20) {
            valorCombustivel = litros * (gasolina - ((3 / 100) * gasolina))
        }
        if (litros > 20) {
            valorCombustivel = litros * (gasolina - ((5 / 100) * gasolina))
        } else {
            valorCombustivel = litros * gasolina
        }
        break;

    case "G":
        litros = prompt("Quantos litros serão comprados")
        if (litros == 20) {
            valorCombustivel = litros * (alcool - ((4 / 100) * alcool))
        }
        if (litros > 20) {
            valorCombustivel = litros * (alcool - ((6 / 100) * alcool))
        } else {
            valorCombustivel = litros * alcool
        }
        break;
}
alert("O combustível custou "+ valorCombustivel+ "R$")
