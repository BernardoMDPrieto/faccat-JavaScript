// Descrição: Média aritmética de duas notas de um aluno
let media = 0
let contadora = 0
    let nota1 = parseInt(prompt("Informe a primeira nota do aluno"))
    let nota2 = parseInt(prompt("Informe a segunda nota do aluno"))
    media=(nota1+nota2)/2
    if(media > 5){
        alert(`O aluno foi aprovado! \n A média foi de ${media}`)
    } else{
        alert(`O aluno foi reprovado! \n A média foi de ${media}`)

    }
