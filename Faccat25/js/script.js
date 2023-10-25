// Descrição   : Verificar se a conta no banco do usuário é negativo ou positivo!
let saldo = parseFloat(prompt("Informe o saldo"))
let debito = parseFloat(prompt("Informe o débito"))
let credito = parseFloat(prompt("Informe o crédito"))
let saldoAtual = (saldo-debito) + credito

if( saldoAtual > 0){
   alert("Saldo positivo")
} else{
   alert("Saldo negativo")
}
    alert("Saldo atual de " +saldoAtual)
