// Crie uma função criarSaudacao(nome) que retorna uma função que exibe:
// "Bem-vindo, [nome]!"

function criarSaudacao(nome) {
    return function () {
        console.log(`Bem-vindo, ${nome}!`);
    }
}

// Usando a closure
const saudacaoFelipe = criarSaudacao("Felipe");
const saudacaoAna = criarSaudacao("Ana");

saudacaoFelipe(); // "Bem-vindo, Felipe!"
saudacaoAna();    // "Bem-vindo, Ana!"
