
const game = ["rock", "papper", "scissor"]

function random(a, b) {

    return Math.random() * (a - b) + b

}

function getComputerChoice() {
    let x = game[Math.floor(random(1, 3) - 1)]
    return x

}



let player_score, player_win
let computer_score, computer_win


function round() {
    alert("computer start")
    let computer = getComputerChoice()

    alert("your turn chose between rock papper or scissor")
    let player = prompt("give your choice")

    if (player == computer) {
        alert("draw")

    } else if (player == "rock" && computer == "papper") {
        alert("computer win")
        computer_win = 1
    }
    else if (player == "papper" && computer == "rock") {
        alert("player win")
        player_win = 1
    }
    else if (player == "papper" && computer == "scissor") {
        alert("computer win")
        computer_win = 1

    }
    else if (player == "scissor" && computer == "papper") {
        alert("player win")
        player_win = 1
    }



    else if (player == "rock" && computer == "scissor") {
        alert("player win")
        player_win = 1
    }


    else if (player == "scissor" && computer == "rock") {
        alert("computer win")
        computer_win = 1

    }


    return
}






function game1() {
    for (let i = 0; i < 5; i++) {
        round()
       
        if (player_win = 1) {
            player_score = player_score + 1

        } else if (computer_win = 1) {
            computer_score = computer_score + 1
        }

    }

    console.log(player_score)
console.log(computer_score)

if (player_score < computer_score) {
    alert("you lost")

}
else if (computer_score = player_score) {
    alert("you draw ")
}
else if (computer_score  < player_score) {
    alert("you won")
}

    return

}

let rgame = game1()

