//Operações em Array
const arr = [1, 2, 3, 4, 5, 9, 8];

//Pecorre cada item do vetor e executa
const newArr = arr.map(function(item) {
  return item * 2;
});

//Consumir todo o vetor e transformar em uma unica variavel
const sum = arr.reduce(function(total, next) {
  return total + next;
});

//Ele filtra os numeros do Array (Ex: Numeros Pares)
const filter = arr.filter(function(item) {
  return item % 2 === 0;
});

// Ele irá encontrar dentro do array
const find = arra.find(function(item) {
  return item === 2;
});

//Arrow Function
const newArrArrow = arr.map(item => {
  return item * 2;
});

const newArrArrowMap = arr.map(item => item * 2);

//NÃO RECOMENDADO
const testeArrowN = () => {
  return "teste";
};
const testeArrowObject = () => ({
  nome: "Diego"
});

//Valores Padrao (Função)
function somaPa(a = 3, b = 6) {
  return a + b;
}
//Arrow
const somaArrowPadrao = (a = 3, b = 6) => a + b;

//Desestruturação de Objetos
const usuario = {
  nome: "Diego",
  idade: 23,
  endereco: {
    cidade: "Rio do Sul",
    estado: "SC"
  }
};

const {
  nome,
  idade,
  endereco: { cidade }
} = usuarioDestru;

function monstraNome({ nome, idade }) {
  console.log(nome);
}

//Operadores rests
const usarioRest = {
  nome: "Diego",
  idade: 23,
  empresa: "RocketSeat"
};

const { nomeRest, ...resto } = usarioRest;

const [a, b, ...c] = arr;

function somaRest(...params) {
  return params.reduce((total, next) => total + next);
}

console.log(soma(1, 3, 4));

//Operadores pread
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];
const usarioPread = {
  nome: "Diego",
  idade: 23,
  empresa: "RocketSeat"
};

const usuario2 = { ...usuario1, nomePread: "Gabriel" };

//Template Literals
const nomeTemplate = "Diego";
const idadeTemplate = 23;

console.log(`Meu Nome é ${nome} e tenho ${idade}`);

//Object Short Syntax - Se as variaveis tiverem o mesmo nome
const nomeShort = "Diego";
const idadeShot = 23;

const usuarioObject = { nomeShort, idadeShot, empresa: "Rocketseat" };

//Chamar o modulo 2
// import { somaModulo2, subModulo2 } from "./modulo2";
// import somaDefault, { somaModulo21, subModulo21 } from "./modulo2";
// import * as modulo from "./modulo2";
// console.log(somaModulo2(1, 2));
// console.log(subModulo2(1, 2));
// console.log(somaDefault(1, 2));
