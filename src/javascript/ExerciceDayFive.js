// Um objeto é uma coleção de dados e funcionalidades organizados em pares chave: valor.

let pessoa = {
    nome: "Felipe",
    idade: 23,
    falar: function () {
        console.log(`Olá, meu nome é ${this.nome}`);
    }
};

console.log(pessoa.nome); // Felipe
pessoa.falar();           // Olá, meu nome é Felipe


// Segunda exemplo de objeto
let carro = {
    marca: "Chevrolet",
    modelo: "cruze",
    falar: function () {
        console.log(`Hoje vou buscar meu ${this.modelo} na loja da ${this.marca}.`)
    }
}

console.log(carro.modelo); // curze
carro.falar();             // Hoje vou buscar meu cruse na loja da Chevrolet
