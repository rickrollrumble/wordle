import { useEffect, useState } from "react";
import "./App.css";
import Wordle from "./components/wordle";

function App() {
  const [solution, setSolution] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/solutions")
      .then((res) => res.json())
      .then((json) => {
        const randomSolution = json[Math.floor(Math.random() * json.length)];
        setSolution(randomSolution.word);
      });
  }, [setSolution]);

  return (
    <div className="App">{solution && <Wordle solution={solution} />}</div>
  );
}

export default App;
