"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

//Operações em Array
var arr = [1, 2, 3, 4, 5, 9, 8]; //Pecorre cada item do vetor e executa

var newArr = arr.map(function (item) {
  return item * 2;
}); //Consumir todo o vetor e transformar em uma unica variavel

var sum = arr.reduce(function (total, next) {
  return total + next;
}); //Ele filtra os numeros do Array (Ex: Numeros Pares)

var filter = arr.filter(function (item) {
  return item % 2 === 0;
}); // Ele irá encontrar dentro do array

var find = arra.find(function (item) {
  return item === 2;
}); //Arrow Function

var newArrArrow = arr.map(function (item) {
  return item * 2;
});
var newArrArrowMap = arr.map(function (item) {
  return item * 2;
}); //NÃO RECOMENDADO

var testeArrowN = function testeArrowN() {
  return "teste";
};

var testeArrowObject = function testeArrowObject() {
  return {
    nome: "Diego"
  };
}; //Valores Padrao (Função)


function somaPa() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;
  return a + b;
} //Arrow


var somaArrowPadrao = function somaArrowPadrao() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;
  return a + b;
}; //Desestruturação de Objetos


var usuario = {
  nome: "Diego",
  idade: 23,
  endereco: {
    cidade: "Rio do Sul",
    estado: "SC"
  }
};
var _usuarioDestru = usuarioDestru,
    nome = _usuarioDestru.nome,
    idade = _usuarioDestru.idade,
    cidade = _usuarioDestru.endereco.cidade;

function monstraNome(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade;
  console.log(nome);
} //Operadores rests


var usarioRest = {
  nome: "Diego",
  idade: 23,
  empresa: "RocketSeat"
};

var nomeRest = usarioRest.nomeRest,
    resto = _objectWithoutProperties(usarioRest, ["nomeRest"]);

var a = arr[0],
    b = arr[1],
    c = arr.slice(2);

function somaRest() {
  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  return params.reduce(function (total, next) {
    return total + next;
  });
}

console.log(soma(1, 3, 4)); //Operadores pread

var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var arr3 = [].concat(arr1, arr2);
var usarioPread = {
  nome: "Diego",
  idade: 23,
  empresa: "RocketSeat"
};

var usuario2 = _objectSpread({}, usuario1, {
  nomePread: "Gabriel"
}); //Template Literals


var nomeTemplate = "Diego";
var idadeTemplate = 23;
console.log("Meu Nome \xE9 ".concat(nome, " e tenho ").concat(idade)); //Object Short Syntax - Se as variaveis tiverem o mesmo nome

var nomeShort = "Diego";
var idadeShot = 23;
var usuarioObject = {
  nomeShort: nomeShort,
  idadeShot: idadeShot,
  empresa: "Rocketseat"
}; //Chamar o modulo 2
// import { somaModulo2, subModulo2 } from "./modulo2";
// import somaDefault, { somaModulo21, subModulo21 } from "./modulo2";
// import * as modulo from "./modulo2";
// console.log(somaModulo2(1, 2));
// console.log(subModulo2(1, 2));
// console.log(somaDefault(1, 2));
