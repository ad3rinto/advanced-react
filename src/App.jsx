import Starter from "./tutorial/02-useEffect/starter/02-useEffect-basics"
import { useState } from "react";



export function App() {

  const [person, setPerson] = useState({
    name: "Dominic Longstaff",
    age: 54

  })

  const updateDetails = () => {
    setPerson({
      name: "Professor Edwin Young",
      age: 2016 - 1940
    })
  }

  const { name, age, hobby, securityClearance, nextOfKin, occupation } = person;

  console.log(name)
  console.log(occupation)
  console.log(nextOfKin)


  return (
    <div className='container'>
      <Starter />
      <div>
        <h1>{name}</h1>
        <h2>{age}</h2>

      </div>
      <button type="button" className="btn" onClick={updateDetails} >Click Me</button>

    </div>
  )
};