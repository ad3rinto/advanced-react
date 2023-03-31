import { useEffect, useState } from "react";








const FetchData = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const url = 'https://api.github.com/users';
    const pullData = () => {
      fetch(url)
        .then((resp) => resp.json())
        .then((data) => setUsers(data)).then(console.log(users))
        .catch((err) => console.log(err));
    };
    pullData()
  }, []);

  return (
    <section className="user-container">
      <h3 className="tc">Github Users</h3>
      <ul className="users">
        {users.map((user) => (
          <li key={user.id} className="users">
            <img className="users" src={user.avatar_url} />
            <div><h5 className="users"> {user.login} </h5>
              <a href={user.url} className="users">Link</a>
            </div>
          </li>))}
      </ul>

    </section>
  )

};
export default FetchData;
