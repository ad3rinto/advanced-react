import { useState } from "react";
import { data } from "../../../data"

const UserChallenge = () => {



  const [name, setName] = useState("");
  const [users, setUsers] = useState(data);



  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name) return;
    const fakeId = Date.now()
    let newItem = { id: fakeId, name }
    console.log(newItem)
    const updatedUsers = [...users, newItem]
    setUsers(updatedUsers)
    setName("")
  }

  const deleteItem = (id) => {
    const updatedUsers = users.filter((chap) => chap.id !== id);
    setUsers(updatedUsers)
  }




  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input type='text' className='form-input' id='name' value={name} onChange={((event) => { setName(event.target.value) })} />
        </div>

        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
      {users.map((person) => {
        return (
          <div key={person.id} className="container">
            <h4>{person.name}</h4>
            <button className="btn btn-primary" onClick={() => deleteItem(person.id)}>Delete</button>
          </div>)
      })}
    </div>

  );
};
export default UserChallenge;
