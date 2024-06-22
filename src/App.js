import { useState } from "react";
import List from "./Components/List/index.jsx";
import Form from "./Components/Form/index.jsx";
import { PeopleProvider } from "./PeopleContext.js";
import "./App.css";

function App() {
  return (
    <PeopleProvider>
      <div className="App">
        <h1>learn react</h1>
        <List />
        <Form />
      </div>
    </PeopleProvider>
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
