let nome = "joão Felipe"
let diaNascimento = 20
let mesNascimento = "setembro"
let anoNascimento = 2002
let idade = 2025 - anoNascimento
let cidade = "Aracaju"

console.log("Nome:", nome);
console.log("Ano em que nasceu:", anoNascimento);
console.log("Idade atual:", idade);
console.log("Cidade:", cidade);

cidade = "São Paulo"
console.log("cidade atualizada:", cidade);

// Tamplate string

console.log(`Olá, meu nome é ${nome}, tenho ${idade} anos.`);
console.log(`Nasci em ${diaNascimento} de ${mesNascimento} de ${anoNascimento}.`);
console.log(`Nasci na cidade de Aracaju e atualmente moro em ${cidade}.`);

/*

Crie uma variável chamada nome e atribua o seu nome a ela.

Crie uma variável anoNascimento e atribua o ano em que você nasceu.

Crie uma variável idade e calcule a idade com base no ano atual (ex: 2025 - anoNascimento).

Crie uma variável cidade e altere seu valor depois. 


*/