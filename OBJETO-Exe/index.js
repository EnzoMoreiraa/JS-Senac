// //1. a) No console será impresso: "Millie Bobby Brown", "Sadie Sink", "{ canal: 'HBO Max', horario: '18h' }"

// //2. a)  No console será impresso: "Carlos", true
// //b) console.log(carro.modelo)

// //3. a) 8, 14 (8 e 14)
// // b) console.log(calculadora.soma(7, 2))
// /*
// c)
// mult: function(a, b) {
//     return a * b;
// }

// div: function(a, b){
//     retrun a / b
// }
// */

// // d) Para quando a função ser invocada, o return retorna o valor que foi inserido, por exemplo, na função soma, retornará o valor de a+b, que serão inserida pelo usuário

// //Exercício de escrita de código
// //1)

// const eu = {
//   nome: "Enzo",
//   apelidos: ["Moreira", "Mr. Luvinhas", "Moreirinha"],
// };

// alert(
//   `Olá, me chamo ${eu.nome}, mas pode me chamar de ${nome.apelidos[0]} e ${nome.apelidos[1]}, se treinar comigo pode me chamar ${nome.apelidos[2]}`
// );

// //2)

// const listaDeTarefas = {
//   nome: "Moreira",
//   tarefas: [
//     { descricao: "Estudar para a prova", concluida: false, prioridade: "alta" },
//     { descricao: "Limpar o quarto", concluida: false, prioridade: "média" },
//   ],
// };

// listaDeTarefas.tarefas.push({ descricao: "Cuidar do irmão", concluida: false, prioridade: "alta" },)

// listaDeTarefas.tarefas[0].concluida = true;

// //3)

// function whosYou() {
//   let nome = prompt("Qual seu nome?");
//   let pro = prompt("Qual sua profissão?");
//   let age = prompt("Qual sua idade?");
//   return { nome, pro, age };
// }

// let prs = whosYou();
// alert(prs);

// //4) a)

let carrinho = [];

//b)

let fruta1 = {
  nome: "Maça",
  disp: true,
};

let fruta2 = {
  nome: "Banana",
  disp: true,
};

let fruta3 = {
  nome: "Uva",
  disp: true,
};

//c)

carrinho = [fruta1.nome, fruta2.nome, fruta3.nome];

// Desafio

//1)

function movies() {
  let filme1 = {
    nome: "Frozen",
    data: 2014,
  };
  let filme2 = {
    nome: "Mulan",
    data: 1998,
  };

alert(`O primeiro filme foi lançado antes do segundo? ${filme1.data < filme2.data}`)
alert(`O primeiro filme foi lançado no mesmo ano do segundo? ${filme1.data == filme2.data}`)
}

//2)

function carr() {
alert(`Seus itens são: ${carrinho}`)
}

//3

function stk(fruta) {
  fruta.disp = !fruta.disp;
  return fruta;
}

fruta1 = stk(fruta1)

alert(fruta1)