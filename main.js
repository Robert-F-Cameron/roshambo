#!/usr/bin/env node
const { argv } = require('yargs')


class Game {
    constructor(){
        this.playerMove = ''
        this.computerMove = ''
    }
    addPlayer(player){
        if(player instanceof Computer){
            this.computerMove = player.randomThrow()
        } else if(player instanceof Player){
            this.playerMove = player.move
        }
    }
    play(){
        console.log('Playing a game of Roshambo against the computer.')
        console.log(`Player plays ${this.playerMove}.`)
        console.log(`Computer plays ${this.computerMove}.`)
       if(this.playerMove === 'rock' && this.computerMove === 'paper'){
           console.log('~Computer Wins.~')
       } else
       if(this.playerMove === 'paper' && this.computerMove === 'scissors'){
           console.log('~Computer Wins.~')
       } else
       if(this.playerMove === 'scissors' && this.computerMove === 'rock'){
           console.log('~Computer Wins.~')
       } else
       if(this.playerMove === this.computerMove){
           console.log('~it\'s a draw!~')
       }
       else {
           console.log('~Player Wins.~')
       }
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