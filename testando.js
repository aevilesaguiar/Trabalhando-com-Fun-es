function teste1(x,y){
    return y-x;
}

teste1(10,40)

function teste2(x,y){
    return x*2;
    console.log(x)
    return x/2;
}

teste2(10)


//transformado polegadas em cm
function toInCm(length){
    return length/0.3937;
}
console.log(toInCm(1));


//Crie uma função que receba uma string e a converta em um URL
function funcaojs( d,c){

    var url="funcaojs";
    return d + url + c
}
console.log(funcaojs("www."+ url +".com.br"));

//Crie uma função que recebe uma string e retorna a mesma frase, mas com o caracter de exclamação ( ! ).

function dados(frase){
    return frase +"!";
}
console.log(dados("Olá mundo"));

//Crie uma função que calcule a idade dos cachorros, considerando que 1 ano humano, equivale a 7 anos para eles.
function idadeCachorro(idade){
    return idade *7;
}

console.log("A idade de seu cachorro é:" + idadeCachorro(5));

//Crie uma função que calcule o valor da sua hora de trabalho, tendo como parâmetro o seu salário mensal
function horatrabalho(salario){
    return 160*salario
}

console.log(horatrabalho(10));

//6.	Crie a função calculadora de IMC* de uma pessoa, que recebe a altura em centímetros e o peso em quilogramas. Em seguida, execute a função, testando diferentes 

function imc(peso, altura){
    return peso / (altura*altura);
}

console.log("o seu IMC é:" + imc(50,1.65));

//Crie uma função que receba uma string em minúsculas, converta-a em maiúsculas e as retorne. 

let text = 'hello world';
// Maiúsculo
console.log(text.toUpperCase()); // HELLO WORLD


let text2 = 'HELLO WORLD';
// Minúsculo
console.log(text2.toLocaleLowerCase()); // hello world

console.log(typeof 42);
// expected output: "number"

console.log(typeof 'blubber');
// expected output: "string"

console.log(typeof true);
// expected output: "boolean"

console.log(typeof undeclaredVariable);
// expected output: "undefined"

//Crie uma função pela qual passamos o raio de um círculo e ela retorna a circunferência.

function calculateCircumference(radius) {
    return  Math.PI * radius;
  }
  console.log(calculateCircumference(1));