import React from "react";
import Stock from "./Stock";

function StockContainer({stocks, updatePortfolio}) {

  const avaiableStocks = stocks.map(stock=>{
    return <Stock key={stock.id} name={stock.name} price={stock.price} updatePortfolio={updatePortfolio} stockInPortfolio={false}/>
  })  

  return (
    <div>
      <h2>Stocks</h2>
      {avaiableStocks}
    </div>
  );
}

export default StockContainer;
