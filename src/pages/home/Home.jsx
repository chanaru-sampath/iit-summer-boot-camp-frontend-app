import { useEffect } from "react";
import HeroSection from "../../components/heroSection/HeroSection";
import ListItems from "../../components/listItems/ListItems";
import PortfolioCard from "../../components/portfolioCard/PortfolioCard";
import { useState } from "react";

const name = "John Doe";
const aboutme =
  "Experienced web developer creating engaging websites. Let's bring your digital vision to life!";
const technologies = ["NextJS", "React", "Tailwind CSS", "Figma", "Express"];
const projects = ["NextJS", "React", "Express"];

const Home = () => {
  const [portfolioData, setPortfolioData] = useState([]);
  const [apiLoading, setApiLoading] = useState(false);

  useEffect(() => {
    const fetchPortfolioData = async () => {
      setApiLoading(true);
      const resp = await fetch("/settings/portfolio.json");
      const data = await resp.json();
      setPortfolioData(data);
      setApiLoading(false);
    };

    fetchPortfolioData();
  }, []);

  return (
    <div>
      <HeroSection name={name} aboutme={aboutme} />
      <ListItems title="Technologies" items={technologies} />
      <ListItems title="Portfolio" items={projects} />
      <PortfolioCard name={name} aboutme={aboutme} />
    </div>
  );
};

export default Home;
