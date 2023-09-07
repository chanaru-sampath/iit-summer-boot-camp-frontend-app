import profile from "../../assets/profile.png"
import github from "../../assets/github.png"
import instagram from "../../assets/instagram.png"
import linkedin from "../../assets/linkedin.png"
import twitter from "../../assets/twitter.png"
import "./PortfolioCard.css";

function PortfolioCard(props) {
  const {
    name,
    aboutme
  } = props;

  return (
    <div>
      <section className="aboutme">
        <div className="title">
          <h1>{name}</h1>
          <p>{aboutme}</p>
        </div>
      <div className="prof-image">
        <img src={profile} style={{height: "257px", padding: "8px", alt: "profile image"}} />
      </div>
      </section>
      <section>
       <img src={github} style={{height: "24px", padding: "6px", alt: "github logo"}} />
       <img src={instagram} style={{height: "24px", padding: "6px", alt: "instagram logo"}} />
       <img src={linkedin} style={{height: "24px", padding: "6px", alt: "linkedin logo"}} />
       <img src={twitter} style={{height: "24px", padding: "6px", alt: "twitter logo"}} />
      </section>
      <button>More About Me</button>
    </div>
  )
}

export default PortfolioCard;