import React from "react";
import ServiceCard from "./components/ServiceCard";
import './App.css'

function App(){
  return(
    <div className="app">
     <ServiceCard title="Web development" description="using React library"></ServiceCard>
     <ServiceCard title="DSA" description="using GFG to learn"></ServiceCard>
    </div>
  )
}

export default App