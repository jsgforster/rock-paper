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
    computerSelection = computerPlay();
    playerSelection = this.id
    if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
        typeWrite(`Player has chosen: ${this.id}`,`Computer has chosen: ${computerSelection}`,`Tis a draw!`);       
    } else if (playerSelection.toLowerCase() == 'rock' && computerSelection.toLowerCase() == 'scissors'){
        typeWrite(`Player has chosen: ${this.id}`,`Computer has chosen: ${computerSelection}`,`Player Wins!`)
    } else if (playerSelection.toLowerCase() == 'paper' && computerSelection.toLowerCase() == 'rock'){
        typeWrite(`Player has chosen: ${this.id}`,`Computer has chosen: ${computerSelection}`,`Player Wins!`)
    } else if (playerSelection.toLowerCase() == 'scissors' && computerSelection.toLowerCase() == 'paper'){
        typeWrite(`Player has chosen: ${this.id}`,`Computer has chosen: ${computerSelection}`,`Player Wins!`)
    } else {
        typeWrite(`Player has chosen: ${this.id}`,`Computer has chosen: ${computerSelection}`,`Computer Wins!`)
    }

}

function check(player){
    if(player.toLowerCase() == 'rock' || player.toLowerCase() == 'paper' || player.toLowerCase() == 'scissors'){
        return player
    } else {
                console.log('invalid input, try again')
                let player = prompt('Rock, Paper or Scissors?')
                check(player)
                return player
            }
    }

function game(){
    let pCount = 0
    let cCount = 0
    for (i = 0; i < 5; i++){
        let comp = computerPlay()
        let player = prompt('Rock, Paper or Scissors?')
        player = check(player)

        let outcome = playRound(player,comp)
        console.log(outcome)
        if(outcome == 'Player wins'){
            pCount ++
            console.log('pcount is ' + pCount)
            console.log('ccount is ' + cCount)
        } else if (outcome == 'Computer wins'){
            cCount ++
            console.log('pcount is ' + pCount)
            console.log('ccount is ' + cCount)
        }

    }
    if (pCount < cCount){
        console.log('Computer wins ' + cCount + ' to ' + pCount +' games.')
    }else if (cCount < pCount){
        console.log('Player wins ' + pCount + ' to ' + cCount +' games.')
    }else {
        console.log('Tis a draw, both player won ' + cCount + ' games.')
    }
    return 'done'
}


let play = document.getElementById('but');
play.addEventListener('click', function(){
    typeWrite('Choose your weapon player!','',' ');document.getElementById("but").remove();
});





function typeWrite(txt1,txt2,outcome){
    const options = document.querySelectorAll('.option')
    options.forEach(option => option.removeEventListener('click',playRound));
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
        setTimeout(typeWriter, 50);
    }else if(txt2 && j < txt2.length){
        document.getElementById("text2").innerHTML += txt2.charAt(j);
        j++;
        setTimeout(typeWriter, 50);
    }else if(outcome && k < outcome.length){
        document.getElementById("outcome").innerHTML += outcome.charAt(k);
        k++;
        setTimeout(typeWriter, 50);
        console.log('run')
        options.forEach(option => option.addEventListener('click',playRound));
    }
    }
    
    
}