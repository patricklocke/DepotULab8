var Die = function () {
    this.insert = function () {
        this.div = document.createElement('div');
        this.div.id = dice.length;
        $(this.div).click(function(){
            var newnum = Math.floor(Math.random()*6)+1;
            this.innerHTML = newnum;
        });
        $(this.div).on('dblclick', function(){
           var negate = $(this).html();
           console.log(negate);
           subtract.push(negate);
           $(this).remove();
           
        });
        this.div.className = 'dice';
        this.roll();
        document.getElementById('dice-container').appendChild(this.div);
    }
    this.roll = function () {
        var num = Math.floor(Math.random() * 6) + 1;
        this.value = num;
        this.div.innerHTML = num;
    }
}


var dice = [];
var sum = [];
var subtract = [];

function sub(a,b) {
    return a - b;
}

function add(a, b) {
    return a + b;
}
function addDie() {
    var die = new Die();
    die.insert();
    dice.push(die);
}
function rollDice() {
    for (var i = 0; i < dice.length; i++) {
        dice[i].roll();
    }
}
function sumDice() {
    for (var i = 0; i < dice.length; i++) {
        var values = dice[i].value;
        sum.push(values);
    }
    var adding = parseInt(sum.reduce(add,0));
    // console.log(adding)
    var subtracting = parseInt(subtract.reduce(add,0));
    // console.log(subtracting)
    var total = sub(adding, subtracting)
    alert("The dice total is " + total);
}

