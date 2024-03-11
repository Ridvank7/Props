import Msg from "./components/Msg";
import NewMsg from "./components/NewMsg";
import Person from "./components/Person";
import data from "./data";

function App() {
  console.log(data);
  return (
    <div className="app">
      <h1>Props</h1>
      {/* <Msg name="Cemile Nur" />
      <NewMsg surname="Seven"/> */}
      {data.map((person, index) => {
        return (
          <div key={index}>
            <Person
              personName={person.name}
              personSurname={person.surname}
              personAge={person.age}
              personTel={person.tel}
            />
          </div>
        );
      })}
    </div>
  );
}

export default App;
