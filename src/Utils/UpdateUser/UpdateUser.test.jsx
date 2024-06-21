import UpdateUser from "./UpdateUser";

describe("All UpdateUser test", () => {
  test("testing if user can be updated", () => {
    const index = 0;
    const initialPeople = [
      { name: "Person 1", age: "14" },
      { name: "Person 2", age: "24" },
      { name: "Person 3", age: "22" },
    ];
    const setPeople = jest.fn();
    const userName = "jjj";
    const userAge = "555";

    UpdateUser(index, initialPeople, setPeople, userName, userAge);

    const expectedPeople = [
      { name: "jjj", age: "555" },
      { name: "Person 2", age: "24" },
      { name: "Person 3", age: "22" },
    ];

    expect(setPeople).toHaveBeenCalledWith(expectedPeople);
  });
});
