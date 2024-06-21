import DeleteUser from "./DeleteUser";

test("removes the 0th index item from people array", () => {
  const initialPeople = [
    { name: "Person 1", age: "14" },
    { name: "Person 2", age: "24" },
    { name: "Person 3", age: "22" },
  ];

  const setPeople = jest.fn();

  DeleteUser(0, initialPeople, setPeople);

  // The newPeople array should have removed the first person
  const expectedPeople = [
    { name: "Person 2", age: "24" },
    { name: "Person 3", age: "22" },
  ];

  expect(setPeople).toHaveBeenCalledWith(expectedPeople);
});
