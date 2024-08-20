// Status iniciais
let vida = 100;
let inv = [];
let felicidade = 70;
let forca = 60;
let dinheiro = 50;
let checkP = 0;

// Função para resetar os status
function resetStatus() {
  vida = 100;
  inv = [];
  felicidade = 70;
  forca = 60;
  dinheiro = 50;
}

// Função para exibir os status atuais
function stats() {
  alert(`
    Seus status atuais são:
    Vida: ${vida}
    Felicidade: ${felicidade}
    Força: ${forca}
    Dinheiro: ${dinheiro}
    Inventário: ${inv.join(", ")}
  `);
}

// Função que executa os checkpoints
function executeCheckpoints(checkpointNum) {
  checkpoints(checkpointNum);
}

// Função que chama os checkpoints
function checkpoints(checkpointNum) {
  for (let i = 1; i <= checkpointNum; i++) {
    switch (i) {
      case 1:
        cap1();
        break;
      case 2:
        cap2();
        break;
      case 3:
        cap3();
        break;
      case 4:
        cap4();
        break;
      case 5:
        cap5();
        break;
      case 6:
        cap6();
        break;
      case 7:
        cap7();
        break;
      case 8:
        cap8();
        break;
      case 9:
        cap9();
        break;
      default:
        console.log("Checkpoint inválido.");
        break;
    }
  }
}

// Função para verificar e gerenciar checkpoints
function checkpoint() {
  if (vida === 0) {
    resetStatus();
    game();
  } else {
    let check = prompt(`Deseja retornar a algum checkpoint? \n[1] Sim \n[2] Não`);

    if (check === "1" || check.toLowerCase().includes("s")) {
      let escolha = prompt(`Deseja voltar a qual checkpoint? \n[1] Último checkpoint \n[2] Outro`);

      if (escolha === "1" || escolha.toLowerCase().includes("último")) {
        executeCheckpoints(checkP);
      } else if (escolha === "2" || escolha.toLowerCase().includes("outro")) {
        let outroCheckpoint = prompt(`Digite o número do checkpoint desejado: [1] [2] [3] etc...`);
        let numCheckpoint = Number(outroCheckpoint);

        if (numCheckpoint >= 1 && numCheckpoint <= 10) {
          checkP = numCheckpoint;
          resetStatus();
          executeCheckpoints(checkP);
        } else {
          alert("Checkpoint inválido.");
        }
      }
    }
  }
}

function cap1() {
  alert(
    "Prólogo: Sua jornada começa em meio a guerra, onde só os mortos irão ver seu final, fuja!"
  );
  let escolha1 = prompt(
    `Você tem duas opções:\n[1] Ficar com seu pai\n[2] Fugir com sua mãe`
  );

  if (escolha1 == "1" || escolha1.toLowerCase().includes("ficar")) {
    alert(
      `Você olha para seu pai, com lágrimas nos olhos, e decide ficar ao seu lado. Ele sorri, um sorriso triste, mas cheio de orgulho, enquanto prepara as portas e janelas para o que poderia ser a última defesa da família. O som dos tiros está mais próximo agora, e o ar está denso com o cheiro da guerra. Seu coração bate forte no peito. Você segura a mão dele com força, acreditando que sua presença lhe dará a coragem necessária. Então, de repente, a porta da frente é arrombada com um estrondo ensurdecedor. Um grupo de soldados invade a casa, e antes que você possa reagir, um deles aponta a arma em sua direção. Em um segundo, tudo escurece...`
    );
    vida = 0;
    checkP = 1;

    alert("Final Trágico.");
    vida -= vida;
    checkpoint();
  } else if (escolha1 == "2" || escolha1.toLowerCase().includes("fugir")) {
    alert(
      `Com o coração apertado e lágrimas nos olhos, você agarra a mão de sua mãe. Ela segura você e seus irmãos com força, e juntos, vocês fogem pela noite. As ruas estão desertas, exceto pelo som distante de explosões e o ocasional grito de pânico. A viagem até o Campo de Refugiados de Kakuma, no Quênia, é longa e exaustiva. Durante semanas, vocês caminham por terrenos difíceis, com pouca comida e quase nenhum descanso. Mas, finalmente, vocês chegam a Kakuma, um lugar cheio de outros refugiados como vocês. A sensação de segurança é temporária, mas pela primeira vez em semanas, você consegue dormir sem o medo constante de perder tudo.`
    );

    inv.push("Resiliência");
    vida -= 10; // Perde 10 de vida na fuga
    felicidade -= 20; // Perde 20 de felicidade devido ao estresse
    forca += 10; // Ganha 10 de força pela resiliência da fuga
    checkP = 1;

    stats();
  }
}

function cap2() {
  felicidade += 20; // Ganha 20 de felicidade por estar se reconectando ao mundo
  alert(
    `Capítulo 2: A Vida no Campo de Refugiados\nVocê agora vive no Campo de Refugiados de Kakuma, no Quênia. Já se passaram alguns anos desde que você fugiu do Sudão do Sul com sua mãe e irmãos. A vida em Kakuma é difícil, mas você tem encontrado maneiras de se adaptar. Com 14 anos, você começou a perceber que correr lhe dá uma sensação de liberdade, algo que você não sente em nenhum outro lugar. Certo dia, enquanto corria pelos arredores do campo, você conhece Janeth Jepkosgei, uma antiga campeã mundial de atletismo, que agora treina jovens talentos no campo. Ela vê potencial em você e oferece a chance de se juntar ao seu grupo de treinamento. Este é um momento decisivo em sua vida.`
  );

  let escolha2 = prompt(
    `Você tem duas opções:\n[1] Dedicar-se inteiramente ao treinamento com Janeth \n[2] Dividir seu tempo entre escola e treinamento `
  );

  if (escolha2 == "1" || escolha2.toLowerCase().includes("dedicar")) {
    alert(
      `Você decide se comprometer completamente com o treinamento de Janeth. Todas as manhãs, antes do amanhecer, você se levanta e treina arduamente. O sol quente do Quênia parece implacável, e o cansaço é uma constante, mas, aos poucos, você começa a sentir seu corpo se fortalecer. Cada dia é uma batalha contra o cansaço e a dor, mas também é uma vitória pessoal. A cada quilômetro que você corre, a cada segundo que você corta do seu tempo, você sente que está mais perto de alcançar algo grande. Embora o treinamento seja exaustivo, você percebe que a corrida lhe traz uma nova forma de felicidade. O sorriso de Janeth, quando você melhora seu tempo, se torna uma pequena recompensa que aquece seu coração.`
    );
    vida -= 10; // Perde 10 de vida pelo treinamento intenso
    forca += 10; // Ganha 10 de força pelo esforço
    felicidade += 10; // Ganha 10 de felicidade por seguir sua paixão
    checkP = 2;

    stats();
  } else if (escolha2 == "2" || escolha2.toLowerCase().includes("dividir")) {
    alert(
      `Você decide encontrar um equilíbrio entre os estudos e o treinamento. Embora seu progresso na corrida seja mais lento, você se sente mais feliz ao manter a conexão com seus estudos e com as pessoas ao seu redor. Você consegue ganhar algum dinheiro fazendo pequenos trabalhos dentro do campo, ajudando a sustentar sua família e a si mesma. Janeth respeita sua escolha e lhe dá treinos que permitem que você mantenha o equilíbrio entre a corrida e a escola. Embora você não esteja evoluindo tão rapidamente quanto gostaria, o treinamento ainda lhe traz felicidade e esperança para um futuro melhor.`
    );
    forca -= 5; // Perde 5 de força devido ao menor foco no esporte
    dinheiro += 15; // Ganha 15 de dinheiro por pequenos trabalhos no campo
    checkP = 2;

    stats();
  }
}

function cap3() {
  alert(
    `Capítulo 3: A Primeira Competição\nVocê tem agora 16 anos e, graças ao treinamento com Janeth, você se tornou uma das corredoras mais rápidas do Campo de Refugiados de Kakuma. Sua dedicação ao esporte chamou a atenção de organizadores de eventos esportivos, e você foi convidada a participar de uma competição regional de atletismo. Esta será a primeira vez que você competirá fora do campo, representando não apenas a si mesma, mas todos os refugiados que compartilham da sua jornada. A pressão é imensa, e a ansiedade cresce conforme o dia da corrida se aproxima.`
  );

  let escolha3 = prompt(
    `Você tem duas opções:\n[1] Competir com tudo que tem, colocando toda sua energia na corrida\n[2] Competir com cautela, preservando seu corpo e evitando lesões`
  );

  if (escolha3 == "1" || escolha3.toLowerCase().includes("tudo")) {
    alert(
      `Você decide dar tudo de si na competição. No dia da corrida, seu coração bate mais rápido do que nunca. Quando o tiro de largada soa, você sente uma explosão de adrenalina e corre como nunca antes. Cada passada é um esforço máximo. O calor do asfalto, a torcida e o som das outras competidoras se misturam em um borrão, mas você continua focada na linha de chegada. A dor nos músculos é intensa, seu corpo clama por descanso, mas você não desiste. Ao cruzar a linha de chegada, você desaba no chão, exausta, mas o sentimento de vitória é inigualável. Sua força cresceu imensamente, mas o esforço cobrou um preço em sua saúde. Você é reconhecida como uma das estrelas em ascensão no atletismo, mas precisará de tempo para se recuperar.`
    );
    vida -= 5; // Perde 20 de vida por esforço físico intenso
    forca += 20; // Ganha 20 de força por dar o máximo
    checkP = 3;

    stats(); // Exibe as estatísticas atualizadas
  } else if (escolha3 == "2" || escolha3.toLowerCase().includes("cautela")) {
    alert(
      `Você decide correr com cautela, focando em evitar lesões e garantir que possa continuar competindo no futuro. Durante a corrida, você mantém um ritmo constante e seguro, sem forçar demais o seu corpo. Ao cruzar a linha de chegada, você não está entre as primeiras, mas também não está entre as últimas. Embora você não tenha se destacado tanto quanto poderia, você sai da competição ilesa e com uma sensação de paz. A corrida lhe trouxe alegria, e você sabe que essa foi a escolha certa para garantir que possa continuar a perseguir seu sonho sem arriscar sua saúde.`
    );
    forca -= 10; // Perde 10 de força por não se esforçar ao máximo
    felicidade += 5; // Ganha 10 de felicidade por se preservar
    vida += 10; // Ganha 10 de vida por se preservar
    checkP = 3;
    inv.push("Cautela");

    stats();
  }
}

function cap4() {
  alert(
    `Capítulo 4: O Convite\nApós a impressionante performance na competição regional, você chama a atenção de um clube de atletismo nacional que oferece a você a chance de treinar com eles. Esse é um grande passo em sua carreira, mas isso também significa deixar Kakuma e sua família para trás.`
  );

  let escolha4 = prompt(
    `Você tem duas opções:\n[1] Aceitar o convite e partir para a capital\n[2] Recusar o convite e continuar treinando com Janeth em Kakuma`
  );

  if (escolha4 == "1" || escolha4.toLowerCase().includes("aceitar")) {
    alert(
      `Você decide aceitar o convite do clube e se prepara para partir para a capital. A despedida de sua família e de Janeth é emocionante e carregada de sentimentos mistos. Seus entes queridos expressam orgulho, mas também tristeza pela sua partida. Ao chegar na capital, você é recebido com entusiasmo pelo clube e inicia um treinamento intensivo em instalações de primeira linha. O ambiente competitivo é estimulante e você percebe uma melhoria rápida em sua forma física. No entanto, a distância de sua família e a pressão constante para se destacar no novo ambiente começam a pesar sobre você. A cidade é vibrante e cheia de oportunidades, mas também apresenta desafios e solidão.`
    );
    felicidade -= 5; // Perde 5 de felicidade pela distância da família
    dinheiro += 10; // Ganha 10 de dinheiro pelo apoio do clube
    forca += 15; // Ganha 15 de força pelo treinamento intensivo
    vida += 10; // Ganha 10 pontos de vida pelas novas oportunidades recebidas, como melhor suporte médico
    checkP = 4;

    inv.push("Determinação");
    stats();
  } else if (escolha4 == "2" || escolha4.toLowerCase().includes("recusar")) {
    alert(
      `Você decide recusar o convite, optando por permanecer em Kakuma e continuar seu treinamento com Janeth. Embora saiba que está abrindo mão de uma oportunidade valiosa, você se sente reconfortada por estar perto da sua família e de sua mentora, que sempre acreditaram em você. O apoio constante de Janeth e o ambiente familiar proporcionam um sentimento de estabilidade e segurança. No entanto, você percebe que o treinamento em Kakuma não é tão avançado quanto o oferecido na capital, e isso pode afetar seu progresso a longo prazo.`
    );
    felicidade += 10; // Ganha 10 de felicidade por ficar perto de sua família
    forca -= 15; // Perde 15 de força por perder a chance de treinar com profissionais
    checkP = 4;

    stats();
  }
}

function cap5() {
  alert(
    `Capítulo 5: Sua Primeira Competição\nApós meses de intenso treinamento, o momento que você tanto esperou finalmente chegou. Você está prestes a participar da sua primeira grande competição nacional. Este evento é a oportunidade perfeita para mostrar tudo o que aprendeu e testar suas habilidades contra os melhores corredores do país. A competição está prestigiada e cheia de atletas talentosos, e o nervosismo é palpável. A vitória poderia ser um grande passo na sua carreira, mas também traz uma pressão imensa e a possibilidade de fracasso.`
  );

  let escolha5 = prompt(
    `Você tem duas opções:\n[1] Competir com toda a sua energia e dedicação \n[2] Correr com cautela e estratégia, minimizando o risco de lesões`
  );

  if (escolha5 == "1" || escolha5.toLowerCase().includes("competir")) {
    alert(
      `Você decide competir com toda a sua energia e dedicação. A corrida é uma maratona de adrenalina e você dá o seu máximo a cada etapa. A competição é feroz, e o calor da multidão aumenta a pressão. Cada músculo em seu corpo grita de dor, mas você continua firme, superando seus limites. Ao final da corrida, você se sente exausta, mas extremamente orgulhosa de seu desempenho. O esforço intenso e o treinamento pesado que você passou se refletem em sua performance impressionante. Embora a experiência tenha sido desgastante, o aumento em sua força física é significativo e um reconhecimento de sua dedicação e esforço.`
    );
    vida -= 5; // Perda 5 de vida devido ao desgaste extremo
    forca += 10; // Grande aumento de 10 de força devido à dedicação total
    checkP = 5;

    inv.push("Experiência Competitiva"); // Adiciona "Experiência Competitiva" ao inventário
    stats(); // Exibe as estatísticas atualizadas
  } else if (escolha5 == "2" || escolha5.toLowerCase().includes("cautela")) {
    alert(
      `Você decide adotar uma abordagem cautelosa, focando em uma estratégia inteligente para minimizar o risco de lesões. Durante a corrida, você mantém um ritmo constante e evita se forçar ao máximo. A corrida é mais equilibrada, e você gerencia sua energia com eficiência. Embora não tenha terminado na frente, sua estratégia garante que você chegue ao final sem maiores problemas físicos. Esse equilíbrio entre esforço e precaução lhe proporciona uma sensação de realização e segurança. A sua felicidade aumenta ao sentir-se mais segura e preparada para futuros desafios, apesar da leve redução na força.`
    );
    forca -= 10; // Redução de 10 na força por não forçar tanto
    felicidade += 10; // Aumento de 10 na felicidade devido à sensação de segurança e equilíbrio
    vida += 10; // Aumento de 10 na vida por não forçar
    checkP = 5;

    inv.push("Estratégia");
    stats();
  }
}

function cap6() {
  alert(
    `Capítulo 6: Você Recebe um Patrocínio\nApós suas recentes performances, você atraiu a atenção de uma grande marca esportiva. Eles oferecem um patrocínio que inclui suporte financeiro e equipamentos de ponta para suas futuras competições. Este patrocínio pode ser um divisor de águas para sua carreira, oferecendo não apenas recursos, mas também visibilidade e oportunidades. No entanto, isso pode trazer novas responsabilidades e expectativas, além de potencialmente mudar a dinâmica com seus treinadores e colegas.`
  );

  let escolha6 = prompt(
    `Você tem duas opções:\n[1] Aceitar o patrocínio \n[2] Recusar o patrocínio e continuar com o suporte atual (Custo: +10 de Felicidade, -5 de Dinheiro)`
  );

  if (escolha6 == "1" || escolha6.toLowerCase().includes("aceitar")) {
    alert(
      `Você decide aceitar o patrocínio, o que traz um novo nível de recursos e oportunidades para sua carreira. A marca fornece equipamentos avançados e suporte financeiro, permitindo que você se concentre ainda mais em seu treinamento e competições. No entanto, a pressão para corresponder às expectativas da marca aumenta, e você sente um impacto na sua felicidade devido ao estresse e às novas responsabilidades. A força física melhora com o acesso a melhores equipamentos e treinamento.`
    );

    dinheiro += 20; // Aumento no dinheiro devido ao patrocínio
    forca += 15; // Aumento na força devido ao melhor treinamento e equipamentos
    felicidade += 10 // Aumento de 10 na felcidade por poder ajudar sua família
    checkP = 6;

    inv.push("Patrocínio Esportivo"); // Adiciona "Patrocínio Esportivo" ao inventário
    stats(); // Exibe as estatísticas atualizadas
  } else if (escolha6 == "2" || escolha6.toLowerCase().includes("recusar")) {
    alert(
      `Você decide recusar o patrocínio e continuar com o suporte atual. Embora essa decisão mantenha o equilíbrio em sua vida pessoal e permita que você mantenha um nível de felicidade mais alto, também limita seus recursos e oportunidades. O suporte atual é suficiente para continuar sua carreira, mas você não terá acesso às vantagens adicionais que o patrocínio teria proporcionado. Sua decisão resulta em uma maior satisfação pessoal, mas com um impacto negativo nas finanças e um pequeno sacrifício na força física.`
    );
    felicidade += 30; // Grande aumento de 30 na felicidade devido à menor pressão
    dinheiro -= 15; // Redução de 15 no dinheiro por não aceitar o patrocínio
    forca -= 5; // Redução de 5 na força devido à falta de equipamentos avançados
    checkP = 6;

    inv.push("Autonomia Pessoal"); // Adiciona "Autonomia Pessoal" ao inventário
    stats(); // Exibe as estatísticas atualizadas
  }
}

function cap7() {
  alert(
    `Capítulo 7: Você é Selecionada para o Time de Refugiados nas Olimpíadas\nApós anos de dedicação e treinamentos intensivos, a notícia chega: você foi selecionada para integrar o time de refugiados nas Olimpíadas. Este é um marco significativo em sua carreira, representando não apenas um reconhecimento de suas habilidades e esforços, mas também uma oportunidade de inspirar e dar voz a muitos que enfrentam desafios semelhantes. No entanto, a preparação para os Jogos Olímpicos é um processo exigente, e você precisa se adaptar a novos ambientes e expectativas.`
  );

  let escolha7 = prompt(
    `Você tem duas opções:\n[1] Aceitar a convocação e se preparar para as Olimpíadas \n[2] Recusar a convocação e continuar com seu treinamento local`
  );

  if (escolha7 == "1" || escolha7.toLowerCase().includes("aceitar")) {
    alert(
      `Você decide aceitar a convocação para o time de refugiados nas Olimpíadas. A preparação para o evento é intensa e exige um grande sacrifício pessoal. Embora a felicidade seja afetada devido ao estresse e à separação de sua vida cotidiana, a força física é aprimorada pelo treinamento especializado. O custo financeiro também aumenta devido às despesas relacionadas ao evento, mas a experiência e o reconhecimento que você ganha são imensos. Participar das Olimpíadas é um sonho realizado e uma chance de brilhar no cenário mundial.`
    );
    forca += 25; // Grande de 25 aumento na força devido ao treinamento olímpico
    dinheiro -= 10; // Redução no dinheiro devido às despesas com a competição
    felicidade += 25 // Grande aumento de 25 na felicidade pelo seu sonho estar se tornando realidade
    checkP = 7;

    inv.push("Convocação Olímpica"); // Adiciona "Convocação Olímpica" ao inventário
    stats();
  } else if (escolha7 == "2" || escolha7.toLowerCase().includes("recusar")) {
    alert(
      `Você decide recusar a convocação para o time de refugiados nas Olimpíadas e continuar com seu treinamento local. Embora essa decisão permita que você mantenha um nível mais alto de felicidade e estabilidade pessoal, você perde a chance de competir no maior palco esportivo do mundo. A força física e a visibilidade são impactadas, mas você mantém sua vida relativamente equilibrada e continua a trabalhar em seu desenvolvimento pessoal e esportivo em um ambiente familiar.`
    );
    alert(
      ` Mas infelizmente pela recusa do convite, você acaba perdendo a chance de ir para as olímpiadas`
    );
    vida -= vida;
    checkpoint();
  }
}

function cap8() {
  alert(
    `Capítulo 8: O Treinamento Olímpico é Difícil\nVocê está agora imersa no rigoroso programa de treinamento olímpico. Os dias são longos e exigentes, repletos de exercícios intensivos e testes constantes de resistência. O ambiente é altamente competitivo, e cada atleta está lutando para alcançar seu melhor desempenho. A pressão é intensa, e você se vê lutando contra o cansaço físico e o estresse mental. Além dos treinos, você também enfrenta a solidão e a distância da sua família, o que adiciona um peso emocional ao seu desafio.`
  );

  let escolha8 = prompt(
    `Você tem duas opções:\n[1] Persistir com o treinamento intenso, enfrentando os desafios e as dificuldades \n[2] Reduzir a intensidade do treinamento para manter um equilíbrio melhor entre o esforço e o bem-estar `
  );

  if (escolha8 == "1" || escolha8.toLowerCase().includes("persistir")) {
    alert(
      `Você decide seguir firme no treinamento intenso, apesar das dificuldades. Os treinos são desgastantes, mas sua determinação em alcançar o melhor desempenho possível é inabalável. As longas horas de prática e o esforço extremo resultam em um grande aumento na sua força física e em suas habilidades atléticas. No entanto, o custo emocional é alto, e sua felicidade diminui devido ao estresse e à pressão constante. Você está no caminho certo para se preparar para os Jogos Olímpicos, mas o preço a pagar é significativo.`
    );
    felicidade -= 10; // Redução de 10 na felicidade devido ao estresse e à pressão
    forca += 30; // Grande aumento de 30 na força devido ao treinamento intenso
    checkP = 8;

    inv.push("Resiliência Olímpica"); // Adiciona "Resiliência Olímpica" ao inventário
    stats();
  } else if (escolha8 == "2" || escolha8.toLowerCase().includes("reduzir")) {
    alert(
      `Você opta por reduzir a intensidade do treinamento para buscar um equilíbrio mais saudável entre esforço e bem-estar. Embora o treinamento seja menos extenuante, você consegue manter um nível mais alto de felicidade e bem-estar geral. A força física diminui um pouco devido à menor intensidade do treinamento, mas você se sente mais equilibrada e menos sobrecarregada pelo estresse. Essa abordagem permite que você mantenha sua saúde mental e emocional enquanto continua a se preparar para os Jogos Olímpicos.`
    );
    felicidade += 10; // Aumento de 10 na felicidade devido ao equilíbrio melhor
    forca -= 10; // Pequena redução de 10 na força devido à menor intensidade do treinamento
    checkP = 8;

    inv.push("Equilíbrio Saudável"); // Adiciona "Equilíbrio Saudável" ao inventário
    stats();
  }
}

function cap9() {
  alert(
    `Capítulo 9: Você Compete nas Olimpíadas\nFinalmente chegou o dia da competição olímpica. Você está prestes a enfrentar alguns dos melhores atletas do mundo, e o ambiente é eletrizante. Os treinos e preparações te trouxeram até aqui, e agora é a hora de mostrar tudo o que você aprendeu. O estádio está lotado, e você sente a pressão enquanto se prepara para a corrida.`
  );

  let escolha9 = prompt(
    `Você tem duas opções:\n[1] Dar tudo de si na competição, tentando alcançar a melhor performance possível \n[2] Competir com um ritmo controlado, focando mais no equilíbrio entre esforço e bem-estar`
  );

  if (escolha9 == "1" || escolha9.toLowerCase().includes("dar tudo")) {
    alert(
      `Você decide dar tudo de si na competição. A corrida é intensa e extenuante, mas você mantém o foco e a determinação. O som das multidões e a pressão em seus ombros são imensos, e você sente o peso de carregar a história e o peso do mundo nas suas costas.`
    );

    forca += 20; // Aumento de 20 na força devido ao esforço extremo
    vida -= 10 // Diminuição de 10 pelo gasto físico
    dinheiro += 10; // Ganho de 10 de dinheiro pela conquista na competição

    // Condições dos finais
    if (inv.includes("Determinação") && forca > 150 && vida > 50 && felicidade > 30) {
      alert(
        `Com sua força impressionante e a determinação que você carregou, você conquista a medalha de ouro! Sua vitória é a culminação de todos os sacrifícios e esforços ao longo de sua jornada. Carregando a história e o peso do mundo nas costas, você se sente nas nuvens, celebrando a conquista máxima no atletismo.`
      );
      inv.push("Medalha de Ouro");
    } else if (forca > 100 && vida > 20) {
      alert(
        `Você consegue uma performance excepcional, conquistando a medalha de prata. Seu esforço e dedicação são evidentes, e embora não tenha alcançado o ouro, você se sente extremamente orgulhosa do resultado.`
      );
      inv.push("Medalha de Prata");
    } else {
      alert(
        `Você se esforçou ao máximo, mas a competição foi muito difícil. Sua performance é respeitável, mas você não conseguiu alcançar o pódio. A sensação de não ter atingido seus objetivos é frustrante, mas você pode se orgulhar do esforço.`
      );
      inv.push("Posição Respeitável");
    }

    checkP = 9;
    stats();
  } else if (
    escolha9 == "2" ||
    escolha9.toLowerCase().includes("ritmo controlado")
  ) {
    alert(
      `Você decide competir com um ritmo controlado, mantendo o equilíbrio entre esforço e bem-estar. A corrida é realizada com cuidado e estratégia, garantindo que você mantenha sua saúde e qualidade de vida. Você termina a corrida com um desempenho sólido.`
    );

    felicidade += 20; // Aumento na felicidade devido ao equilíbrio
    forca -= 10; // Pequena redução na força devido ao ritmo controlado

    // Condições dos finais

      if (inv.includes("Determinação") && forca > 150 && vida > 50 && felicidade > 30) {
      alert(
        `Com sua força impressionante e a determinação que você carregou, você conquista a medalha de ouro! Sua vitória é a culminação de todos os sacrifícios e esforços ao longo de sua jornada. Carregando a história e o peso do mundo nas costas, você se sente nas nuvens, celebrando a conquista máxima no atletismo.`
      );
      inv.push("Medalha de Ouro");
     } else if (forca > 100 && vida > 20) {
      alert(
        `Mesmo com o ritmo controlado, você consegue conquistar a medalha de prata. Sua abordagem cuidadosa garante uma performance sólida e a sensação de uma conquista equilibrada.`
      );
      inv.push("Medalha de Prata");
    } else {
      alert(
        `Sua escolha de ritmo controlado resulta em uma performance decente, mas não suficiente para o pódio. Você termina a corrida com a sensação de que poderia ter se esforçado um pouco mais.`
      );
      inv.push("Posição Respeitável");
    }

    checkP = 9;
    stats();
  }
}

function game() {
  alert(
    `Você é Perina Lokure Nakang, uma jovem que sobreviveu ao conflito no Sudão do Sul e agora vive no Quênia. A vida nunca foi fácil para você, mas encontrou conforto no esporte, especialmente na corrida. Agora, como parte da Equipe Olímpica de Refugiados, você sonha em conquistar o ouro nas Olimpíadas de Paris. Sua jornada está repleta de desafios, mas suas escolhas determinarão o seu destino.`
  );
  cap1();
  cap2();
  cap3();
  cap4();
  cap5();
  cap6();
  cap7();
  cap8();
  cap9();
}

game(); // Começa o jogo
