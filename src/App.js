import { useState } from "react";
import "./App.css";

function App() {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");

  const [people, setPeople] = useState([
    { name: "Person 1", age: "14", clicked: false },
    { name: "Person 2", age: "24", clicked: false },
    { name: "Person 3", age: "22", clicked: false },
  ]);

  const addName = (e) => {
    e.preventDefault();

    const newObject = { name: userName, age: userAge };
    setPeople([...people, newObject]);
  };

  const deleteItem = (index) => {
    const newPeople = [...people];
    newPeople.splice(index, 1);
    setPeople(newPeople);
  };

  const updateItem = (index) => {
    const newPeople = [...people];
    if (!userName || !userAge) return;

    newPeople[index] = { ...newPeople[index], name: userName, age: userAge };
    setPeople(newPeople);
  };

  return (
    <div className="App">
      <form onSubmit={addName}>
        <input
          placeholder="name"
          onChange={(e) => setUserName(e.target.value)}
        />
        <input placeholder="age" onChange={(e) => setUserAge(e.target.value)} />
        <button>Add name and age</button>
      </form>

      {people.map((person, index) => (
        <div key={index}>
          {person.name}
          <button onClick={() => deleteItem(index)}>Delete</button>
          <button onClick={() => updateItem(index)}>Update</button>
        </div>
      ))}
    </div>
  );
}

export default App;

/*
CRUD:

1) Create:
Make a form that pushes a name and age to the array of objects.

2) Read:

3) Update:
Make some way for them to be selected so that when they are selected, the data can be changed.

4) Delete:
My state can be an array of objects. I need to use .splice on the object to remove it.


*/
