// Descrição   : Calcular a nota do aluno e calcular o conceito do aluno!
let conceito
let nota1 = parseInt(prompt("Informe a primeira nota do aluno"))
let nota2 = parseInt(prompt("Informe a segunda nota do aluno"))
let nota3 = parseInt(prompt("Informe a terceira nota do aluno"))
let mediaExercicios = (nota1 + nota2 + nota3) / 3
let mediaAproveitamento = (nota1 + (nota2 * 2) + (nota3 * 3) + mediaExercicios) / 7
if (mediaAproveitamento >= 9){
    conceito = "A"
} else if (mediaAproveitamento >= 7.5) {
    conceito = "B"
} else if (mediaAproveitamento >= 6){
    conceito = "C"
} else {
    conceito = "D"
}
alert("Aluno conceito: "+ conceito)
