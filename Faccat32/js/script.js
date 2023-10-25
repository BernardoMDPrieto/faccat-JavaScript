// Descrição   : calcular a pontuação de dois times e depois informar se ele empatou e ou o vencedor!

let timeA = prompt("Informe o nome do primeiro time!")
let pontuacaoA = parseInt(prompt("Informe a pontuação do primeiro time!"))

let timeB = prompt("Informe o nome do segundo time!")
let pontuacaoB = parseInt(prompt("Informe a pontuação do segundo time!"))

if (pontuacaoA == pontuacaoB) {
    alert(`Os times ${timeA} e ${timeB} empataram!`)
} else if (pontuacaoA > pontuacaoB) {
    alert(`O time ${timeA} ganhou do ${timeB} time`)
} else{
    alert(`O time ${timeB}  ganhou do time ${timeA}`)
}