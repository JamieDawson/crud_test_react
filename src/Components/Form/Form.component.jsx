// src/components/Form.component.jsx
import { useState } from "react";
import AddUser from "../../Utils/AddUser";

const Form = ({
  people,
  setPeople,
  userName,
  setUserName,
  userAge,
  setUserAge,
}) => {
  const handleAddUser = (e) => {
    e.preventDefault();
    const newUser = { name: userName, age: userAge };
    AddUser(newUser, people, setPeople);
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
