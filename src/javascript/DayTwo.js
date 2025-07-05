// Funções (Functions)
function dizerOla() {
  console.log("Olá, Felipe!")
}

dizerOla(); // Chamada da função


// Parâmetros 
/* Parâmetros são valores que você passa para a função usar internamente. */
function saudar(nome) {
  console.log(`Olá, ${nome}!`);
}

saudar("João"); // Saída: Olá, João!
saudar("Ana");  // Saída: Olá, Ana!



// Retorno (return)
/* Você pode usar return para devolver um valor da função. Isso é útil quando você quer guardar ou usar o resultado depois. */
function somar(a, b) {
  return a + b;
}

let resultado = somar(5, 3);
console.log(resultado); // 8



// Scope (Escopo)
/* scopo define onde uma variável existe e pode ser acessada.*/
let nome = "Felipe"; // escopo global

function mostrarNome() {
  let saudacao = "Olá"; // escopo local
  console.log(saudacao, nome); // OK
}

mostrarNome();
console.log(saudacao); // ❌ Erro: saudacao is not defined


// Hoisting
/* Hoisting é o "efeito de elevação".
O JavaScript move automaticamente declarações para o topo do escopo, mas só de var e function (não let e const). */

// Exemplo 1
teste(); // Funciona mesmo antes de declarar

function teste() {
  console.log("Função declarada antes de ser escrita");
}

// Exemplo 2
console.log(nome); // ❌ Erro: Cannot access 'nome' before initialization
let Nome = "Felipe";

// Exemplo 3 
console.log(nome); // undefined
var Name = "Felipe";
