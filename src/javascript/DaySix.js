// Visão geral dos principais métodos

/*
| Método      | Para que serve                                        |
| ----------- | ----------------------------------------------------- |
| `map()`     | Transforma todos os elementos e retorna um novo array |
| `filter()`  | Filtra elementos que atendem a uma condição           |
| `reduce()`  | Reduz o array a um único valor                        |
| `forEach()` | Itera sobre cada item sem retornar nada               |
| `find()`    | Retorna o primeiro item que satisfaz a condição       |
| `some()`    | Verifica se **algum item** passa no teste (boolean)   |
| `every()`   | Verifica se **todos os itens** passam no teste        |

*/




// Map
map()

const numeros = [1, 2, 3, 4];

const dobrados = numeros.map((n) => n * 2);

console.log(dobrados); // [2, 4, 6, 8]


//  Filtra os itens com base em uma condição booleana
filter()

const Numeros = [1, 2, 3, 4, 5];

const pares = numeros.filter((n) => n % 2 === 0);

console.log(pares); // [2, 4]


// Reduz todos os elementos a um único valor (número, string, objeto...)
reduce()

const NUMEROS = [10, 20, 30];

const soma = numeros.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);

console.log(soma); // 60

//  Executa uma função para cada item, mas não retorna nada
forEach()

const frutas = ["banana", "maçã", "laranja"];

frutas.forEach((fruta, i) => {
    console.log(`${i + 1}: ${fruta}`);
});


//  Retorna o primeiro item que satisfaz a condição
find()

const produtos = [
    { nome: "Notebook", preco: 3000 },
    { nome: "Mouse", preco: 50 }
];

const caro = produtos.find(p => p.preco > 1000);
console.log(caro); // { nome: "Notebook", preco: 3000 }


// Verificam condições em alguns ou todos os itens
// some()  every()

const notas = [6, 7, 8];

console.log(notas.some(n => n < 7)); // true
console.log(notas.every(n => n >= 6)); // true



// array.map(x => ...);      Transforma
// array.filter(x => ...);   Filtra
// array.reduce((a, x) => a + x, 0);  Reduz
// array.forEach(x => ...);  Executa
// array.find(x => ...);     Primeiro que satisfaz
// array.some(x => ...);     Algum satisfaz?
// array.every(x => ...);    Todos satisfazem?

