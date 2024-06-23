import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import PeopleContext from "../../PeopleContext";

const UpdateUserPage = () => {
  const { index } = useParams();
  const { people, setPeople, userName, setUserName, userAge, setUserAge } =
    useContext(PeopleContext);
  const navigate = useNavigate();

  const handleUpdateUser = (e) => {
    e.preventDefault();
    const updatedPeople = [...people];
    updatedPeople[index] = { name: userName, age: userAge };
    setPeople(updatedPeople);
    navigate("/");
  };

  return (
    <div>
      <h2>Update User</h2>
      <form onSubmit={handleUpdateUser}>
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
        <button type="submit">Update User</button>
      </form>
    </div>
  );
};

export default UpdateUserPage;
