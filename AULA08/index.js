//.lenght
let pokemon = [`bulbassauro`, `squirtle`, `charmander`]
console.log(pokemon.length) //3

//.includes()
let seriesBoas = [`Breaking Bad`, `Brooklyn Nine-nine`];

seriesBoas.includes(`Breaking Bad`); //true
seriesBoas.includes(`Game of Thrones`); //false

//.push()
let fruit = [`Abacaxi`, `Pera`, `Banana`, `Abacaxi`];

console.log(fruit); // [`Abacaxi`, `Pera`, `Banana`, `Abacaxi`]

fruit.push(`Maça`);
console.log(`Seu novo array é ${fruit}`); // [`Abacaxi`, `Pera`, `Banana`, `Abacaxi`, `Maça`]
console.log(`Seu novo tamanho de array é ${fruit.length}`); // 5

//.pop()
let myFish = [`Palhaço`, `Mandarim`, `Esturjão`]

myFish.pop()
console.log(myFish) // [`Palhaço`, `Mandarim`]