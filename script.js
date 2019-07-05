
function rollDice() {

    // get the div which have id "firstdice"
    let dice1 = document.querySelector("#firstdice");
    
    // get the div which have id "seconddice"
    let dice2 = document.querySelector("#seconddice");
    
    // let the HTML tag "h1"
    let info = document.querySelector("#game_info");
    
    
    // Math.floor means ---> roundoff the number to the nearest value which user get by rolling.
    // Math.random means ---> return a number from 0  t0 6 randomly.
    
    let fDice = Math.floor(Math.random() * 7) + 1;
    let sDice = Math.floor(Math.random() * 7) + 1;
    
    // jo bhi value user get kryga wo add ho kr h1 k content me show hoga.
    let totalDice = fDice + sDice;
    
    dice1.innerHTML = fDice;
    dice2.innerHTML = sDice;
    info.innerText = "You rolled" + totalDice + ".";
    
    // if the value of both dices are same then user have another chnace to roll the dice.
    if (fDice == sDice) {
        info.innerHTML += " Waooo! you got a free chance";
    }


}

