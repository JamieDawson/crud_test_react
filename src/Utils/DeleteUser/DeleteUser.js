const DeleteUser = (index, people, setPeople) => {
  // console.log(people);
  const newPeople = [...people];
  newPeople.splice(index, 1);
  setPeople(newPeople);
};

export default DeleteUser;
