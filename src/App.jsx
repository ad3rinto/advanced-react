import Starter from "./tutorial/01-useState/starter/03-useState-array"
import { useState } from "react";
import { data } from "./data";

console.log(data)
function App() {

  const [people, setPeople] = useState(data);

  const clearAll = () => {
    setPeople([])
  }
  const removeItem = (id) => {
    const newPeople = people.filter((person) => person.id !== id)
    setPeople(newPeople)
  }









  return (
    <div className='container'>
      <h2>Advanced React</h2>
      <Starter />
      {people.map((person) => {
        const { id, name } = person;
        return <div key={id}>
          <h2>{name} </h2>
          <button onClick={() => removeItem(id)}>Reset</button>
        </div>

      })}
      <button onClick={clearAll} style={{ marginTop: "2rem" }} className="btn">Complete Reset</button>



    </div>
  );
}

export default App;
