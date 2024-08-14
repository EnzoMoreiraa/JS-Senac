// 1) 3 números, média deles

// let firstNum = Number(prompt(`Insira o primeiro número`))
// let secNum = Number(prompt(`Insira o segundo número`))
// let thirdNum = Number(prompt(`Insira o terceiro número`))

// alert(`Sua média é ${(firstNum+secNum+thirdNum)/3}`)

// 2) Peso ideal

// let altura = Number(prompt(`Insira sua altura em cm`))
// altura /= 100
// let peso = Number(prompt(`Insira seu peso`))
// let saude = (72.7*altura) - 58
// saude = Math.round(saude / 2) * 2

// alert(`Seu peso ideal é ${saude}`)

// 3) Salário por hora mês

// let salario = Number(prompt(`Quanto você ganha por hora trabalhada?`))
// let horas = Number(prompt(`Quantas horas você trabalha por dia?`))

// alert(`Então, por mês você recebe ${(salario*horas)*31}`)

// 4) Dano recebido

// let caracLife = 100
// let dano = Number(prompt(`Quanto de dano o personagem recebeu?`))

// if (caracLife-dano <= 0) {
//     alert(`Derrotado`)
// } else {
//     alert(`Seus pontos de vidas são ${caracLife-dano}`)
// }

// 5) Aprovado e Reprovado

// let nota1 = Number(prompt(`Insira sua primeira nota?`))
// let nota2 = Number(prompt(`Insira sua segunda nota?`))

// if ((nota1 + nota2)/2 >= 7) {
//     alert(`Aprovado`)
// } else if ((nota1+nota2)/ 2 >= 10) {
//     alert(`Aprovado com exito`)
// } else {
//     alert(`Reprovado`)
// }

// 6) Maior e menor

// array = [99, 0, -1]

// alert(`O mairo número de seu array é ${Math.max(...array)}\nO menor número de seu array é ${Math.min(...array)}`)

// 7) Usuário e senha

// let usuário = prompt(`Insira seu usuário`)
// let senha = prompt(`Insira sua senha`)
// senha = senha.toLowerCase().trim()
// usuário = usuário.toLowerCase().trim()

// alert(`Seu usuário é ${usuário} e sua senha é ${senha}`)

// 8) Substituir "o" e "a" por "x"

// let frase = prompt(`Insira uma frase`)

// frase.replaceAll("a", "x")
// frase.replaceAll("o", "x")

// alert(`Sua nova frase é: ${frase}`)

// 9) Email sem espaço

// let email = prompt(`Insira seu email`)
// email.trim()

// alert(`Seu email é ${email}`)

// 10) Soma e média

// let nums = [33, 44, 24, 11, 50]
// let soma = nums[0] + nums[1] + nums[2] + nums[3] + nums[4]

// alert(`A soma de seu array é ${soma}`)
// alert (`Sua média é ${soma/nums.length}`)

// 11) Números ímpares entre 50 e 1

// for (let i = 1; i <= 50; i++) {
//     if (i % 2 !== 0) {
//         console.log(i);
//     }
// }

// 12) Senha correta e incorreta

// let senha = prompt(`Insira sua senha`)
// senha.trim().toLowerCase

// let tranca = prompt(`Qual sua senha?`)

// while (true) {
//     if (tranca !== senha) {
//         tranca = prompt(`Senha incorreta, insira novamente`)
//     } else {
//         alert(`Senha correta`)
//         break
//     }
// }

// 13) Média das notas

// let qtdNotas = Number(prompt("Insira a quantidade de notas que obteve neste trimestre"));
// let notas = [];

// for (let i = 0; i < qtdNotas; i++) {
//     let nota = Number(prompt(`Insira sua ${i + 1}° nota`));
//     notas.push(nota);
// }

// let soma = 0;
// for (let i = 0; i < notas.length; i++) {
//     soma += notas[i];
// }

// alert(`Sua média de notas foi ${soma/notas.length}`);

// 14) 

let num = []

for (let i = 0; i < 2; i++) {
    let nums = prompt(`Insira o ${i+1}° número`)
    num.push(nums)
}

alert(`Os números pares são: ${num.filter(num % 2 == 0)}\nOs númeors ímpares são: ${num.filter(num % 2 == 1)}`)
addEventListener.le

// 15)