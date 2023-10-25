// Descrição   : Carrinho de compras e desconto em quantidade!
let resposta
let desconto = 0
let finalPreco = 0
do {
    let nome = prompt("Informe o nome do produto")
    let quantidadeProduto = parseInt(prompt("Informe a quantidade do produto"))
    let precoDoProduto = parseFloat(prompt("Informe o preço do produto"))
    let total = quantidadeProduto * precoDoProduto
    if (quantidadeProduto <= 5) {
        desconto = (2 / 100) * precoDoProduto
    } else {
        if (quantidadeProduto > 5 && quantidade <= 10) {
            desconto = (3 / 100) * precoDoProduto
        } else {
            desconto = (5 / 100) * precoDoProduto
        }
    }
    let totalAPagar = total - desconto
    finalPreco += totalAPagar
    alert(`O produto: ${nome} : R$${totalAPagar} ; quantidade:  ${quantidadeProduto}`)
    resposta = prompt("Deseja adicionar mais algum produto no carrinho")
} while (resposta != "nao")
alert("O valor final foi de: " + finalPreco)