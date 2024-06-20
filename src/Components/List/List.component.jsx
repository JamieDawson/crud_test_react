import React from "react";
import ListItem from "../ListItem";

const List = ({
  people,
  setPeople,
  userName,

  userAge,
}) => {
  return (
    <>
      {people.map((person, index) => (
        <ListItem
          key={index}
          name={person.name}
          age={person.age}
          index={index}
          people={people}
          setPeople={setPeople}
          userName={userName}
          userAge={userAge}
        />
      ))}
    </>
  );
};

export default List;
