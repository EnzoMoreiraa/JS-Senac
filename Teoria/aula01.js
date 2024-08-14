//Variaveis em JS

var x = 10;
//Pode ser chamada em qualquer escopo (Vaza o escopo) e seu valor pode ser alterado

let y = 10;
//Só pode ser chamada no escopo que foi criado e seu valor pode ser alterado

const z = 10;
//Só pode ser chamada no escopo que foi criado e seu valor NÂO pode ser alterado

console.log(
  `\nO valor de var é ${x}, let é ${y}, const é ${z}\n--------------------------------------------------------------------`
);
//Console.log é o escreva em portugol

//Exemplo

let nome = "Enzo";
let sobrenome = "Moreira";
let age = 15;
let estudante = true;

console.log(
  `Olá, meu nome é ${
    nome + " " + sobrenome
  }, tenho quinze anos, sou estudante? ${estudante} \n--------------------------------------------------------------------`
);

//Comparadores
//=; ==; ===; >=; <=; <; >; !=

//Exemplo:
let n1 = 10;
let n2 = "10";

n1 == n2; //.true
n1 === n2; //false

//Operadores lógico
//&& = e; || = ou; ! = negação

//Exemplo &&:

let isAdult = true;
let hasTicket = true;
let canEnter = isAdult && hasTicket;
console.log(`Seu valor lógico é ${canEnter}`); //Tabela verdade, ou seja, Saída = true

//Exemplo ||

let canEnter2 = isAdult || hasTicket;
console.log(`Seu valor lógico é ${canEnter2}`); //Tabela verdade, ou seja, Saída = true

//Exemplo !

canEnter3 = isAdult || hasTicket;
console.log(
  `Seu valor lógico é ${canEnter3}\n--------------------------------------------------------------------`
); //Tabela verdade, ou seja, Saída = false

//Condicionais

//if - else
//Exemplo

let idade = 18

if (idade >= 18) {
    console.log(`O usuário é maior de idade`)
} else {
    console.log(`O usuário não é maior de idade`)
}

console.log(`--------------------------------------------------------------------`)

idade >= 18 ? console.log("É maior de idade") : console.log("Não é maior")

console.log(`--------------------------------------------------------------------`)