// Closures
/*Um Closure é uma função que “lembra” do ambiente onde foi criada, mesmo depois que esse ambiente já terminou de executar.

Em outras palavras:
Uma função interna pode acessar variáveis da função externa, mesmo após a externa ter sido finalizada. */
function saudacao(nome) {
    return function () {
        console.log(`Olá, ${nome}`);
    }
}

const mensagem = saudacao("Felipe");
mensagem(); // "Olá, Felipe"


// Criar funções com comportamento personalizado:
function multiplicador(fator) {
    return function (n) {
        return n * fator;
    };
}

const dobrar = multiplicador(2);
const triplicar = multiplicador(3);

console.log(dobrar(5));     // 10
console.log(triplicar(5));  // 15


// Simular variáveis privadas:
function contador() {
    let valor = 0;

    return {
        incrementar: function () {
            valor++;
        },
        obter: function () {
            return valor;
        }
    }
}

const c = contador();
c.incrementar();
c.incrementar();
console.log(c.obter()); // 2


// IIFE (Immediately Invoked Function Expression)
// É uma função que é definida e executada imediatamente.
(function () {
    console.log("Executando imediatamente");
})();



// Exemplo prático com IIFE + Closure:
const contador = (function () {
    let valor = 0;

    return {
        incrementar: function () {
            valor++;
        },
        obter: function () {
            return valor;
        }
    };
})();

contador.incrementar();
contador.incrementar();
console.log(contador.obter()); // 2
