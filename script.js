function computerPlay() {
    let outcome = (Math.floor(Math.random() * 10) % 3) + 1
    switch (outcome) {
        case 1:
            return 'rock';
            break;
        case 2:
            return 'paper';
            break;
        case 3:
            return 'scissors'
    }
}

function playRound(playerSelection, computerSelection){
    if (playerSelection.toLowerCase() == computerSelection) {
        return 'Tis a Draw!'
    } else if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'scissors'){
        return 'Player wins'
    } else if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'rock'){
        return 'Player wins'
    } else if (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'paper'){
        return 'Player wins'
    } else {
        return 'Computer wins'
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



function typeWrite(txt){
    var i = 0;
    console.log(txt.length)
    typeWriter();
    function typeWriter() {
    if (i < txt.length) {
        document.getElementById("demo").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
    }
    }
  document.getElementById("but").remove();
}