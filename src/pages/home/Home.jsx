import { useState, useEffect } from "react";
import HeroSection from "../../components/heroSection/HeroSection";
import ListItems from "../../components/listItems/ListItems";
import PortfolioCard from "../../components/portfolioCard/PortfolioCard";

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
      <ListItems title="Technologies" items={technologies} onSelect={() => console.log("selected")} selectedItem={technologies[1]} />
      <ListItems title="Portfolio" items={projects} onSelect={() => console.log("selected")} />
      <PortfolioCard name={name} aboutme={aboutme} />
    </div>
  );
};

export default Home;
