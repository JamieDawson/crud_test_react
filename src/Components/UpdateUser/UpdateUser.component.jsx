const UpdateUser = (index, people, setPeople, userName, userAge) => {
  const newPeople = [...people];
  newPeople[index] = { ...newPeople[index], name: userName, age: userAge };
  setPeople(newPeople);
};

export default UpdateUser;
