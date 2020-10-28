#!/usr/bin/env node
const { argv } = require('yargs')

const moveTypes = {
    'rock' : 'paper',
    'paper' : 'rock',
    'scissors' : 'paper'
}
class Game {
    constructor(){
        this.playerMove = ''
        this.computerMove = ''
        this.result = ''
    }
    addPlayer(player){
        if(player instanceof Computer){
            this.computerMove = player.randomThrow()
        } else if(player instanceof Player){
            this.playerMove = player.move
        }
    }
    winner(){
        //this is a really long ternary 
        return (this.playerMove === this.computerMove ? this.result = '~The game was a tie.~':(moveTypes[this.playerMove] === this.computerMove  ? this.result = '~Player wins.~' : this.result = '~Computer wins.~'))
    }
    play(){
        console.log('Playing a game of Roshambo against the computer.')
        console.log(`Player plays ${this.playerMove}.`)
        console.log(`Computer plays ${this.computerMove}.`)
        this.winner()
        console.log(this.result)
    }
}

class Player{
    constructor(){
        this.move = argv.move
    }
}

class Computer{
    constructor(){
        this.move = ''
    }
    randomThrow(){
        const moves = ['rock', 'paper', 'scissors'];
        this.move = moves[Math.floor(Math.random() * moves.length)];
        return this.move
    }
}


const game1 = new Game();
const player = new Player();
const computer = new Computer();
player.move = argv.move;
game1.addPlayer(computer);
game1.addPlayer(player);
game1.play()