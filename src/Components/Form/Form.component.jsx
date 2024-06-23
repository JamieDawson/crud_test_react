// src/components/Form.component.jsx
import { useContext, useState } from "react";
import AddUser from "../../Utils/AddUser";
import PeopleContext from "../../PeopleContext";

const Form = () => {
  const { people, setPeople, userName, setUserName, userAge, setUserAge } =
    useContext(PeopleContext);

  const handleAddUser = (e) => {
    e.preventDefault();
    const newUser = { name: userName, age: userAge };
    AddUser(newUser, people, setPeople);
    setUserName("");
    setUserAge("");
  };

  return (
    <form onSubmit={handleAddUser}>
      <input
        placeholder="name"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <input
        placeholder="age"
        value={userAge}
        onChange={(e) => setUserAge(e.target.value)}
      />
      <button type="submit">Submit name and age</button>
    </form>
  );
};

export default Form;
