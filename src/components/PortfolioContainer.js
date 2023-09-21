import React from "react";
import Stock from "./Stock";

function PortfolioContainer({userStocks, updatePortfolio}) {
  const userCurretStocks = userStocks.map(stock=>{
    return <Stock key={stock.id} name={stock.name} price={stock.price} updatePortfolio={updatePortfolio} stockInPorfolio={true}/>
  })

  return (
    <div>
      <h2>My Portfolio</h2>
      {userCurretStocks}
    </div>
  );
}

export default PortfolioContainer;
