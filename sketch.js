//We want to make it so that we have 4 buttons for each pokemon and each button brings a certain amount of health down
//Possible visuals can be specific animations for the moves, we can assign types to the pokemon
//so that if a pokemon is hit by a supereffective attack then moveDamage*1.5

// we want to have at least 4 different move variables, each representing damage
// we want it so that when a button is pressed, health goes down,
// we need two shapes, one to represent poke1 and poke2
// we need two rectangles to represent each pokemon's health bar

//         *EXTRA*
//make different animations for the pokemon moves
// assign variables for the different moves to go with the animations
// we want variable that assigns a type for the pokemon
// we want to assign types to the moves


var defaultAttack = 10;
var pokemon1 = new pokemonInfo("Bulbasaur", "Grass")
var pokemon2 = new pokemonInfo("Charmander", "Fire")
var ember = new pokeAttack ("Ember", 20, "Fire");
var vinewhip = new pokeAttack ("Vine Whip",20, "Leaf");
var razorLeaf = new pokeAttack ("Razor Leaf", 30, "Leaf");
var dragonRage = new pokeAttack ("Dragon Rage", 40, "Dragon");
var tackle = new pokeAttack ("Tackle",10,"Normal");
var scratch = new pokeAttack ("Scratch", 10, "Normal")
var takeDown = new pokeAttack("Take Down", 40, "Normal");
var furySwipes = new pokeAttack("Fury Swips", 30, "Normal");
var qAttack = tackle;
var wAttack = vinewhip;
var eAttack = razorLeaf;
var rAttack = takeDown;
var uAttack = scratch;
var iAttack = ember;
var oAttack = furySwipes;
var pAttack = dragonRage;
var canvasH = 600;
var canvasL = 1000;
var health1W = 100
var healthBarOneX = 100;
var health2W = 100;
var healthBarTwoX = 800;
var healthColor = 'darkgreen';
let fiftyfifty;
let currentPlayer;



function setup(){
    createCanvas(canvasL,canvasH);
    if(Math.random() <= .5){
        fiftyfifty = 0;
        console.log("player one")
    }
        else{
        fiftyfifty = 1;
        console.log("player two")
    }
    currentPlayer = fiftyfifty;
}
function drawHealthBars(){
    fill(healthColor);
    rect(healthBarOneX, 500, health1W,10);
    //healthbar 1^
    fill(healthColor);
    rect(healthBarTwoX, 500, health2W,10);
    //healthbar 2^
}

function drawPokemon(){
      //Charmander
      fill("orange");
      rect(800,300,100,150);//Body
      rect(780,225,85,85);//Head
      //Bulbasaur
      fill("green");
      rect(80,300,95,40);//Bulb
      fill(0,255,140);
      rect(75,340,150,110);//Body
      rect(175,290,100,100);//Head
      fill("red")
}

function canvasDetails(){
    fill(101,67,33);
   rect(0,450,1000,200);//The ground
   fill(255,255,255);
   rect(50,50,200,50);
}
function draw(){
    background(20,0,135);
    canvasDetails();
    drawHealthBars();
    drawPokemon();
    
if(health1W == 0){
    textSize(32)
    fill("gold")
    text("Player 2, You Won!",health2W,100)
}
if(health2W == 0){
    textSize(32)
    fill("gold")
    text("Player 1, You Won!",healthBarOneX,100)
    }
}
function player1Controls(){
    if(keyCode === 81 || keyCode === 87 || keyCode === 69 || keyCode === 82){
        console.log("player1 is wokring")
        if (keyCode === 81 && health2W > 0){
            health2W = health2W - qAttack.damage
            if(health2W - qAttack.damage < 0){
                health2W = 0
            }
        }
        if (keyCode === 87 && health2W > 0){
            health2W = health2W - wAttack.damage
            if(health2W - wAttack.damage < 0){
                health2W = 0
            }
        }
        if (keyCode === 69 && health2W > 0){
            health2W = health2W - eAttack.damage
            if(health2W - eAttack.damage < 0){
                health2W = 0
            }
        }
        if (keyCode === 82 && health2W > 0){
            health2W = health2W - rAttack.damage
            if(health2W - rAttack.damage < 0){
                health2W = 0
            }
        }
        currentPlayer=1
    }
}
function player2Controls(){
    if(keyCode === 85 || keyCode === 73 || keyCode === 79 || keyCode === 80){
        console.log("player2 is working")
        if (keyCode === 85 && health1W > 0){
            health1W = health1W - uAttack.damage
            if(health1W - uAttack.damage < 0){
                health1W = 0;
            }
        }
        if (keyCode === 73 && health1W > 0){
            health1W = health1W - iAttack.damage
            if(health1W - iAttack.damage < 0){
                health1W = 0;
            }
        }
        if (keyCode === 79 && health1W > 0){
            health1W = health1W - oAttack.damage
            if(health1W - oAttack.damage < 0){
                health1W = 0;
            }
        }
        if (keyCode === 80 && health1W > 0){
            health1W = health1W - pAttack.damage
            if(health1W - pAttack.damage < 0){
                health1W = 0
            }
        }
        currentPlayer=0
    }
}
function keyPressed() {
    if(currentPlayer == 0){
        player1Controls();
    } else if(currentPlayer == 1){
        player2Controls();
    }
}


