//Crie um rpograma em que o usuário insira qual pokemon ele quer

let escolha = Number(prompt(`Qual pokemon deseja? \n[1] Charmander \n[2] Squirtle \n[3] Bulbassaur`))


switch (escolha) {
    case 1:
        alert(`Você escolheu o Charmander`)
        console.log("FOGO")
        break;
    case 2:
        alert(`Você escolheu o Squirtle`)
        console.log("ÁGUA")
        break;
    case 3:
        alert(`Você escolheu o Bulbassaur`)
        console.log("PLANTA E VENENO")
        break;
    default:
        alert(`Pokemon não encontrado`)
        console.log(`Inicial não encontrado`)
        break;
}