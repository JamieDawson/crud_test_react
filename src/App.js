import { useState } from "react";
import List from "./Components/List/index.jsx";
import Form from "./Components/Form/index.jsx";
import "./App.css";

function App() {
  const [userName, setUserName] = useState("a");
  const [userAge, setUserAge] = useState("");

  const [people, setPeople] = useState([
    { name: "Person 1", age: "14" },
    { name: "Person 2", age: "24" },
    { name: "Person 3", age: "22" },
  ]);

  return (
    <div className="App">
      <h1>learn react</h1>
      <List
        people={people}
        setPeople={setPeople}
        userName={userName}
        userAge={userAge}
      />
      <Form
        people={people}
        setPeople={setPeople}
        userName={userName}
        setUserName={setUserName}
        userAge={userAge}
        setUserAge={setUserAge}
      />
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
