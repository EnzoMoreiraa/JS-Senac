let saldo = 0
let cadastro = ["Depositar valor", "Sacar valor se tiver disponível na conta", "Cadastrar cliente", "Listar dados do  cliente ", "Exibir saldo", "Sair"]

while (true) {
    let welcome = Number(prompt(`Bem-vindo ao Banco Natasha! Essas são nossas opções \n [1] Depositar valor\n [2] Sacar valor\n [3] Cadastrar cliente\n [4] Depositar valor\n [5] Depositar valor \n [0] Sair\n Selecione a desejada`))

    switch (welcome) {
        case 1:
            deposit(saldo)
            break;
        
        case 2:
            break;
    
        case 0:
            alert("Olá")
            break;
    }
}

function deposit(saldo) {
    let sald = Number(prompt(`Insira o valor que deseja depositar`))
    sald
}