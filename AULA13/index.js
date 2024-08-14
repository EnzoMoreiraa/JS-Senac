// let a = 1

// function printVariable() {
//     let b = 2
//     console.log(`Variável A: ${a}`)
//     console.log(`Variável B: ${b}`)
// }

// printVariable()

//Teste Função com parâmetro

// function nome(name) {
//     console.log(`Olá ${name}!`)
// }

// nome(`Moreira`)
// nome(`Machado`)
// nome(`Felipo`)

//Teste Função com return

function multi(a, b){
    const multi = a*b
    return multi
}

function div(a, b) {
    const div = a/b
    return div 
}

function add(a, b) {
    const add = a+b
    return add
}

function sub(a, b){
    const sub = a-b
    return sub
}

let num1 = Number(prompt(`Insira seu primeiro número`))

let num2 = Number(prompt(`Insira seu segundo número`))

let questionOp = Number(prompt(`Insira a operação desejada \n[1]Adição \n[2]Subtração \n[3]Multiplicação \n[4]Divisão`))

if (questionOp == 1) {
    alert(`A soma de ${num1} e ${num2} é ${add(num1, num2)}`)
} else if (questionOp == 2) {
    alert(`A subtração de ${num1} e ${num2} é ${sub(num1, num2)}`)
} else if (questionOp == 3) {
    alert(`A multiplicação de ${num1} e ${num2} é ${multi(num1, num2)}`)
} else if (questionOp == 4) {
    alert(`A divisão de ${num1} e ${num2} é ${div(num1, num2)}`)
}