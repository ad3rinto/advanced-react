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
    users.map((user) => (
      <div className="container">
        <h2> {user.login} </h2>
        <p>{user.url}</p>
        <img src={user.avatar_url} width={300} />
      </div>
    ))


  )
};
export default FetchData;
