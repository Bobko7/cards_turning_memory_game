const cards = document.querySelectorAll(".card");
let firstTurned = false;
let firstCard = null;
let secondCard = null;
console.log(firstCard, secondCard);

cards.forEach((card) => {
    card.addEventListener("click", flip);
});

function flip(){
if(secondCard === null){
    this.classList.add("flip");
    if(!firstTurned){
        firstTurned = true;
        firstCard = this;
    }
    else{
        secondCard = this;
        check();
    }
}
}

function check(){
    if(firstCard.dataset.image === secondCard.dataset.image){
        success();
    }
    else{
        fail();
    }
}

function success(){
    console.log("Success")
    firstCard.removeEventListener("click", flip);
    secondCard.removeEventListener("click", flip);
reset();
}

function fail(){
    console.log("Fail");
    setTimeout(() =>{
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    reset();
    }, 1000);
}

function reset(){
    firstTurned = false;
    firstCard = null;
    secondCard = null;
}

(function shuffle(){
cards.forEach((card) => {
    let randomNumber = Math.floor(Math.random() * 16);
    console.log(randomNumber);
    card.style.order = randomNumber;
})
})();