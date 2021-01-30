let symbols = ["\u2660", "\u2663", "\u2665", "\u2666"];
let numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "K","Q","As"];

let randomNumberSymbols = Math.floor(Math.random()* symbols.length)
let randomNumberNumbers = Math.floor(Math.random()* numbers.length)

let randomSymbols = symbols[randomNumberSymbols]
let randomNumbers = numbers[randomNumberNumbers]

let top1 = document.querySelector(".top-suit");
top1.innerHTML=randomSymbols

let number = document.querySelector(".number");
number.innerHTML=randomNumbers

let bottom = document.querySelector(".bottom-suit");
bottom.innerHTML=randomSymbols

if (randomSymbols === "\u2665" || randomSymbols === "\u2666" ){
    top1.style.color = "red"
    bottom.style.color = "red" 
}

console.log (`${randomSymbols} - ${randomNumbers} - ${randomSymbols}`)