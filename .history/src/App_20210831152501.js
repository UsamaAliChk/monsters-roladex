import React, { useState } from "react";
import "./App.css";
import Cardlist from "./components/card-list/card-list";
import SearchBox from "./components/search-box/search-box";
function App() {
  const [monsters, setmonsters] = useState([
    { name: "Frankenstien" ,id:"jsjaj"},
    { name: "Zombie" ,id:"1qdas"},
    { name: "Dracula", id:"14sds"},
    { name: "Frankenstien",id:"6mmds" },
    { name: "Zombie",id:"98kdjksa" },
    { name: "Dracula",id:"8187yh" },
    { name: "Frankenstien",id:"6jnajk" },
    { name: "Zombie" ,id:"lkw"},
    { name: "Dracula",id:"maksdjwk" },
  ]);

  const [searchText,setsearchText]=useState('');


  const filteredMonsters=monsters.filter(monster=>monster.name.toLowerCase().includes(searchText.toLowerCase()))

  return (
    <div className="App">
      <SearchBox handelChange={e=>setsearchText(e.target.value)} placeholder="Enter Name"/>
      <Cardlist monsters={filteredMonsters}/>
    </div>
  );
}

export default App;
