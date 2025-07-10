// Mini Projeto prático: Lista de Produtos


const produtos = [
    { nome: "Camisa", preco: 50 },
    { nome: "Calça", preco: 120 },
    { nome: "Boné", preco: 30 }
];

// 1. Filtrar produtos acima de 40
const caros = produtos.filter(p => p.preco > 40);

// 2. Mapear nomes dos produtos
const nomes = produtos.map(p => p.nome);

// 3. Calcular total com reduce
const total = produtos.reduce((soma, p) => soma + p.preco, 0);

console.log(caros);  // Camisa e Calça
console.log(nomes);  // ["Camisa", "Calça", "Boné"]
console.log(total);  // 200


// Crie um array de preços e gere um novo array com 10% de desconto em cada item.
const precos = [100, 200, 300, 400];

const desconto = precos.map((preco) => preco - (preco * 10 / 100));

console.log(desconto); // Resultado esperado: [90, 180, 270, 360]
