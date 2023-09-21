import React,{useState, useEffect} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const[stockList, setStockList] = useState([])
  const[userStocks, setUserStocks] = useState([])
  const[displayedStockList, setDisplayedStockList] = useState([])

  useEffect(()=>{
    fetch("http://localhost:3001/stocks")
    .then(resp=>resp.json())
    .then(stocks=>{
      setStockList(stocks)
      setDisplayedStockList(stocks)
    })
  },[])

  function updatePortfolio(stockName,stockInPorfolio){
    if(!stockInPorfolio){
      const stockToAdd = stockList.find((stock)=>{
        return stock.name === stockName
      })
      if(!userStocks.find((stock)=>stockToAdd===stock)){
        setUserStocks([...userStocks,stockToAdd])
      }
    }
    else{
      const updatedUserStocks = userStocks.filter((stock)=>{
        return stock.name !== stockName
      })
      console.log(updatedUserStocks)
      setUserStocks(updatedUserStocks)
    }
  }

  function sortAlphabetically(){
    const copiedArray = [...stockList]
    const sortedStocks= copiedArray.sort((stockA,stockB)=>{
      if(stockA.name>stockB.name){
        return 1;
      }
      if(stockA.name<stockB.name){
        return -1;
      }
      return 0;
    })
    setDisplayedStockList(sortedStocks)
  }

  function sortByPrice(){
    const copiedArray = [...stockList]
    const sortedStocks = copiedArray.sort((stockA,stockB)=>stockA.price-stockB.price)
    setDisplayedStockList(sortedStocks)
  }

  function filterStocks(event){
    const stockType = event.target.value
    console.log(stockType)
    const copiedArray = [...stockList]
    const filteredArray = copiedArray.filter((stock)=>{
      return stock.type === stockType;
    })
    setDisplayedStockList(filteredArray)
  }

  return (
    <div>
      <SearchBar sortAlphabetically={sortAlphabetically} sortByPrice={sortByPrice} filterStocks={filterStocks}/>
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={displayedStockList} updatePortfolio={updatePortfolio}/>
        </div>
        <div className="col-4">
          <PortfolioContainer userStocks={userStocks} updatePortfolio={updatePortfolio}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
