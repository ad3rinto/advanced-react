import Starter from "./tutorial/01-useState/starter/01-error-example"
import { useState } from "react";

function App() {

  const [count, setCount] = useState(0);

  const change = () => {
    setCount(count + 1)
  }




  // const increaseNumber = () => {
  //   count = count++
  //   console.log(count)
  // }

  return (
    <div className='container'>
      <h2>Advanced React</h2>
      <Starter />
      <h3>{count}</h3>
      <button onClick={change}>Click Me</button>
    </div>
  );
}

export default App;
