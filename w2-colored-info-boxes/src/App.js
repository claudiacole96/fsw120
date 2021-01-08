import React from "react"
import './App.css';
import Block from "./components/Block"

function App() {
  return (
    <div>
      <Block/>
      <Block/>
      <Block/>
      <Block/>
      <Block/>
      <Block/>
      <Block/>
      <Block/>
      <Block/>
      <Block title="box" subtitle="something" info="red box"/>
    </div>
  );
}

export default App;
