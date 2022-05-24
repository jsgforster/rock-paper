function computerPlay() {
    let outcome = (Math.floor(Math.random() * 10) % 3) + 1
    switch (outcome) {
        case 1:
            return 'Rock';
            break;
        case 2:
            return 'Paper';
            break;
        case 3:
            return 'Scissors'
    }
}

function playRound(e){
    removeListeners();
    computerSelection = computerPlay();
    playerSelection = this.id
    if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
        typeWrite(`Player has chosen: ${this.id}`,`Computer has chosen: ${computerSelection}`,`Tis a draw!`,30); 
        updateScore('draw')      
    } else if (playerSelection.toLowerCase() == 'rock' && computerSelection.toLowerCase() == 'scissors'){
        typeWrite(`Player has chosen: ${this.id}`,`Computer has chosen: ${computerSelection}`,`Player Wins!`,30)
        setTimeout(function(){updateScore('player')},2000)
    } else if (playerSelection.toLowerCase() == 'paper' && computerSelection.toLowerCase() == 'rock'){
        typeWrite(`Player has chosen: ${this.id}`,`Computer has chosen: ${computerSelection}`,`Player Wins!`,30)
        setTimeout(function(){updateScore('player')},2000)
    } else if (playerSelection.toLowerCase() == 'scissors' && computerSelection.toLowerCase() == 'paper'){
        typeWrite(`Player has chosen: ${this.id}`,`Computer has chosen: ${computerSelection}`,`Player Wins!`,30)
        setTimeout(function(){updateScore('player')},2000)
    } else {
        typeWrite(`Player has chosen: ${this.id}`,`Computer has chosen: ${computerSelection}`,`Computer Wins!`,30)
        setTimeout(function(){updateScore('computer')},2000)
    }

}

function updateScore(winner){

    let pscore = document.getElementById('playerScore').innerHTML;
    let cscore = document.getElementById('computerScore').innerHTML;
    if(winner == 'player'){
        document.getElementById('playerScore').innerHTML++;
        pscore++;
        if(pscore == 5){
            setTimeout(removeOptions,800);
            setTimeout(function(){typeWrite(`Congratulations! Player has WON!`,`FINAL SCORE`, `Computer:${cscore}        Player:${pscore}`,50)},800);
            let play = document.getElementById('but');
            setTimeout(function(){play.style.display = 'block';clearScores()},5000);
        }
    }else if(winner == 'computer'){
        document.getElementById('computerScore').innerHTML++;
        cscore++;
        if(cscore == 5){
            setTimeout(removeOptions,800);
            setTimeout(function(){typeWrite(`Oops! Computer has WON!`,`FINAL SCORE`, `Computer:${cscore}        Player:${pscore}`,50)},800);
            let play = document.getElementById('but');
            setTimeout(function(){play.style.display = 'block';clearScores()},5000);
            console.log('removedcompiuter?')
        }
    }
    
}


let play = document.getElementById('but');
play.addEventListener('click', function(){
    typeWrite('Choose your weapon player!','',' ',50);
    document.getElementById("but").style.display = 'none';
    addOptions();
    setTimeout(addListeners, 1500);
    
});

function addListeners(){
    const options = document.querySelectorAll('.option');
    for(i = 0; i < options.length; i++){
        options[i].addEventListener('click',playRound);
    }
}

function removeListeners(){
    const options = document.querySelectorAll('.option');
    for(i = 0; i < options.length; i++){
        console.log(options[i])
        options[i].removeEventListener('click',playRound);
    }
}
function addOptions(){
    const options = document.querySelectorAll('.bubbly-button');
    for(i = 0; i < options.length; i++){
        console.log(options[i])
        options[i].style.display = 'block';
    }
}
function removeOptions(){
    const options = document.querySelectorAll('.bubbly-button');
    for(i = 0; i < options.length; i++){
        console.log(options[i])
        options[i].style.display = 'none';
    }
}

function clearScores(){
    document.getElementById('playerScore').innerHTML = 0;
    document.getElementById('computerScore').innerHTML = 0;
    document.getElementById("text1").innerHTML = '';
    document.getElementById("text2").innerHTML = '';
    document.getElementById("outcome").innerHTML = '';
}


function typeWrite(txt1,txt2,outcome,speed){
    document.getElementById("text1").innerHTML = '';
    document.getElementById("text2").innerHTML = '';
    document.getElementById("outcome").innerHTML = '';
    let i = 0;
    let j = 0;
    let k = 0;
    typeWriter();
    function typeWriter() {
    if (i < txt1.length) {
        document.getElementById("text1").innerHTML += txt1.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }else if(txt2 && j < txt2.length){
        document.getElementById("text2").innerHTML += txt2.charAt(j);
        j++;
        setTimeout(typeWriter, speed);
    }else if(outcome && k < outcome.length){
        document.getElementById("outcome").innerHTML += outcome.charAt(k);
        k++;
        setTimeout(typeWriter, speed);
        setTimeout(addListeners, 1500);
    }
    }
    
    
}