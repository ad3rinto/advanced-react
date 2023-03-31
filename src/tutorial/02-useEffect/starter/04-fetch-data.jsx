import { useEffect, useState } from "react";








const FetchData = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const url = 'https://api.github.com/users';

    fetch(url)
      .then((resp) => resp.json())
      .then((data) => setUsers(data)).then(console.log(users))
      .catch((err) => console.log(err));
  }, []);

  return (
    users.map((user) => (
      <>
        <h2> {user.login} </h2>
        <img src={user.avatar_url} width={500} />
      </>
    ))


  )
};
export default FetchData;
