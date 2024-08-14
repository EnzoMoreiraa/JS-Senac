//Arrays e Strings
// " ", ' ', ` `

let nome = prompt(`Insira seu nome`)
let cor = prompt(`Insira sua cor favorita`)

alert(`A cor favorita de ${nome} é ${cor}`)
console.log(`${nome}:${cor}`)

let frase = `hoje comi cenoura`
frase.includes(`cenoura`)

novaFrase = frase.replaceAll("cenoura", "batata")