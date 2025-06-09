//READ ONLY ARRAY
let numeros:number[] = [20,30,40];
// let numeros:array<number|string> = [20, 30, 40,"Bruno"];
// let numeros:(number|string)[] = [20, 30, 40,"Bruno"];

numeros.push(50);
numeros.unshift(10); //coloca no inicio
// .shift() tira o primeiro elemento
numeros.pop(); // tira o ultimo elemento

console.log(numeros);