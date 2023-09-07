import React from "react";
import PortfolioCard from "../portfolioCard/PortfolioCard";
import portfolioweb from "/assets/portfolioweb.png";

const PortfolioList = () => {
  return (
    <div>
      <PortfolioCard
        cardImage={portfolioweb}
        title="Portfolio website"
        description="A dynamic showcase of my b development ills and projects, highlighting seamless........ "
        likes="4"
      />
    </div>
  );
};

export default PortfolioList
