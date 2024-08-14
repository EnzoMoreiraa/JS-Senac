//Com prompt pergunte ao usuário qual sua nascionalidade

let country = Number(prompt(`Insira seu país de origem: \n[1] Brasil \n[2] EUA \n[3] Inglaterra`))

switch (country) {
    case 1:
        alert(`Você é brasileiro`)
        console.log(`Brasileiro`)
        break;
    case 2:
        alert(`Você é norte americano`)
        console.log(`Norte Americano`)
        break;
    case 3:
        alert(`Você é inglês`)
        console.log(`Inglês`)
        break;
    default:
        alert(`Parece que sua nacionalidade ainda não consta em nosso banco de dados`)
        console.log(`Nacionalidade não encontrada`)
        break;
}