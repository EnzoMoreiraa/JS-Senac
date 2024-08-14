// // Interpretação entre código

// // 1. a) 10 50 b) Nada, não tem o que imprimir

// // 2. a) Ela irá transformar todo o texto em minúsculo e caso haja a palavra "cenoura" retornará true
// // b) true true false

// // Construção entre código

// // 1. a)

// function amI() {
//     alert(`Meu nome é Moreira, tenho 15 anos, moro em São Leopoldo e sou estudante`)
// }

// amI()

// // b)

// function isMe(name, age, city, work) {
//     alert(`Eu sou ${name}, tenho ${age} anos, moro em ${city} e sou ${work}`)
// }

// isMe(`Moreira`, 15, `São Leopoldo`, `estudante`)

// // 2. a)

// function soma(num1, num2) {
//     const soma = num1 + num2
//     return soma
// }

// alert(`Sua soma é: ${soma(10, 15)}`)

// // b)

// function isHigh(num1, num2) {
//     const high = num1 >= num2
//     return high
// }

// isHigh(15, 10)

// if (num1 >= num2) {
//     alert(`O primeiro número é maior ou igual ao segundo`)
// } else {
//     alert(`O primeiro número é menor que o segundo`)
// }

// // c)

// function isEven(num) {
//   const even = num % 2 == 0;
//   return even
// }

// let num = Number(isEven(10))

// if (num == true) {
//     alert(`Seu número é par`)
// } else {
//     alert(`Seu número é ímpar`)
// }

// // d)
// function lowSent(frase) {
//     const fraseMin = frase.toLowerCase()
//     const fraseNum = frase.length()
//     alert(`Sua frase em mínusculo é ${fraseMin} \nA quantidaentre entre carácter em sua frase é ${fraseNum}`)
// }

// lowSent(`Super Guigo e Comandante Vitor`)

// // 3. a)

// function multi(a, b){
//     const multi = a*b
//     return multi
// }

// function div(a, b) {
//     const div = a/b
//     return div 
// }

// function add(a, b) {
//     const add = a+b
//     return add
// }

// function sub(a, b){
//     const sub = a-b
//     return sub
// }

// let num1 = Number(prompt(`Insira seu primeiro número`))

// let num2 = Number(prompt(`Insira seu segundo número`))


// alert(`A soma entre ${num1} e ${num2} é ${add(num1, num2)} \nA subtração entre ${num1} e ${num2} é ${sub(num1, num2)} \nA multiplicação entre ${num1} e ${num2} é ${multi(num1, num2)} \nA divisão entre ${num1} e ${num2} é ${div(num1, num2)}`)

// Desafio

let cateto1 = Number(prompt(`Insira seu primeiro cateto`))
let cateto2 = Number(prompt(`Insira seu segundo cateto`))

function calPitagoras(cat1, cat2) {
    const hipotenusa = (cat1 * cat1) + (cat2 * cat2)
    hipotenusa = Math.sqrt(hipotenusa)
    return hipotenusa
}

alert(`A hipotenusa entre ${cateto1} e ${cateto2} é ${calPitagoras(cateto1, cateto2)}`)