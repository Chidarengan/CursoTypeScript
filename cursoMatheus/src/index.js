"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// alguns dos tipos javascript: string, boolean, number...
let x = 10;
x = 34;
console.log(x);
//inferencia x annotation
let y = 12; // ele infere que é number
//y = "teste"; // erro
let z = 12;
//nem sempre ele vai interpretar como a gente quer entao ai a gente nao usa inferencia
//tipos basico
let firstName = "João";
let age = 30;
const idAdmin = true;
// em js objetos tem letra maiuscula (String) e tipos primitivos minuscula (!= string) mas em TS é sempre minusuculo
console.log(typeof firstName);
firstName = "joão";
console.log(firstName);
//object
const myNumbers = [1, 2, 3, 4, 5];
// ^o number ta sendo tipado no tipo de variavel mas precisa por o [] para dizer que é um array de number
console.log(myNumbers);
console.log(myNumbers.length);
console.log(firstName.toUpperCase());
myNumbers.push(6);
console.log(myNumbers);
//tuplas
// let myTuple:[number, string, string[]]
// myTuple = [5, "teste", ["a", "b"]];
// essa parte de tupla nao entendi como funciona e deu erro
// object literals -> {prop: value}
const user = {
    name: "Predo",
    age: 18,
};
console.log(user);
console.log(user.name);
// user.job = "Programador"
//any - valor q aceita qqr tipo de dado, isso é meio contra o TS porque perde a rigorosidade. mas é util em alguns casos como por exemplo quando vc nao sabe o tipo de dado que vai receber. evite.
let a = 0;
a = "teste";
a = true;
a = [];
//union type- une tipos de dados para criar tipos mais complexos, como number e string.
let id = "10";
id = 200;
const userId = 10;
const productId = "00001";
const shirId = 123;
console.log(userId);
// enum
// tamanho de roupas (size: Médio, size: pequeno)
var Size;
(function (Size) {
    Size["P"] = "Pequeno";
    Size["M"] = "M\u00E9dio";
    Size["G"] = "Grande";
})(Size || (Size = {}));
const camisa = {
    name: "Camisa gola V",
    size: Size.G
};
// literal types
let teste;
//teste = "outrovalor"
teste = "algumvalor";
teste = null;
//funcoes
function sum(a, b) {
    return a + b;
}
console.log(sum(12, 12));
function sayHelloTo(name) {
    return `Hello ${name}`;
}
console.log(sayHelloTo("Matheus")); //por algum motivo ta bugando no js... colocar essa msg aqui desbugou, vai entender. deus é maravilhoso
// void é o tipo de funçao q nao retorna nada, deve ser usado quando a funçao nao tem retorno, por exemplo uma funçao que so faz um console.log, ou uma funçao que so faz um alerta.
function logger(msg) {
    console.log(msg);
}
logger("teste");
function greeting(name, greet) {
}
function sumNumbers(params) {
    return params.n1 + params.n2;
}
console.log(sumNumbers({ n1: 1, n2: 2 }));
function multiplyNumbers(nums) {
    return nums.n1 * nums.n2;
}
const someNumbers = {
    n1: 5,
    n2: 10
};
//narrowing (estreitamento)
// checagem tipos
function doSomething(info) {
    if (typeof info === "number") {
        console.log(`o Numero é ${info}`);
    }
    console.log("não foi passado um número");
}
doSomething(5);
doSomething(true);
// em ts o === é chamado de "igualdade estrita" (strict equality). Ele verifica se dois valores são idênticos em valor e tipo. 
//generics
function showArraysItems(arr) {
    arr.forEach((item) => {
        console.log(`Item: ${item}`);
    });
}
const a1 = [1, 2, 3];
const a2 = ["a", "b", "c"];
showArraysItems(a1);
showArraysItems(a2);
//classes
class User {
    constructor(name, role, isApproved) {
        this.name = name;
        this.role = role;
        this.isApproved = isApproved;
    }
}
const zeca = new User("Zéca", "Admin", true);
console.log(zeca);
class Car {
    constructor(brand, wheels) {
        this.brand = brand;
        this.wheels = wheels;
    }
    showBrand() {
        console.log(`A marca do carro é ${this.brand}`);
    }
}
const fusca = new Car("Volkswagen", 4);
fusca.showBrand();
// herança. é a capacidade de uma classe herdar propriedades e métodos de outra classe.
class SuperCar extends Car {
    constructor(brand, wheels, engine) {
        super(brand, wheels);
        this.engine = engine;
    }
}
const a4 = new SuperCar("Audi", 4, 2.0);
console.log(a4);
a4.showBrand();
// decorators.  
function BaseParameters() {
    return function (constructor) {
        return class extends constructor {
            constructor() {
                super(...arguments);
                this.id = Math.random();
                this.createAt = new Date();
            }
        };
    };
}
// o @ no TS é sempre um decorator
let Person = class Person {
    constructor(name) {
        this.name = name;
    }
};
Person = __decorate([
    BaseParameters
], Person);
const sam = new Person("Sam");
console.log(sam);
