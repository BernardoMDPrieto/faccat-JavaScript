// Tempo de uma partida de xadrez

let horarioInicio = parseInt(prompt("Informe o horário de início da partida"))
let horarioFinal = parseInt(prompt("Informe o horário final da partida"))
let tempoPartida = horarioFinal-horarioInicio
if(tempoPartida > 23){
    alert("A partida atingiu o limite")
} else{
    alert(`A partida durour ${tempoPartida}h`)
}
