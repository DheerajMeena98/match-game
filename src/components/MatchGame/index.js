import {Component} from 'react'

import NavBar from '../Navbar'
import GameOverCard from '../GameOverCard'
import Tabs from '../Tabs'
import MatchCard from '../MatchCard'

import './index.css'

class MatchGame extends Component {
  state = {
    isCardMatch: false,
    countTimer: 60,
    activeTab: 'FRUIT',
    score: 0,
    currentImage:
      'https://assets.ccbp.in/frontend/react-js/match-game/orange-img.png',
  }

  componentDidMount() {
    this.timerId = setInterval(this.currentTimer, 1000)
  }

  changeCurrentImage = () => {
    const {imagesList} = this.props
    const imagesListLength = imagesList.length
    const randomNumber = Math.ceil(Math.random() * imagesListLength)
    const currentImageIndex = randomNumber
    const currentImageUrl = imagesList[currentImageIndex].imageUrl
    return currentImageUrl
  }

  currentTimer = () => {
    const {countTimer} = this.state
    if (countTimer === 0) {
      this.setState({isCardMatch: true})
      clearInterval(this.timerId)
    } else {
      this.setState(prevState => ({countTimer: prevState.countTimer - 1}))
    }
  }

  thumbnailClick = imageUrl => {
    const {currentImage} = this.state
    if (currentImage === imageUrl) {
      const currentImageUrl = this.changeCurrentImage()
      this.setState(prevState => ({
        score: prevState.score + 1,
        currentImage: currentImageUrl,
      }))
    } else {
      this.setState({isCardMatch: true})
      clearInterval(this.timerId)
    }
  }

  changeTab = tabId => {
    this.setState({activeTab: tabId})
  }

  playAgain = () => {
    console.log('hii')
    this.setState({
      isCardMatch: false,
      countTimer: 60,
      score: 0,
      currentImage:
        'https://assets.ccbp.in/frontend/react-js/match-game/orange-img.png',
    })
    this.timerId = setInterval(this.currentTimer, 1000)
  }

  render() {
    const {tabsList, imagesList} = this.props
    const {isCardMatch, countTimer, currentImage, score, activeTab} = this.state
    const updatedMatchesList = imagesList.filter(
      item => item.category === activeTab,
    )
    return (
      <div className="match-game-bcg-container">
        <NavBar countTimer={countTimer} score={score} />

        <div className="match-game-container">
          {!isCardMatch ? (
            <div className="match-game-card-container">
              <img src={currentImage} className="display-image" alt="match" />
              <ul className="tabs-list-container">
                {tabsList.map(eachTab => (
                  <Tabs
                    eachTab={eachTab}
                    key={eachTab.tabId}
                    changeTab={this.changeTab}
                  />
                ))}
              </ul>
              <ul className="match-card-container">
                {updatedMatchesList.map(eachImage => (
                  <MatchCard
                    eachImage={eachImage}
                    key={eachImage.id}
                    thumbnailClick={this.thumbnailClick}
                  />
                ))}
              </ul>
            </div>
          ) : (
            <GameOverCard score={score} playAgain={this.playAgain} />
          )}
        </div>
      </div>
    )
  }
}

export default MatchGame
