import { createContext, useState } from "react";

const PeopleContext = createContext();

export const PeopleProvider = ({ children }) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [people, setPeople] = useState([
    { name: "Person 1", age: "14" },
    { name: "Person 2", age: "24" },
    { name: "Person 3", age: "22" },
  ]);

  return (
    <PeopleContext.Provider
      value={{ userName, setUserName, userAge, setUserAge, people, setPeople }}
    >
      {children}
    </PeopleContext.Provider>
  );
};

export default PeopleContext;
