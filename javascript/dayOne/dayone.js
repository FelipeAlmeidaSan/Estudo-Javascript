// Variavéis

let name = "João";     // Pode ser alterado depois
const age = 25;        // Valor fixo, nõa pode mudar
var city = "Pelotas"   // Antiga forma de declarar variáveis


// Tipos de Dados

String    // "texto"
Number    //  10 , 3,534
Boolean   //  true ou false
Array     //  [1,3,5,7]
Object    //  {nome: Felipe}
null      //  Ausência de valor
undefined //  Valor nõa definido

// Exemplo de tipos de dados

let nome = "Felipe";
let idade = 30;
let ativo = true;
let lista = [1, 5, 9];
let usuário = { nome: "Ana", idade: 20 };

// Operadores

// --- Aritméticos

// +  Soma
// -  Subtração
// *  Multiplicação
// /  Divisão
// %  Resto da divisão

// --- De comparação

// ==     Igual (valor)
// ===    Estritamente igual (valor e tipo)
// !=     Diferente
// !==    Estritamente diferente
// >      Maior que
// <      Menor que
// >=     Maior ou igual
// <=     Menor ou igual


// --- Lógicos

// &&   E
// ||   Ou 
// !    Não

// Exemplo:

let a = 10;
let b = 30;

console.log(a < b);
console.log(a < b && b === 30);

//Controle de Fluxo

// --- Condicional if, else if , else

let minhaIdade = 18;
if (minhaIdade < 18) {
    console.log("Menor de idade");

} else if (minhaIdade === 18) {
    console.log("Tenho 18 anos")

} else {
    console.log("Maior de idade");
}

// --- Swith 

let cor = "azul";

switch (cor) {
    case "vermelho":
        console.log("cor é vermelha");
        break;
    case "azul":
        console.log("cor é azul");
        break;
    default:
        console.log("cor desconhecida");
}

// Laços de repetição (for, while, do while)

for (let i = 0; i < 5; i++) {
    console.log(i);
}

let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}