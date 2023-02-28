import Starter from "./tutorial/01-useState/starter/04-useState-object"
import { useState } from "react";



export function App() {

  const [person, setPerson] = useState({
    name: "segun Agbaje",
    age: 54,
    hobby: "Skin diving"
  })

  const updateDetails = () => {
    setPerson({
      name: "Adeyemo Akanbi Aderinto",
      age: 2023 - 1940,
      hobby: " Preaching the word of God"
    })
  }

  const { name, age, hobby } = person;



  return (
    <div className='container'>
      <Starter />
      <div>
        <h1>{name}</h1>
        <h2>{age} old this year</h2>
        <p>Enjoys:{hobby}</p>
      </div>
      <button type="button" className="btn" onClick={updateDetails} >Click Me</button>

    </div>
  );
}
