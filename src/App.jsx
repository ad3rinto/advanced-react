import Starter from "./tutorial/01-useState/starter/03-useState-array"
import { useState } from "react";
import { data } from "../../03-advanced-react/src/data";

console.log(data)
function App() {

  const [people, setPeople] = useState(data);







  return (
    <div className='container'>
      <h2>Advanced React</h2>
      <Starter />
      {people.map((person) => {
        return <h3> {person.name} </h3>

      })}




    </div>
  );
}

export default App;
