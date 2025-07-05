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



// Crie uma função chamada calcularDesconto que recebe dois parâmetros: preco e descontoPercentual.
// Ela deve retornar o valor final com desconto.
