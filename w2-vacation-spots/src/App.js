import React from "react"

import "./App.css"
import vacationSpots from "./components/vacationData"
import Spot from "./components/Spot"

function App() {
  const vacationComponents = vacationSpots.map(
    loc => <Spot key={loc.place} place={loc.place} price={loc.price} timeToGo={loc.timeToGo} />
  )
  
  return (
    <div style={{width: "75%", margin: "auto"}}>
      <h1 style={{fontSize: "45px"}}>Vacation Spots</h1>
      {vacationComponents}
    </div>
  )
}

export default App