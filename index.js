var randomNumber1 = Math.round((Math.random() * 6 + 1));



if (randomNumber1 === 1) {
    document.querySelector(".img1").setAttribute("src", "images/dice1.png");
};

if (randomNumber1 === 2) {
    document.querySelector(".img1").setAttribute("src", "images/dice2.png");
};
if
 (randomNumber1 === 3) {
    document.querySelector(".img1").setAttribute("src", "images/dice3.png");
};

if (randomNumber1 === 4) {
    document.querySelector(".img1").setAttribute("src", "images/dice4.png");
};

if (randomNumber1 === 5) {
    document.querySelector(".img1").setAttribute("src", "images/dice5.png");
};

if (randomNumber1 === 6) { 
    document.querySelector(".img1").setAttribute("src", "images/dice6.png");
};


randomNumber1;


var randomNumber2 = Math.round((Math.random() * 6 + 1));


if (randomNumber2 === 1) {
    document.querySelector(".img2").setAttribute("src", "images/dice1.png");
};

if (randomNumber2 === 2) {
    document.querySelector(".img2").setAttribute("src", "images/dice2.png");
};

if (randomNumber2 === 3) {
    document.querySelector(".img2").setAttribute("src", "images/dice3.png");
};

if (randomNumber2 === 4) {
    document.querySelector(".img2").setAttribute("src", "images/dice4.png");
};

if (randomNumber2 === 5) {
    document.querySelector(".img2").setAttribute("src", "images/dice5.png");
};

if (randomNumber2 === 6) {
    document.querySelector(".img2").setAttribute("src", "images/dice6.png");
};

randomNumber2;

if (randomNumber1 > randomNumber2) {
    document.querySelector(".heading").innerHTML = "<h1><i class='far fa-flag icon'> &nbsp &nbsp</i> Player 1 wins!</h1>"
};

if(randomNumber1 < randomNumber2){
    document.querySelector(".heading").innerHTML = "<h1> Player 2 wins! &nbsp &nbsp<i class='far fa-flag icon'></i> </h1>"
};
if(randomNumber1 === randomNumber2){
    document.querySelector(".heading").innerHTML = "<h1>Draw!!</h1>"
};
