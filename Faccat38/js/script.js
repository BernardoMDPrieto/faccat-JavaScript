// Descrição   : login de usuário e senha!

let userCorreto = 1234
let senhaCorreta = 9999
let senha = 0
let user = parseInt(prompt("Informe o Id de usuário"))
if (user == userCorreto) {
    senha = parseInt(prompt("Agora insira a senha"))
    if (senha == senhaCorreta) {
        alert("Acesso permitido!")
    } else {
        alert("Senha incorreta!")
    }
} else {
    alert("Usuário inválido")
}