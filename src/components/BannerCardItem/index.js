import './index.css'

const BannerCardItem = props => {
  const {bannerData} = props
  const {headerText, description, className} = bannerData

  return (
    <li className={`${className} card-item`}>
      <div>
        <h1 className="heading">{headerText}</h1>
        <p className="description">{description}</p>
        <button className="btn" type="button">
          Show More
        </button>
      </div>
    </li>
  )
}

export default BannerCardItem
