import React from "react";
import { render, screen } from "@testing-library/react";
import ListItem from "./ListItem.component";

test('finds the text "Delete" in the button', () => {
  const mockPeople = [
    { name: "Person 1", age: "14" },
    { name: "Person 2", age: "24" },
    { name: "Person 3", age: "22" },
  ];
  const mockSetPeople = jest.fn();

  render(
    <ListItem
      name="Person 1"
      age="14"
      index={0}
      people={mockPeople}
      setPeople={mockSetPeople}
      userName="User"
      userAge="30"
    />
  );

  const deleteButton = screen.getByText("Delete");
  expect(deleteButton).toBeInTheDocument();
});
