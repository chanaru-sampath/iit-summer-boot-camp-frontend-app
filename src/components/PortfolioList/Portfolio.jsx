import React from "react";
import PortfolioCard from "../portfolioCard/PortfolioCard";
import "./Portfolio.css";

const PortfolioList = (props) => {

  const {
    itemsList = [],
    selectedItem
  } = props;

  return (
    <div className="portfolio-container">
      {
        itemsList.map(item => {
          const {
            title,
            category,
            image,
            likes,
            description,
          } = item;

          return (
          <PortfolioCard
            cardImage={image}
            title={title}
            description={description}
            likes={likes}
            selected={selectedItem === category}
          />
        )})
      }
      
    </div>
  );
};

export default PortfolioList
