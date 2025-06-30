// Idade para votar
let idadeEleitoral = 13;

if (idadeEleitoral >= 16) {
      console.log("Está apto a votar");
} else {
      console.log("Não pode votar");
}


// Verificação do valor do número
let valorNumber = 0;

if (valorNumber > 0) {
      console.log("Este número é positivo");
} else if (valorNumber < 0) {
      console.log("Este número é negativo");
} else {
      console.log("Encontramos o zero");
}


// Switch com dias da semana
let dia = 3;

switch (dia) {
      case 1:
            console.log("Domingo");
            break;
      case 2:
            console.log("Segunda-feira");
            break;
      case 3:
            console.log("Terça-feira");
            break;
      case 4:
            console.log("Quarta-feira");
            break;
      case 5:
            console.log("Quinta-feira");
            break;
      case 6:
            console.log("Sexta-feira");
            break;
      case 7:
            console.log("Sábado");
            break;
      default:
            console.log("Dia inválido");
}


// Numeros de 1 a 10
for (let i = 1; i <= 10; i++) {
      console.log(i);
}

// Contar até 5
let contador = 1;

while (contador <= 5) {
      console.log(contador);
      contador++;
}


/*

Crie um if que verifica se uma pessoa pode votar (idade ≥ 16).

Use if/else para verificar se um número é positivo, negativo ou zero.

Crie um switch para imprimir o dia da semana com base em um número (1 = domingo, 2 = segunda...).

Crie um for que imprime os números de 1 a 10.

Use while para contar até 5.


*/

