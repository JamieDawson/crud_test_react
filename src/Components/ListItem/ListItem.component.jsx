import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ListButton from "../ListButton";
import PeopleContext from "../../PeopleContext";
import DeleteUser from "../../Utils/DeleteUser";

const ListItem = ({ name, age, index, people }) => {
  const { setPeople } = useContext(PeopleContext);

  const handleDeleteUser = () => {
    DeleteUser(index, people, setPeople);
  };

  return (
    <li>
      <div className="allinfo">
        Name: {name}, Age: {age}
        <div className="buttonstyles">
          <Link to={`/update/${index}`}>
            <ListButton>Update</ListButton>
          </Link>
          <ListButton onClick={handleDeleteUser}>Delete</ListButton>
        </div>
      </div>
    </li>
  );
};

export default ListItem;
