import React from "react";

function Stock({name,price,updatePortfolio,stockInPorfolio}) {
  return (
    <div>
      <div className="card" onClick={()=>updatePortfolio(name, stockInPorfolio)}>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
