import HeroSection from "../../components/heroSection/HeroSection";
import PortfolioCard from "../../components/portfolioCard/PortfolioCard";
import Technologies from "../technologies/Technologies";

const name = "John Doe";
const aboutme = "Experienced web developer creating engaging websites. Let's bring your digital vision to life!"

const Home = () => {
  const technologies = ["NextJS", "React", "Tailwind CSS", "Figma", "Express"];
  return <div>
    <HeroSection name={name} aboutme={aboutme} />
    <PortfolioCard />
      <Technologies title="Technologies" technologies={technologies}/>
    <PortfolioCard name={name} aboutme={aboutme} />
  </div>
};

export default Home;
