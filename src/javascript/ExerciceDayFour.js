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





//Crie uma IIFE que cria uma variável contador, incrementa ela 3 vezes e exibe o valor final.
(function () {
    let contador = 0;

    contador++;
    contador++;
    contador++;

    console.log(`Valor final do contador: ${contador}`);
})();
