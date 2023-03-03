import Starter from "./tutorial/02-useEffect/starter/02-useEffect-basics"
import { useState } from "react";



export function App() {

  const [person, setPerson] = useState({
    name: "Dominic Longstaff",
    age: 54,
    hobby: "Skin diving",
    occupation: "Actor",
    nextOfKin: "Angela Blackstone",
    securityClearance: true
  })

  const updateDetails = () => {
    setPerson({
      name: "Professor Edwin Young",
      age: 2016 - 1940,
      hobby: " Preaching the word of God",
      occupation: "University Administrator",
      nextOfKin: "John T Craig",
      securityClearance: false
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
        <h3>Is security cleared: {securityClearance}</h3>
        <p>Enjoys:{hobby}</p>
        <h4>Works as a {occupation}</h4>
        <p>Next of kin is : {nextOfKin}</p>
      </div>
      <button type="button" className="btn" onClick={updateDetails} >Click Me</button>

    </div>
  )
};