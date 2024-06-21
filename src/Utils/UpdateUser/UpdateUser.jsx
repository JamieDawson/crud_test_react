const UpdateUser = (index, people, setPeople, userName, userAge) => {
  const newPeople = [...people];
  newPeople[index] = { ...newPeople[index], name: userName, age: userAge };
  setPeople(newPeople);
};

export default UpdateUser;

//You don't destructure the props because this is a FUNCTION, not a COMPONENT.
