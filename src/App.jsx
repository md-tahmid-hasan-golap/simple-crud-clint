import "./App.css";
import Users from "./components/Users";

const userPromisd = fetch("http://localhost:3000/users").then((res) =>
  res.json()
);

function App() {
  return (
    <>
      <h1>Simple Crud Oparation</h1>
      <Users userPromisd={userPromisd}></Users>
    </>
  );
}

export default App;
