import funcoes from './funcoes';
console.log(funcoes.somar(1, 2));


console.log('teste');
//ts é um superset, ele da novas funçoes pro js, tudo do js pega no ts. ts é um transpilador, ele transpila a lingugagem dele em js. 

//no terminal dando tsc teste.ts ele cria um arquivo js. e dando tsc -w teste.js ele sincroniza esses arquivos, as mudanças no ts serao feitas no js

//se quando der tsc ja for pro dist, dando tsc -w ele ja sinca

//na pasta do teste.js criamos o arquivo tsconfig.json, que é um arquivo de configuração do ts. na pasta do arquivo fazemos o comando tsc --init

// function somar(num1:number , num2: number) :number{
//     return num1 + num2;
// } // joguei essa funcao pro funcoes.ts e ele automaticamente fez um funcoes.js provavelmente devido ao tsc -w

//podemos declarar variaveis e ja definir o tipo delas logo na declaração
let nome: string; 
let array: number[]=[];

// nome = "1"; //era pra ele crizar comigo colocando esse 1 como string aqui
array.push(1);

console.log(somar(13, 99)); 
//se deixar vazio ele da erro no ts, o js nao acusa o erro 

//o typescript é menos interessante trabalhando sozinho, exceto pra voce praticar e trabalhar com projetos maiores.