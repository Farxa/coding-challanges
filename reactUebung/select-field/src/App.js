import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import People from "./People";
import NameUnten from "./NameUnten";

function App() {
  const [people, setPeople] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    fetch("https://swapi.dev/api/people")
      .then(res => res.json())
      .then(res => {
        setPeople(res.results);
      });
  }, []);

  
  return (
    <div className="App">
      <People people={people} index={index} setIndex={setIndex}/>
      <NameUnten people={people} index={index} setIndex={setIndex}/>
    </div>
  );
}

export default App;
