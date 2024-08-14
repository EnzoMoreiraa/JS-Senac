// //INTERPRETAÇÃO
// //1. Está aumentando o valor da variável de valor, o resultado imprimido será 10, pois será 1+2+3+4
// //2. a) Todos os números maior que 18 do array
// //   b) Sim, removendo a condicional if
// /*3. Será impresso um asterisco para cada linha, por exemplo, na segunda linha teria dois asteriscos, e assim por diante até chegar a quarta linha*/

// //1. Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável.

// /* let bichinho = Number(prompt("Insira quantos bichinhos de estimação possui"));

// if (bichinho == 0) {
//     console.log("Pode ter um bichinho");
//     alert("Que pena! Você pode adotar um pet!");
// } else if (bichinho > 0) {
//     let nome = [];
//     for (let i = 0; i < bichinho; i++) {
//         let nomeP = prompt(`Diga o nome do seu ${i + 1}° bichinho`);
//         nome.push(nomeP);
//     }
//     alert(`Seus bichinhos são: ${nome}`);
// } */

// //2. Considere que você tenha acesso a um array  (chamado de 'array original') que é composto somente de números. Baseando-se nisso, crie um código para cada um dos itens abaixo, realizando as operações pedidas:

// arrayOriginal = [10, 20, 25, 37, 89, 99, 30, 40, 42, 50]

// let choose = Number(prompt(`Insira qual opção deseja? \n[1] Programa que imprime os valores \n[2]Programa que faça um novo array com os valores divididos por 10 \n[3] Programa que imprime os valores pares \n[4] Programa que imprime os valores contendo string \n[5] Programa que imprime os valores maior e menor`))

// switch (choose) {
//     case 1:
//         alert(`Seus valores originas são: ${arrayOriginal}`)
//         break;

//     case 2:
//         alert(`Seus valores divididos por 10 são ${arrayOriginal.map(num => num / 10).join(`, `)}`)
//         break;

//     case 3:
//         alert(`Seus valores pares são ${arrayOriginal.filter(num => num % 2 == 0).join(`, `)}`)
//         break;

//     case 4:
//         for (let i = 0; i < arrayOriginal.length; i++) {
//             console.log(`O elemento do índex ${i+1} é ${arrayOriginal[i]}`)
//         }
//         alert(`Abra o console`)
//         break;

//     default:
//         //Perdão pelo Math.()
//         alert(`O mairo número de seu array é ${Math.max(...arrayOriginal)}\nO menor número de seu array é ${Math.min(...arrayOriginal)}`)
//         break;
// }

//DESAFIO 1.
// Neste exercício vocês vão implementar uma brincadeira muito simples: "Adivinhe o número que estou pensando". Ele deve ser jogado entre duas pessoas.

let num = Number(prompt("Insira o número que pensou"));
num = Math.round(num / 2) * 2
while(num > 100 || num < 0) {
  Number(prompt(`Insira um número entre 1 e 100`))
}
let cc = 0;
alert("Vamos jogar!!");

while (true) {
  let pergunta = Number(prompt("Qual número eu pensei??"));
  alert(`O número chutado foi: ${pergunta}`);

  if (pergunta !== num) {
    if (pergunta < num) {
      alert("Você errou😪, é maior");
    } else {
      alert("Você errou😪, é menor");
    }
    cc++;
  } else {
    alert(`Acertou!!\nSeu número de tentativas foi ${cc}`);
    return;
  }
}

// DESAFIO 2 e 3
// Refaça o desfio um, mas a máquina escolherá o número de 1 a 100
// Desafio extra por Super Guigo, dar um limite de 10 tentativas, caso o usuário acerte, de a opção de jogar novamente

function iniciarJogo() {
  let num = Math.random() * (100 - 1) + 1;
  num = Math.round(num / 2) * 2;
  //   let num  = ~~(Math.random(1) * 100) Rambola Coder

  let cc = 1;

  alert("Pensei em um número entre 1 e 100");

  while (true) {
    let pergunta = Number(prompt("Qual número eu pensei??\n[0] Parar"));

    if (pergunta == 0) {
      alert(`Então você desistiu é😚\nSeu número de tentativas foi ${cc}`);
      break;
    }

    alert(`O número chutado foi: ${pergunta}`);

    if (cc >= 10) {
      alert("Número de tentativas esgotado(10)");
      let cont = prompt("Deseja continuar? \n[1] Sim \n[2] Não")
        .toLowerCase()
        .trim();
      if (cont == "1" || cont == "sim") {
        alert("Boa sorte então❤️");
        cc = 1;
      } else if (cont == "2" || cont == "não") {
        alert("Ok, boa sorte da próxima vez😘");
        break;
      }
    }

    if (pergunta != num) {
      if (pergunta < num) {
        alert("Você errou😪, é maior");
      } else {
        alert("Você errou😪, é menor");
      }
      cc++;
    } else {
      alert(`Parabéns, você acertou!!\nSeu número de tentativas foi ${cc}`);
      let cont = prompt("Deseja outra rodada? \n[1] Sim \n[2] Não")
        .toLowerCase()
        .trim();
      if (cont == "1" || cont == "sim".toLowerCase()) {
        alert("Ok, vamos mais uma vez👻");
        iniciarJogo();
      } else {
        alert("Ok, boa sorte da próxima vez😘");
      }
      break;
    }
  }
}

iniciarJogo();