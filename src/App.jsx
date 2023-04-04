import Starter from "./tutorial/03-conditional-rendering/starter/07-user-challenge"

import { useState } from "react";

const App = () => {
  const [user, setUser] = useState({ name: "john" });

  const login = () => {
    setUser(previousState => {
      return { ...previousState, name: "test" }
    })
  }

  const logout = () => {
    setUser(previousState => {
      return { ...previousState, name: null }
    })
  }


  const check = (<div>
    <h2>Hello {user.name}</h2>
    <button className="btn btn-primary" onClick={logout}>Logout</button>
  </div>)

  const uncheck = (<div>
    <h2>Please Login</h2>
    <button className="btn btn-primary" onClick={login}>Login</button>
  </div>)

  return (
    <div className="container">
      <Starter />
      <h2>{user ? check : uncheck}</h2>

    </div>
  )
};

export default App;
