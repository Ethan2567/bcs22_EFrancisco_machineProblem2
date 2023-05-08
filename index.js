let E= Math.random() * 100;

let S = Math.round(E);

function guessNum(){

for(x = 1; x == x; x++){

userInput = prompt(`Guess a number between 1 and 100: `)

if (userInput < S){ alert("Too low! Guess again hihi.")
}

else if(userInput > S){

alert("Too high! Guess again hihi.")

}

else{

alert(`Good job!! you guessed the number in ${x} attempts! Nicely done, my guy!`)

}
}
}

guessNum();