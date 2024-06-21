import AddUser from "./AddUser";

describe("Test for AddUser.js", () => {
  test("Checking if I can add a user", () => {
    const initialPeople = [
      { name: "Person 1", age: "14" },
      { name: "Person 2", age: "24" },
      { name: "Person 3", age: "22" },
    ];

    let setPeople = jest.fn();
    let newUser = { name: "Jamie", age: "22" };
    AddUser(newUser, initialPeople, setPeople);

    const expectedPeople = [
      { name: "Person 1", age: "14" },
      { name: "Person 2", age: "24" },
      { name: "Person 3", age: "22" },
      { name: "Jamie", age: "22" },
    ];

    expect(setPeople).toHaveBeenCalledWith(expectedPeople);
  });
});
