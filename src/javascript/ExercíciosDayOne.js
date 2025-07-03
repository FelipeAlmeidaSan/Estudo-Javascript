// Primeiro Exercício

let nome = "Edilson"
let idade = 53
let cidade = "Itabaiana"
let profissão = "açougueiro"

console.log(`Olá, meu nome é ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissão}`);

// Crie variáveis para armazenar:
// nome, idade, cidade, profissão
// Depois use um console.log para escrever:
// "Olá, meu nome é João, tenho 25 anos, moro em São Paulo e sou designer."



// Segundo Exercício

let produto = {
    nome: "smartphone",
    preço: 499,
    disponibilidade: true,
}

if (produto.disponibilidade = true) {
    console.log(`O produto ${produto.nome} está disponível por ${produto.preço} reais.`);
} else {
    console.log("Produto indisponível no momento.");
}


// Crie um objeto 'produto' com nome, preço e disponibilidade (boolean).
// Crie uma condicional que verifica se o produto está disponível
// Se sim, exiba: "O produto NOME está disponível por PREÇO reais."
// Se não, exiba: "Produto indisponível no momento."



// Terceiro Exercício

const usuario = "admin"
const senha = "1234"

if (usuario === "admin" && senha === "1234") {
    console.log("Login bem-sucedido");
} else {
    console.log("Usuário ou senha incorretos")
}

// Crie duas variáveis: usuario e senha
// Depois verifique se:
// usuario === "admin" && senha === "1234"
// Se sim, mostre "Login bem-sucedido", senão "Usuário ou senha incorretos"


// Quarto Exercício
let nota = 6.5;

if (nota >= 7) {
    console.log("Aprovado");
} else if (nota >= 5 && nota < 7) {
    console.log("Recuperação");
} else {
    console.log("Reprovado");
}


// Crie uma variável nota (0 a 10)
// Se a nota for >= 7 → "Aprovado"
// Se for >= 5 e < 7 → "Recuperação"
// Senão → "Reprovado"


// Quinto Exercício

let mercado = ["azeite", "café", "ovos", "refrigerante", "arroz"];

for (let i = 0; i < mercado.length; i++) {
    if (mercado[i] === "leite") {
        console.log(`⚠️ Item especial encontrado: ${mercado[i]}`);
    } else {
        console.log(mercado[i]);
    }
}


// Crie um array com 5 itens de mercado
// Use um laço for para imprimir cada item
// Use um if dentro do for para destacar "leite" se estiver na lista
