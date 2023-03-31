import Starter from "./tutorial/02-useEffect/starter/03-multiple-effects"
import { useState, useEffect } from "react";

const App = () => {
  //   const [value, setValue] = useState(0);
  //   const sayHello = () => {
  //     console.log("say Hello");

  //   };
  //   sayHello();

  //   useEffect(() => {
  //     console.log("hello from use effect");
  //   }, []);
  return (
    <div className="container">
      {/* <h1>Value: {value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>Click Me</button> */}
      <Starter />
    </div>
  )
};

export default App;
