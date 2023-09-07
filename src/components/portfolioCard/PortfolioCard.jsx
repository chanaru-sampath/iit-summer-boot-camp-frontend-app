import "./PortfolioCard.css";

function PortfolioCard(props) {
  const { cardImage, title, description, likes } = props;

  return (
    <div className="portfolio-card">
      <div className="card-image">
        <img src={cardImage} alt={`image-${title}`} />
      </div>
      <div className="card-details">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="card-actions">
        <button>Like</button>
        <h6>{likes}</h6>
      </div>
    </div>
  );
}

export default PortfolioCard;
