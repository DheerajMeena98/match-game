import './index.css'

const GameOverCard = props => {
  const {score, playAgain} = props
  const OnClickPlayAgain = () => {
    playAgain()
  }

  return (
    <div className="win-lose-card-container">
      <div className="match-game-results-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
          alt="trophy"
          className="trophy-image"
        />
        <p> YOUR SCORE </p>
        <p> {score} </p>
        <button
          className="play-again-button"
          type="button"
          onClick={OnClickPlayAgain}
        >
          {' '}
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
            alt="reset"
          />
          PLAY AGAIN
        </button>
      </div>
    </div>
  )
}

export default GameOverCard
