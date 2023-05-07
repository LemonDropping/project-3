import { StarIcon } from '@heroicons/react/24/solid'
import GameCard from '../../components/Games/GameCard/GameCard';


function GamesPage() {
  return (
    <section className="card-container">

      {/* Defining each game card component with the appropriate props */}
      <GameCard 
        body="Tetris is a puzzle game in which geometric shapes called 
              'tetrominoes' fall down onto a playing field and the player has to 
              arrange them to form gapless lines."
        title='Tetris'
        subtitle="Created by Alexey Pajitnov. 1984."
        image="/assets/images/Tetris.jpg"
        badge={{
          text:"Classic Game",
          filled: true,
        }}
        // indicator='YO'
        btn={{
          text:"Play this game!",
          type:"Primary",
          to:"/games/tetris",
          filled: true,
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
        image="/assets/images/tic-tac-toe.jpg"
        badge={{
          text:"Classic Game",
          filled: true,
        }}
        // indicator='YO'
        btn={{
          text:"Play this game!",
          type:"Primary",
          to:"/games/tetris",
          filled: true,
          icon: <StarIcon />
        }} />  
    </section> 
  )
}

export default GamesPage
      
            