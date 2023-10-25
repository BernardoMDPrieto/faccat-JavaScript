var eleitores = parseInt(prompt("Informe a quantidade de eleitores"));
var brancos = parseInt(prompt("Informe a quantidade de votos brancos"));
var nulos = parseInt(prompt("Informe a quantidade de votos nulos"));
var validos = parseInt(prompt("Informe a quantidade de votos válidos"));

var porcentagemEmBrancos = (brancos/eleitores)*100;
var porcentagemEmNulos = (nulos/eleitores)*100;
var porcentagemEmValidos= (validos/eleitores)*100;

alert(`${porcentagemEmBrancos}% dos votos foram em branco \n ${porcentagemEmNulos}% dos votos foram nulos \n ${porcentagemEmValidos}% dos votos foram validos`);
