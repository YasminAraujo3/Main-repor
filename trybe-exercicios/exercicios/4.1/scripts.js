const Name = "Yasmin";
const BirthCity = "Brasília";
let birthYear = "1996";

let base = '5';
let altura = '8';
let area = base * altura;
let perimetro = base * altura + base * altura;


console.log(Name);
console.log(BirthCity);
console.log(birthYear);

console.log(base);
console.log(altura);
console.log(area);
console.log(perimetro);

let nota = 86

if (nota >= 80) {
  console.log("Parabéns, voce foi aprovado!");
}
else if (nota >= 60 && nota < 80) {
  console.log("Voce esta na lista de espera.");
}
else {
  console.log("Esta reprovado.");
}


let candidato = 'Aprovado';

switch (candidato) {
  case 'Aprovado':
    console.log('nota acima de 80');
    break;

  case 'Lista':
    console.log('nota maior ou igual a 60');
    break;
  
  case 'Reprovado':
    console.log('nota menor que 60');
    break;

  default:
    console.log('Não se aplica');  
}