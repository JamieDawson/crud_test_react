import DeleteUser from "../DeleteUser/";
import UpdateUser from "../UpdateUser/";
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
    <>
      <div>
        Name: {name}, Age: {age}
        <ListButton onClick={handleDeleteUser}>Delete</ListButton>
        <ListButton onClick={handleUpdateUser}>Update</ListButton>
      </div>
    </>
  );
};

export default ListItem;
