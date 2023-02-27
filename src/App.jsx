import Starter from "./tutorial/01-useState/starter/04-useState-object"
import { useState } from "react";



function App() {

  // const [name, setName] = useState("John");
  // const [age, setAge] = useState(0);
  // const [hobby, setHobby] = useState("Football");

  const [person, setPerson] = useState({ name: "Akin", age: 30, hobby: "Fishing" });

  const renamePerson = () => {
    setPerson({
      name: "Omo'ba Adeyemo AA Aderinto iv",
      age: 2023 - 1940,
      hobby: "Preaching the gospel"
    })

  }

  console.log(person.name)
  console.log(person.age)
  console.log(person.hobby)

  // const updateDetails = () => {
  //   setAge(50);
  //   setHobby("Swimming");
  //   setName("Jimmy Agbaje")
  // }


  return (
    <div className='container'>
      <Starter />
      <div>
        <h1>{person.name}</h1>
        <h2>{person.age}</h2>
        <p>Enjoys:  {person.hobby}</p>
      </div>
      <button type="button" className="btn" onClick={renamePerson}>Click Me</button>

    </div>
  );
}

export default App;
