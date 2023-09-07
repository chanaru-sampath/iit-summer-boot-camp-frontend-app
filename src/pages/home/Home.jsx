import PortfolioCard from "../../components/portfolioCard/PortfolioCard";

const name = "John Doe";
const aboutme = "Experienced web developer creating engaging websites. Let's bring your digital vision to life!"

const Home = () => {
  return <div>
    <PortfolioCard name={name} aboutme={aboutme} />
  </div>
};

export default Home;
