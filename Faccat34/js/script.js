//                 Tabela Variáveis
//        X | Y |  Z | RESP
//        3 | 2 | 11 | B
//       150| 3 |455 | C
//        7 |-1 |-2  | A
//       -2 | 5 |-5  | A
//       50 | 3 |155 | C
let resposta
for (let contador = 1; contador < 6; contador++) {
    let x = parseInt(prompt("Informe o valor de X!"))
    let y = parseInt(prompt("Informe o valor de Y!"))
    let z = (x * y) + 5
    if (z <= 0) {
        resposta = "A"
    } else {
        if (z <= 100) {
            resposta ="B"
        } else {
            resposta ="C"
        }
    }
    alert(`Z: ${z} resposta: ${resposta } `)
}