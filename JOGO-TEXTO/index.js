let vida = 100;
let inv = [];
let felicidade = 70;
let forca = 60;
let dinheiro = 50;
let checkP = 0;

function checkpoint() {
  let check = Number(
    prompt(`Deseja retornar a algum checkpoint? \n[1] Sim \n[2] Não`)
  );

  if (check == 1) {
    let escolha = prompt(
      `Deseja voltar a qual checkpoint? \n[1] Último checkpoint \n[2] Outro`
    );
    if (escolha == "1" || escolha.toLowerCase().includes("último")) {
      switch (checkP) {
        case 1:
          cap1();
          break;

        case 2:
          cap2();
          break;

        default:
          break;
      }
    } else if (escolha == "2" || escolha.toLowerCase().includes("out")) {
      let outroCheckpoint = prompt(`Digite o número do checkpoint desejado:`);
      switch (outroCheckpoint) {
        case "1":
          cap1();
          break;

        case "2":
          cap2();
          break;

        default:
          break;
      }
    }
  }
}

function ends(life, inve, happy, str, money) {
  if (str > 150 && inve.includes(``)) {
    
  } else if (a) {
    
  } else if (a) {

  } else if (life <= 0) {
    return "Final Trágico"
  } else {

  }
}

function game() {
  function stats(life, inve, happy, str, money) {
    let status = prompt(
      `Deseja ver suas estatísticas atualizadas? \n[1] Sim \n[2] Não`
    );

    if (status == "1" || status.toLowerCase().includes("s")) {
      alert(
        `Suas estatísticas são: \nVida: ${life} \nInventário: ${inve} \nFelicidade: ${happy} \nForça: ${str} \nDinheiro: ${money}`
      );
    } else {
    }
  }

  function cap1() {
    alert(
      `Perina Lokure, hoje você completa 7 anos. Em meio ao conflito que devasta o Sudão do Sul, não há bolo, nem presentes. Apenas o som distante, mas aterrorizante, de tiros e explosões. Sua casa, que sempre foi um refúgio seguro, agora parece um lugar ameaçador. Sua mãe, com o rosto tenso, lhe informa que vocês precisam fugir. 'O perigo está cada vez mais próximo', diz ela, enquanto suas mãos trêmulas tentam arrumar uma pequena mochila. Seu pai, porém, acredita que vocês devem ficar e proteger o que é de vocês.\nSuas estatísticas atuais são: \nVida = 100 \nInventário: Vazio \nFelicidade = 70 \nForca = 60 \nDinheiro = 50;`
    );

    let escolha1 = (
      prompt(
        `Você tem três opções: \n[1] Ficar com seu pai \n[2] Fugir com sua mãe`
      )
    );

    if (escolha1 == "1" || escolha1.toLowerCase().includes("ficar")) {
      vida -= vida;

      alert(
        `${ends(vida)}\nDecidida a não deixar seu pai, você segura firme sua mão e juntos, tentam reforçar as defesas da casa. O som dos tiros se aproxima. Subitamente, a porta é arrombada, e antes que possam reagir, são emboscados por soldados. Em meio ao caos, você sente uma dor aguda e tudo escurece.`
      );
      
      checkpoint();
    } else if (escolha1 == "2" || escolha1.toLowerCase().includes(`fugir`)) {
      alert(
        `Você segura a mão de sua mãe, e juntos com sua tia e irmãos, correm pela noite escura. A viagem até o Quênia é longa e cheia de perigos, mas finalmente vocês chegam ao Campo de Refugiados de Kakuma. A viagem os deixou esgotados, mas há um pequeno alívio em saber que estão seguros... por enquanto.`
      );

      inv.push(`Resiliência`);
      vida -= 10
      felicidade -= 20
      forca += 10
      checkP += 1;

      stats(vida, inv, felicidade, forca, dinheiro);
    } else if (escolha1 == "3" || escolha1.toLowerCase().includes(`procurar`)) {
      alert(
        `Você procura abrigo com um vizinho de confiança, que ajuda a esconder sua família e providencia um caminho seguro para fugir mais tarde.`
      )
    }
  }
  cap1();

  function cap2() {
    alert(
      `A Vida em Kakuma \nOs anos passam, e você cresce em Kakuma, aprendendo a sobreviver em meio às dificuldades. Aos 14 anos, você descobre sua paixão pela corrida. Correr é uma forma de escapar da realidade dura ao seu redor. Você conhece Janeth Jepkosgei, uma ex-campeã mundial de atletismo, que agora treina jovens talentos no campo.`
    );

    let escolha = prompt(
      `Escolha entre: \n[1] Dedicar-se ao treinamento com Janeth (Custo: -10 de Vida, +10 de Força, +5 de Felicidade) \n[2] Dividir seu tempo entre a escola e o treinamento (Custo: -5 de Força, +10 de Felicidade, +5 de Dinheiro)`
    );

    if (escolha == "1" || escolha.toLowerCase().includes("ded")) {
      alert(
        `Você decide se comprometer completamente com a corrida. Embora exaustivo, você sente que está se tornando mais forte e mais próxima do seu sonho.`
      );
      vida -= 10;
      forca += 10;
      felicidade += 5;

    } else {
      alert(
        `Você decide equilibrar seus estudos com o treinamento, garantindo uma pequena renda com bicos no campo, mas com menos progresso no esporte.`
      );
      dinheiro += 5;
      forca -= 5;
      felicidade += 10;
    }

    stats(vida, inv, felicidade, forca, dinheiro);
  }
  cap2();

  function cap3() {
    alert(
      `A Primeira Competição \nAos 16 anos, você é convidada a participar de uma competição regional de corrida. É a sua primeira grande oportunidade de mostrar seu talento fora de Kakuma.`
    );

    let escolha = prompt(
      `Escolha entre: \n [1] Competir com tudo que você tem (Custo: -20 de Vida, +20 de Força) \n [2] Correr com cautela, evitando lesões (Custo: -10 de Força, +10 de Felicidade)`
    );

    if (escolha == "1" || escolha.toLowerCase().includes("ded")) {
      alert(
        `Você decide se comprometer completamente com a corrida. Embora exaustivo, você sente que está se tornando mais forte e mais próxima do seu sonho. \nVida: ${(vida -= 10)} \nForça: ${(forca += 10)} \nFelicidade: ${(felicidade += 5)}`
      );
    } else {
      alert(
        `Você decide equilibrar seus estudos com o treinamento, garantindo uma pequena renda com bicos no campo, mas com menos progresso no esporte \nDinheiro: ${(dinheiro += 5)} \nForça: ${(forca -= 5)} \nFelicidade: ${(felicidade += 10)}`
      );
    }
    stats(vida, inv, felicidade, forca, dinheiro);
  }
  cap3();

  function cap4() {
    
  }
} //+15