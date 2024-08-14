//Exercícios de interpretação códigos

//1. a) O código faz um teste com a resposta do usuário, caso o valor inserido seja par, será imprimido no console "Passou no teste", caso não imprimirá "Não passou no teste"
//1. b) Pares
//1. c) Ímpares

//2. a) Pra identificar o preço da fruta inserida pelo usuário
//2. b) 2.25
//2. c) 5

//3. a) Está criando a variável numero
//3. b) Se o usuário inserir 10, será imprimido "Esse número passou no teste", se for -10 nada será imprimido
//3. c) Sim, pois a variável mensagem foi criada do escopo local de if, não podendo ser acessada fora dele

//Exercícios de escrita de código

//1.
// let idade = Number(prompt(`Insira sua idade`))

// if (idade >= 18) {
//     console.log(`Você pode dirigir`)
// } else {
//     console.log(`Você não pode dirigir`)
// }

// //2.

// let turno = prompt(`Insira em qual turno estuda \n[M] Matutino \n[V] Vespertino \n[N] Noturno`)

// if (turno == "M") {
//     console.log(`Bom Dia!`)
// } else if (turno == "V") {
//     console.log(`Boa Tarde!`)
// } else {
//     console.log(`Boa Noite!`)
// }

// //3.

// let turno2 = prompt(`Insira em qual turno estuda \n[M] Matutino \n[V] Vespertino \n[N] Noturno`)

// switch (turno2) {
//     case `M`:
//         console.log(`Bom Dia!`)
//         break;
       
//     case `V`:
//         console.log(`Boa Tarde!`)    
//         break
//     default:
//         console.log(`N`)
//         break;
// }

// //4. e Dedafio 1

// let filme = Number(prompt(`Insira qual gênero de filme deseja \n[1] Terror \n[2] Ação \n[3] Fantasia \n[4] Outro`))

// let price = Number(prompt(`Insira o valor do ingresso:`))

// let lanche = prompt(`Qual lanche deseja? `)

// if (filme == 3 && price <= 15) {
//     console.log(`Bom Filme! Aproveite seu ${lanche}`)
// } else {
//     console.log(`Escolha outro filme :(`)
// }


//Desafio 2

let nome = prompt(`Insira seu nome completo`)
let jogo = prompt(`Insira qual tipo de jogo deseja \n[IN] Internacional \n[DO] Doméstico`)
let jogoEtapa = prompt(`Insira qual etapa do campeonato deseja \n[SF] Semi-Final \n[DT] decisão de terceiro lugar \n[FI] Final`)
let categoria = Number(prompt(`Insira para qual categoria deseja \n[1] Categoria 1 \n[2] Categoria 2 \n[3] Categoria 3 \n[4] Categoria 4`))
let qntIngressos = Number(prompt(`Insira a quantidade de ingressos que deseja`))

let valorSF = 220

if (categoria == 1) {
    valorSF += 1100
} else if (categoria == 2){
    valorSF += 660
} else if (categoria == 3){
    valorSF += 330
} else {
    valorSF = valorSF
}

let valorDT = 170

if (categoria == 1) {
    valorDT += 490
} else if (categoria == 2){
    valorDT += 270
} else if (categoria == 3){
    valorDT += 160
} else {
    valorDT = valorDT
}

let valorFI = 330

if (categoria == 1) {
    valorFI += 1650
} else if (categoria == 2){
    valorFI += 990
} else if (categoria == 3){
    valorFI += 550
} else {
    valorFI = valorFI
}


if (jogoEtapa == `SF`) {
    console.log(`O valor de cada ingresso será $${valorSF/4,10}, seu total será $${(valorSF*qntIngressos)/4,10}`)
} else if (jogoEtapa == `DT`) {
    console.log(`O valor de cada ingresso será $${valorDT/4,10}, seu total será $${(valorDT*qntIngressos)/4,10}`)
} else {
    console.log(`O valor de cada ingresso será $${valorFI/4,10}, seu total será $${(valorFI*qntIngressos)/4,10}`)
}