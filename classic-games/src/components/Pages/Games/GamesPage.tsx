import { StarIcon } from '@heroicons/react/24/solid'
import GameCard from '../../Games/GameCard/GameCard';


function GamesPage() {

  const test = () => {
    console.log('...')
  }
  return (
    <section className="card-container">

      {/* Defining each game card component with the appropriate props */}
      <GameCard 
        body="Tetris is a puzzle game in which geometric shapes called 
              'tetrominoes' fall down onto a playing field and the player has to 
              arrange them to form gapless lines."
        title='Tetris'
        subtitle="Created by Alexey Pajitnov. 1984."
        image="/images/Tetris.jpg"
        badge={{
          text:"Classic Game",
          filled: false,
        }}
        // indicator='YO'
        btn={{
          text:"Play this game!",
          type:"primary",
          to:"/games/tetris",
          filled: true,
          onClick: test,
          icon: <StarIcon />
        }}  
        />
      <GameCard 
        body="Tic Tac Toe likely originated in ancient Egypt or Rome. 
              The game has been played for centuries and has been popularized 
              around the world in various forms. The modern version of the game 
              is often attributed to British mathematician W. H. Bartlett, who first 
              described the game as 'Noughts and Crosses in 1858'"
        title='Tic Tac Toe'
        // subtitle="Created by Alexey Pajitnov. 1984."
        image="/images/tic-tac-toe.jpg"
        badge={{
          text:"Classic Game",
          filled: true,
        }}
        // indicator='YO'
        btn={{
          text:"Play this game!",
          type:"Primary",
          to:"/games/tic-tac-toe",
          filled: true,
          icon: <StarIcon />
        }} />
        <GameCard 
        body="Pong is a two-dimensional sports game that simulates table tennis. The player controls an in-game paddle by moving it vertically across the left or right side of the screen. They can compete against another player controlling a second paddle on the opposing side. Players use the paddles to hit a ball back and forth."
        title='Pong'
        // subtitle="Created by Alexey Pajitnov. 1984."
        image="/images/Pong.png"
        badge={{
          text:"Classic Game",
          filled: true,
        }}
        // indicator='YO'
        btn={{
          text:"Play this game!",
          type:"Primary",
          to:"/games/pong",
          filled: true,
          icon: <StarIcon />
        }} />
        <GameCard 
        body="Rock, Paper, Scissors. The familiar game of Rock, Paper, Scissors is played like this: at the same time, two players display one of three symbols: a rock, paper, or scissors. A rock beats scissors, scissors beat paper by cutting it, and paper beats rock by covering it."
        title='Rock Paper Scissors'
        // subtitle="Created by Alexey Pajitnov. 1984."
        image="/images/Rock-Paper-Scissors.png"
        badge={{
          text:"Classic Game",
          filled: false,
        }}
        // indicator='YO'
        btn={{
          text:"Play this game!",
          type:"primary",
          to:"/games/rock-paper-scissors",
          filled: true,
          onClick: test,
          icon: <StarIcon />
        }}  
        /> 
        <GameCard 
        body="The game begins with 12 cards face down. The player will flip two cards face up displaying a picture. The object of the game is to turn over pairs of matching cards. When cards are matched they will disappear. Test your memory and record your high score!
        "
        title='Memory'
        // subtitle="Created by Alexey Pajitnov. 1984."
        image="/images/matchgame (1).png"
        badge={{
          text:"Classic Game",
          filled: false,
        }}
        // indicator='YO'
        btn={{
          text:"Play this game!",
          type:"primary",
          to:"/games/memory",
          filled: true,
          onClick: test,
          icon: <StarIcon />
        }}  
        />    
    </section> 
  )
}

export default GamesPage
      
            