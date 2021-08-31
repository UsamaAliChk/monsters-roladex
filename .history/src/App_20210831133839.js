import React, { useState } from "react";
import "./App.css";
import Cardlist from "./components/card-list/card-list";

function App() {
  const [monsters, setmonsters] = useState([
    { name: "Frankenstien" },
    { name: "Zombie" },
    { name: "Dracula" },
    { name: "Frankenstien" },
    { name: "Zombie" },
    { name: "Dracula" },
    { name: "Frankenstien" },
    { name: "Zombie" },
    { name: "Dracula" },
  ]);

  return (
    <div className="App">
      <Cardlist>
        {
          monsters.map(monster=>{
            return <h1>{monster.name}</h1>
          })
        }
      </Cardlist>
      
    </div>
  );
}

export default App;
