let salarioFinal = 0; salarioHoraExtra = 0; horasExtras = 0; semanas = 0
let semanaDoMes
let salarioPorHora = parseInt(prompt("Informe o quanto o funcionário recebe por hora!"))
for (semanas = 1; semanas < 5; semanas++) {
    switch (semanas) {
        case 1:
            semanaDoMes = "primeira"
            break;
        case 2:
            semanaDoMes = "segunda"
            break;
        case 3:
            semanaDoMes = "terceira"
            break;
        case 4:
            semanaDoMes = "quarta"
            break;
        default:
            alert("Impossível")
    }
    let salarioSemanal = 0
    let horasSemanais = parseInt(prompt(`Informe quantas horas foram trabalhadas na ${semanaDoMes} semana`))
    if (horasSemanais > 40) {
        horasExtras = horasSemanais - 40
        salarioHoraExtra = salarioPorHora + (salarioPorHora / 2)
        salarioSemanal = salarioHoraExtra * horasExtras + (horasSemanais * salarioPorHora)
        alert(`O salário desta semana foi de ${salarioSemanal} R$`)
    } else {
        salarioSemanal = horasSemanais * salarioPorHora
        alert(`O salário desta semana foi de: ${salarioSemanal} R$`)
        alert(`Não foram feitas horas extras essa semana!`)
    }
    salarioFinal += salarioSemanal
}
alert(`O salário mensal foi de: ${salarioFinal} R$`)