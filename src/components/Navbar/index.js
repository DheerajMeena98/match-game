import './index.css'

const NavBar = props => {
  const {score, countTimer} = props
  return (
    <nav className="navbar-container">
      <div className="match-game-logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
          alt="website logo"
          className="logo"
        />
      </div>
      <div className="score-top-score-container">
        <p className="score-heading"> {`Score: ${score}`}</p>
        <div className="timer-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="timer-image"
          />
          <p className="top-score-heading"> {`${countTimer} sec`}</p>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
