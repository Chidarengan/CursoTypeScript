class Curso{
    canal=null;
    curso=null;
    constructor(canal, curso){
        this.canal = canal;
        this.curso = curso;
    }
}
let c1 = new Curso('CFB Cursos', 'Curso de TypeScript');
console.log(c1.canal);
console.log(c1.curso);
// usando XXXX tsc aula03.ts --target "ES2024" XXXX  
// tambem serve o --target "ESNext" ou "ESNEXT"
// dando tsc e enter ele mostra o help do arquivo 
// o tsc --init ja cria o tsconfig.json 
// escrevendo tsc tendo build e source da bom 