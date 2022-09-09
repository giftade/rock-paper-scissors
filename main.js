let leftBox = document.getElementById('left')
let rightbox = document.getElementById('right')
let results = document.getElementById('results')
let myCounter = 1;
let computerCounter = 1;
let myScore = document.getElementById('me')
let compScore = document.getElementById('computer')
let imgArr = [
    "rock.png",
    "paper.jpg",
    "scissors.jpg"
]
const rock = () => {
    leftBox.innerHTML = `<img class="btn" id="rock" src=${imgArr[0]} alt="rock">`
    let random = Math.floor(Math.random() * 3);
    rightbox.innerHTML = `<img class="btn" src=${imgArr[random]}>`;

    if(rock && random == 0){
        results.innerHTML = `<h2>It's a Draw</h2>`
    } else if(rock && random == 1){
        results.innerHTML = `<h2>You Loose</h2>`
    } else if(rock && random == 2){
        results.innerHTML = `<h2>You Win!!</h2>`
    }
    counter()
}

const paper = () => {
    leftBox.innerHTML = `<img class="btn" id="paper" src=${imgArr[1]} alt="paper">`;
    let random = Math.floor(Math.random() * 3);
    rightbox.innerHTML = `<img class="btn" src=${imgArr[random]}>`;

    if(paper && random == 0){
        results.innerHTML = `<h2>You Win!!</h2>`
    } else if(paper && random == 1){
        results.innerHTML = `<h2>It's a Draw</h2>`
    } else if(paper && random == 2){
        results.innerHTML = `<h2>You Loose</h2>`
    }
    counter()
}

const scissors = () => {
    leftBox.innerHTML = `<img class="btn" id="scissors" src=${imgArr[2]} alt="scissors">`
    let random = Math.floor(Math.random() * 3);
    rightbox.innerHTML = `<img class="btn" src=${imgArr[random]}>`;
    
    if(scissors && random == 0){
        results.innerHTML = `<h2>You Loose</h2>`
    } else if(scissors && random == 1){
        results.innerHTML = `<h2>You Win!!</h2>`
    } else if(scissors && random == 2){
        results.innerHTML = `<h2>It's a Draw</h2>`
    }
    counter()
}

const counter = () => {
    if(results.innerHTML == `<h2>You Win!!</h2>`){
        myScore.innerHTML = myCounter++
    } else if(results.innerHTML == `<h2>You Loose</h2>`){
        compScore.innerHTML = computerCounter++
    }
    endGame()
}
    
const endGame = () => {
    if(myCounter == 11){
        results.innerHTML = `<h2>Final result : You Win!!</h2>`
        
    myCounter = 1
    myScore.innerHTML = 0
    computerCounter = 1
    compScore.innerHTML = 0
}else if(computerCounter == 11){
    results.innerHTML = `<h2>Final result : Computer Wins!!</h2>`
   
myCounter = 1
compScore.innerHTML = 0
computerCounter = 1
myScore.innerHTML = 0
}
    }



localStorage.setItem('fname',myCounter)

console.log(localStorage)



