import React, { useContext } from "react";
import ListItem from "../ListItem";
import PeopleContext from "../../PeopleContext.js";

const List = () => {
  const { people } = useContext(PeopleContext);

  return (
    <ul>
      {people.map((person, index) => (
        <ListItem
          key={index}
          name={person.name}
          age={person.age}
          index={index}
        />
      ))}
    </ul>
  );
};

export default List;
