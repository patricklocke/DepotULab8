class Die {
    div: HTMLDivElement;
    value: number;
    
    constructor() {
        this.div= document.createElement('div');
        this.div.className= 'die';
        this.div.addEventListener('click', (e) => {
            this.roll();
        })
    }
    insert() {
        let diceContainer = document.getElementById('dice-container');
        diceContainer.appendChild(this.div);
        this.roll();
    }
    
    roll() {
        let randomNumber = Math.floor(Math.random()*6)+1;
        this.div.innerText = String(randomNumber);
        this.value = randomNumber; 
    }
}
    
let dice: Array<Die> = [];
let sum 

function addDie() {
    let die = new Die();
    die.insert();
    dice.push(die);
   
}

function rollAllDice() {
    for (let i=0; i < dice.length; i++) {
        let die = dice[i];
        die.roll();
    }
}

function sumDice() {
    let sum = 0;
    for( let i = 0; i < dice.length; i++){
        let die = dice[i];
        sum += die.value;
    }
    alert(`The sum of the dice is ${sum}.`)
}


