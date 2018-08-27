// Unable to figure out how to add dice values, post-die-removal....

let dice = [];


let diceContainer = document.getElementById('dice-container');
document.getElementById('add-btn').addEventListener('click',generateDie);
document.getElementById('sum-btn').addEventListener('click',sumDice);
document.getElementById('roll-btn').addEventListener('click',rollAllDice);


class Die {
    constructor() {

        this.div = document.createElement('div');
        this.div.addEventListener('click',() => {
            this.roll();
        })

        this.div.addEventListener('dblclick',() => {
            this.div.remove();
        })

        this.div.className = 'div';
        diceContainer.appendChild(this.div);
        this.roll();
    }


    roll() {
        this.value = Math.floor(Math.random() * 6) + 1;
        this.div.innerText = this.value;
    }    
}


function generateDie(){
let d = new Die();


dice.push(d);
}

function sumDice(){
    let sum = 0;
    dice.forEach(die =>{
        sum += die.value;
    });
    alert(`The sum off all dice on-screen is ${sum}.`);
}


function rollAllDice(){
    dice.forEach(die => {
        die.roll();
    })
};
