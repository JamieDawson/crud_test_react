import DeleteUser from "../../Utils/DeleteUser";
import UpdateUser from "../../Utils/UpdateUser";
import ListButton from "../ListButton";

const ListItem = ({
  name,
  age,
  index,
  people,
  setPeople,
  userName,
  userAge,
}) => {
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
