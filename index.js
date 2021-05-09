const dice1 = Math.round((Math.random() * 6 + 1));

document.querySelector(`.img${dice1}`).setAttribute("src", `images/dice${dice1}.png`);

const dice2 = Math.round((Math.random() * 6 + 1));

document.querySelector(`.img${dice2}`).setAttribute("src", `images/dice${dice2}.png`);

let heading = ""

if(dice1 === dice2){
    heading = "Draw!!"
}else{
    heading =  `Player ${Math.max(dice1,dice2)} wins! &nbsp &nbsp<i class='far fa-flag icon'></i>`
}

document.querySelector(".heading").innerHTML = `<h1>${heading}</h1>`
