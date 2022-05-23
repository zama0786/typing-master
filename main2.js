window.addEventListener("load",init)
let wordInput = document.querySelector("#word-input")
let currentWord = document.querySelector("#current-word")
let scoreDisplay = document.querySelector("#score")
let timeDisplay = document.querySelector("#time")
let message = document.querySelector("#message")
let score = 0;
let time = 0;
let currentLevel = 5;
time = currentLevel;
//Array
let words = [
'hat',
'river',
'lucky',
'status',
'stubborn',
'cocktail',
'runaway',
'joke',
'hero',
'javascript',
'nutrition',
'rivolver',
'echo',
'symptom'
]

//Initialize Game
function init(){
 showWords(words) 
}  
wordInput.addEventListener("input",startMatch)
setInterval(countdown,1000)
setInterval(checkStatus,50)


function showWords(words){

    const randomIndex = Math.floor(Math.random()*words.length)
    console.log(randomIndex)
    currentWord.innerHTML = words[randomIndex]
}
function matchWords(){
    if(wordInput.value == currentWord.innerHTML){
        message.innerHTML = "correct!!"
        return true;
    }else{
     message.innerHTML = ''
     return false;
    }
    
}

function startMatch(){
    console.log("test")
 if(matchWords()){
     showWords(words)
     wordInput.value = ''
     score++;
     time = currentLevel+1
 }
    scoreDisplay.innerHTML = time;
 
 }

function countdown(){
if(time>0){
    time--;
}
timeDisplay.innerHTML = time
}

function checkStatus(){
    if(time == 0){
        message.innerHTML = "GAME OVER!!!"
    }
}