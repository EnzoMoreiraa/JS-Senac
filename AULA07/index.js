let racas = [`Bulldog`, `Pincher`, `Sem-raça`, `Golden`, `Pitbull`]

let question = Number(prompt(`Qual raça das seguintes deseja? \n[1] ${racas[0]} \n[2] ${racas[1]} \n[3] ${racas[2]} \n[4] ${racas[3]} \n[5] ${racas[4]}`))

if (question-1 >= 0 && question-1 <= 4) {
    alert(`Você escolheu um Cachorro ${racas[question-1]}`)
    console.log(`Cachorro : ${racas[question-1]}`)
} else {
    alert(`Você não escolheu uma raça válida`)
    console.log(`Cachorro : ${racas[question- 1]}`)
}