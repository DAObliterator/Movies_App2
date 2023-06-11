{
  actors.map((actor) => {
    <div className="movie__actor">{actor}</div>;
  });
}

<div className="movie__actors">
  <div>Actors</div>
  <div>
    {actors.map((actor) => {
      return (
        <ul>
          <li className="movie__actor">{actor}</li>
        </ul>
      );
    })}
  </div>
<div> </div>
</div>;


```
function App() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);

  const handleUser = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const addUser = () => {
    setUsers([...users, user]);
  };

  return (
    <>
      <form>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          onChange={handleUser}
        />
        <input type="text" name="age" placeholder="age" onChange={handleUser} />
        <input
          type="email"
          name="email"
          placeholder="email"
          onChange={handleUser}
        />
        <input type="button" value="Add User" onClick={addUser} />
      </form>
    </>
  );
}
```
