// Crie uma função chamada mostrarMensagem que exibe no console:
function mostrarMensagem() {
    console.log("Bem-vindo ao sistema, Felipe!")
}

mostrarMensagem();

// Crie uma função chamada boasVindas que recebe um nome como parâmetro e exibe:
function boasVindas(nome) {
    console.log(`Olá, ${nome}, seja bem-vindo!`)
}

boasVindas("Maria")
boasVindas("João")
boasVindas("Marcos")


// Parâmetros Rest:
function somar(...numeros) {
    let soma = 0;
    for (let numero of numeros) {
        soma += numero;
    }
    return soma;
}

console.log(somar(1, 2, 3)); // Saída: 6
console.log(somar(10, 20, 30, 40, 50)); // Saída: 150


// Return
/* Crie uma função chamada calcularDesconto que recebe dois parâmetros: preco e descontoPercentual.
Ela deve retornar o valor final com desconto. */
function calcularDesconto(preco, descontoPercentual) {
    let desconto = preco * (descontoPercentual / 100);
    return preco - desconto;
}

let resultado = calcularDesconto(100, 10);
console.log(`O valor do final com desconto é ${resultado}`);


// EScopo
/* Crie uma variável mensagem fora da função com o valor "Mensagem Global"
Depois, crie uma função exibirMensagem() que define uma variável local com o mesmo nome (mensagem = "Mensagem Local") e exibe ela no console.

No final, exiba as duas mensagens (a global fora da função e a local dentro). */

let mensagem = "Mensagem global"; // variável global

function exibirMensagem() {
    let mensagem = "Mensagem Local"; // variável local (escopo da função)
    console.log(`Essa é uma ${mensagem}`);

}
exibirMensagem(); // mostra: "Essa é uma Mensagem Local"

console.log(`Fora da função: ${mensagem}`) // mostra: "Fora da função: Mensagem global"


// Hosting
/* Crie uma função chamada exibir() abaixo da chamada dela. */
exibir(); // Isso deve funcionar

function exibir() {
    console.log("Função chamada antes de ser declarada");
}

