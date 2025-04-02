// alguns dos tipos javascript: string, boolean, number...
let x:number = 10;

x = 34;

console.log(x);

//inferencia x annotation
let y = 12; // ele infere que é number
//y = "teste"; // erro
let z: number = 12;

//nem sempre ele vai interpretar como a gente quer entao ai a gente nao usa inferencia

//tipos basico
let firstName: string = "João";
let age: number = 30;
const idAdmin: boolean = true;

// em js objetos tem letra maiuscula (String) e tipos primitivos minuscula (!= string) mas em TS é sempre minusuculo

console.log(typeof firstName);

firstName = "joão";

console.log(firstName);

//object
const myNumbers: number[] = [1, 2, 3, 4, 5];
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
const user: {name: string, age: number} = {
     name: "Predo",
     age: 18,
};

console.log(user);

console.log(user.name);

// user.job = "Programador"

//any - valor q aceita qqr tipo de dado, isso é meio contra o TS porque perde a rigorosidade. mas é util em alguns casos como por exemplo quando vc nao sabe o tipo de dado que vai receber. evite.
let a:any = 0

a = "teste"
a = true
a = []

//union type- une tipos de dados para criar tipos mais complexos, como number e string.
let id: string | number = "10"
id = 200
// id = true
// id = []

//type alias (poderia chamar esse my id type de qqr coisa) o type alias é um apelido para um tipo. voce pode por exemplo falar q existe agora um tipo chamado orangutango e informar para seu codigo q orangutango é igual a number e string ao mesmo tempo.
type myIdType = number | string

const userId: myIdType = 10
const productId: myIdType = "00001"
const shirId: myIdType = 123
console.log(userId)

// enum
// tamanho de roupas (size: Médio, size: pequeno)

enum Size {
    P = "Pequeno",
    M = "Médio",
    G = "Grande"
}

const camisa = {
    name : "Camisa gola V",
    size: Size.G
}

// literal types
let teste: "algumvalor" | null;

//teste = "outrovalor"
teste = "algumvalor";
teste = null;

//funcoes
function sum(a: number , b: number){
    return a + b;
}
console.log(sum(12, 12));

function sayHelloTo(name: string): string {
    return `Hello ${name}`;
}

console.log(sayHelloTo("Matheus")); //por algum motivo ta bugando no js... colocar essa msg aqui desbugou, vai entender. deus é maravilhoso


// void é o tipo de funçao q nao retorna nada, deve ser usado quando a funçao nao tem retorno, por exemplo uma funçao que so faz um console.log, ou uma funçao que so faz um alerta.
function logger(msg: string): void {
    console.log(msg);
}

logger("teste");
function greeting(name: string, greet?: string){

}
// ^explicaçao desse nao entendi mto deixei quieto

//interfaces - de forma muito simplificadas 

interface MathFunctionsParams{
    n1: number;
    n2: number;
}

function sumNumbers(params: MathFunctionsParams){
    return params.n1 + params.n2;
}
console.log(sumNumbers({n1: 1, n2: 2}));

function multiplyNumbers(nums: MathFunctionsParams){
    return nums.n1 * nums.n2;
}

const someNumbers: MathFunctionsParams = {
    n1: 5,
    n2: 10
};

//narrowing (estreitamento)
// checagem tipos
function doSomething (info: number | boolean){
    if(typeof info === "number"){
        console.log(`o Numero é ${info}`)
    }
    console.log("não foi passado um número")
    
}
doSomething(5);
doSomething(true);
// em ts o === é chamado de "igualdade estrita" (strict equality). Ele verifica se dois valores são idênticos em valor e tipo. 

//generics
function showArraysItems<T>(arr: T[]){
    arr.forEach((item) => {
        console.log(`Item: ${item}`);
    })
}

const a1 = [1, 2, 3];
const a2 = ["a", "b", "c"];
showArraysItems(a1);
showArraysItems(a2);

//classes
class User {
    name
    role
    isApproved

        constructor(name: string, role: string, isApproved: boolean){
            this.name = name;
            this.role = role;
            this.isApproved = isApproved;
        }
}

const zeca = new User("Zéca", "Admin", true);
console.log(zeca);

//interfaces em classes (o I do inicio é maisculo pra entender q é uma interface) entendi nada
interface IVheicle{
    brand: string;
    showBrand(): void;
}

class Car implements IVheicle{

    brand
    wheels

    constructor (brand: string, wheels: number){
        this.brand = brand;
        this.wheels = wheels;
    }

    showBrand(): void {
        console.log(`A marca do carro é ${this.brand}`);
    }

}

const fusca = new Car("Volkswagen", 4);
fusca.showBrand();

// herança. é a capacidade de uma classe herdar propriedades e métodos de outra classe.
class SuperCar extends Car{
    engine

    constructor(brand: string, wheels: number, engine: number){
        super(brand, wheels);
        this.engine = engine;
    }
}

const a4 = new SuperCar("Audi", 4, 2.0);
console.log(a4);
a4.showBrand();

// decorators.  

function BaseParameters(){
    return function<T extends {new(...args: any[]): {}}>(constructor: T){
        return class extends constructor {
            id = Math.random();
            createAt = new Date();
        }

    }
}

// o @ no TS é sempre um decorator
@BaseParameters
class Person{
    name

    constructor(name: string){
        this.name = name;
    }

}

const sam = new Person("Sam");
console.log(sam);