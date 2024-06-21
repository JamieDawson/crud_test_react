// src/AddUser.js
const AddUser = (newUser, people, setPeople) => {
  setPeople([...people, newUser]);
};

export default AddUser;
