// Descrição: Informar Descobrir se os valores representam qual tipo de triângulo ou se não representam!
let mens = ""
let a = parseInt(prompt("valor A"))
let b = parseInt(prompt("valor B"))
let c = parseInt(prompt("valor C"))
if (a < b+c && b<a+c && c<a+b){
    if(a == b && b == c){
      mens = "Triângulo Equilátero"
    }
      if (a==b || b==c || a==c){
         mens="Triângulo Isósceles"
      } else{
         mens="Trângulo Escaleno"
      }
    }else{
      mens="Não é possível formar um triângulo"
    }
alert(mens)
