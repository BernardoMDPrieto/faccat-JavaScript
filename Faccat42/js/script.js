// Descrição   : Verificar a aposentadoria de um funcionário!


let codigo = parseInt(prompt("Informe o código do empregado"))
let anoNascimento = parseInt(prompt("Informe o ano de nascimento do empregado"))
let anoIngressoEmpresa = parseInt(prompt("Informe o ano de ingressão na empresa"))
let anoAtual = parseInt(prompt("Informe o ano atual"))
let idade = anoAtual - anoNascimento
let tempoServico = anoAtual - anoIngressoEmpresa
if (idade > 64) {
    alert(codigo + ": Requerer aposentadoria")
} else if (tempoServico > 29) {
    alert(codigo + ":Requerer aposentadoria")
} else if (idade > 59 && tempoServico > 24) {
    alert(codigo + ":Requerer aposentadoria")
} else {
    alert(codigo + ":Não requerer")
}
