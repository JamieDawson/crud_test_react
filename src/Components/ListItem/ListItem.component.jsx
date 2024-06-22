import DeleteUser from "../../Utils/DeleteUser";
import UpdateUser from "../../Utils/UpdateUser";
import ListButton from "../ListButton";
import PeopleContext from "../../PeopleContext";
import { useContext } from "react";

const ListItem = ({ name, age, index }) => {
  const { people, setPeople, userName, userAge } = useContext(PeopleContext);

  const handleDeleteUser = () => {
    DeleteUser(index, people, setPeople);
  };

  const handleUpdateUser = () => {
    UpdateUser(index, people, setPeople, userName, userAge);
  };

  return (
    <li>
      <div className="allinfo">
        Name: {name}, Age: {age}
        <div className="buttonstyles">
          <ListButton onClick={handleDeleteUser}>Delete</ListButton>
          <ListButton onClick={handleUpdateUser}>Update</ListButton>
        </div>
      </div>
    </li>
  );
};

export default ListItem;
