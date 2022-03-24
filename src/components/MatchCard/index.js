import './index.css'

const MatchCard = props => {
  const {eachImage, thumbnailClick} = props
  const {id, thumbnailUrl, imageUrl} = eachImage

  const onClickThumbnail = () => {
    thumbnailClick(imageUrl)
  }
  return (
    <li>
      <button
        type="button"
        className="thumbnail-image"
        onClick={onClickThumbnail}
      >
        <img src={thumbnailUrl} className="thumbnail-button" alt="thumbnail" />
      </button>
    </li>
  )
}

export default MatchCard
