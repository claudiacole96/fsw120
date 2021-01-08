import React from "react"
import './App.css';
import Block from "./components/Block"

function App() {
  return (
    <div>
      <h1>Top 10 TV Shows</h1>
      <Block title="Planet Earth ll" subtitle="(2016)" info="Rating: 9.5" backgroundColor="GoldenRod"/>
      <Block title="Planet Earth" subtitle="(2006)" info="Rating: 9.4" backgroundColor="Gray"/>
      <Block title="Band of Brothers" subtitle="(2001)" info="Rating: 9.4" backgroundColor="DarkGoldenRod"/>
      <Block title="Breaking Bad" subtitle="(2008)" info="Rating: 9.4" backgroundColor="LightBlue"/>
      <Block title="Chernobyl" subtitle="(2019)" info="Rating: 9.4" backgroundColor="Purple"/>
      <Block title="The Wire" subtitle="(2002)" info="Rating: 9.3" backgroundColor="Blue"/>
      <Block title="Blue Planet ll" subtitle="(2017)" info="Rating: 9.3" backgroundColor="Green"/>
      <Block title="Our Planet" subtitle="(2019)" info="Rating: 9.3" backgroundColor="Yellow"/>
      <Block title="Cosmos: A Spacetime Odyssey" subtitle="(2014)" info="Rating: 9.2" backgroundColor="Orange"/>
      <Block title="Cosmos" subtitle="(1980)" info="Rating: 9.2" backgroundColor="Red"/>
    </div>
  );
}

export default App;
