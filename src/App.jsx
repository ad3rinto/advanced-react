import Starter from "./tutorial/03-conditional-rendering/starter/07-user-challenge"

import { useState } from "react";

const App = () => {
  const [user, setUser] = useState(null);

  const login = () => {
    //normally obtained via db or API connection
    setUser({ name: "Vegetarian" });
  };

  const logout = () => {
    setUser(null)
  }


  return (
    <div className="container">
      <Starter />
      {user ?
        (
          <div>
            <h4>Hello there {user.name}</h4>
            <button className="btn btn-primary" onClick={logout}>Logout</button>
          </div>


        ) : (
          <div>
            <h4>Please login</h4>
            <button className="btn btn-primary" onClick={login}>Login</button>
          </div>
        )}

    </div>
  )
};

export default App;
