import HeroSection from "../../components/heroSection/HeroSection";
import PortfolioCard from "../../components/portfolioCard/PortfolioCard";

const name = "John Doe";
const aboutme = "Experienced web developer creating engaging websites. Let's bring your digital vision to life!"

const Home = () => {
  return <div>
    <HeroSection name={name} aboutme={aboutme} />
    <PortfolioCard />
  </div>
};

export default Home;
