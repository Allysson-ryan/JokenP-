
const result = document.querySelector('.result')
const humanScore = document.querySelector('#human-score')
const machineScore = document.querySelector('#machine-score')


let humanScoreNumber = 0
let machineScoreNumber = 0

const GAME_OPITION ={
    ROCK: "rock",
    PAPER: "paper",
    SCISSORS: "scissors"
}


const playHuman = (humanChoice) => {
    playTheGame(humanChoice, playMachine())
}

const playMachine = () => {
    const escolhasDaMaquina = [GAME_OPITION.ROCK, GAME_OPITION.PAPER, GAME_OPITION.SCISSORS]
    const randomNumber = Math.floor(Math.random() * 3)

    return escolhasDaMaquina[randomNumber]
}

const playTheGame = (human, machine) => {
    console.log('humano: ' + human + ' IA: ' + machine)

    if (human === machine) {
        result.innerHTML = "Deu empate!"
    }
    else if (
        (human === 'paper' && machine === 'rock') ||
        (human === 'scissors' && machine === GAME_OPITION.PAPER) ||
        (human === GAME_OPITION.ROCK && machine === 'scissors')
    ) {
        humanScoreNumber++
        humanScore.innerHTML= humanScoreNumber
        result.innerHTML = "Você ganhol!"
    } else {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = "Você perdeu para IA!"
    }
}

// papel ganha de pedra ; tesolra ganha de papel;  pedra ganha de tesoura


/*  
    Explicação:
    -> O const result é localizando a classe result no html; 

    -> o GAME_OPITION é uma variável que guarda as informações. cham-se de ENUM. em playMachine no escolhasDaMaquina eu chamei a variável ROCK, PAPER e SCISSORS, cada lugar que eu chamei ele vai trazer a informação que está guardada.      ex: em ROCK ele trás o texto rock

    -> quando eu escolho uma opção a informação chega em humanChoice, dali ele vai segurar o valor em playTheGame e vai pegar a escolha da IA, dai ele envia lá para baixo esses dois valores e envia lá para baixo em playTheGame. a minha escolha fica em human e da IA fica em machine, é como se lá em baixo no playTheGame é o nome que eu dei (aleatório) e lá em cima (em playTheGame no playHuman) vai ser o valor que vai ficar respectivamente em cada canto no playTheGame em baixo.
    
    -> O playMachine vai ser a IA, e ela tem três escolhas para fazer, para que essa escolha seja aleatória (random) usei o Math.random que escolhe um número entre 0 e 1, com isso vai ser multiplicado por 3 e arredondado esse valor para baixo (Math.floor) e retorna a escolha da IA.              ex: 0,8 * 3= 2,4 o Math.floor arredonda para 2 (e dois é a escolha 'scissors')

    -> playTheGame é o que vai receber a escolha do humano (human) e o da IA (machine) e depois ele vai verificar cada caso e mostrar em que situação eu fiquei. 
    
    -> depois se eu ganhar vai adicionar +1 e coloca no humanScoreNumber o valor, e com a IA é a mesma coisa

*/