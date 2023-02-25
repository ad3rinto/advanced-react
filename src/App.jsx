import Starter from "./tutorial/01-useState/starter/04-useState-object"
import { useState } from "react";



function App() {

  const [name, setName] = useState("John");
  const [age, setAge] = useState(0);
  const [hobby, setHobby] = useState("Football");

  const updateDetails = () => {
    setAge(60);
    setHobby("Politicking");
    setName("Peter Obi")
  }


  return (
    <div className='container'>
      <Starter />
      <div>
        <h1>{name}</h1>
        <h2>{age}</h2>
        <p>Enjoys:  {hobby}</p>
      </div>
      <button type="button" className="btn" onClick={updateDetails}>Click Me</button>

    </div>
  );
}

export default App;
