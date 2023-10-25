//Calcular a idade do usuário e informar se ele pode ou não votar
let anoAtual = parseInt(prompt("Informe o ano atual"))
let anoNascimento = parseInt(prompt("Informe o ano de nascimento"))
let idade = anoAtual-anoNascimento
if(idade < 16){
    alert(`O usuário de ${idade} anos não pode votar`)
} else{
    alert(`O usuário de ${idade} anos  pode votar`)
}