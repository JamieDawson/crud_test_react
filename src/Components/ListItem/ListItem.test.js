//This test is used for the prop drilling version of my app.

// import React from "react";
// import { render, screen } from "@testing-library/react";
// import ListItem from "./ListItem.component";

// test('finds the text "Delete" in the button', () => {
//   const mockPeople = [
//     { name: "Person 1", age: "14" },
//     { name: "Person 2", age: "24" },
//     { name: "Person 3", age: "22" },
//   ];
//   const mockSetPeople = jest.fn();

//   render(
//     <ListItem
//       name="Person 1"
//       age="14"
//       index={0}
//       people={mockPeople}
//       setPeople={mockSetPeople}
//       userName="User"
//       userAge="30"
//     />
//   );

//   const deleteButton = screen.getByText("Delete");
//   expect(deleteButton).toBeInTheDocument();

//   //Update to click button with fireEvent
//   //Text is rendering or what is provided as a prop.
//   //Name of the person is present and being deleted.
//   //Can get both buttons and it properly calls mockSetPeople!
// });

import React from "react";
import { render, screen } from "@testing-library/react";
import ListItem from "./ListItem.component.jsx";
import { PeopleProvider } from "../../PeopleContext"; // Import the PeopleProvider

test('finds the text "Delete" in the button', () => {
  // Create a mock list of people
  const mockPeople = [
    { name: "Person 1", age: "14" },
    { name: "Person 2", age: "24" },
    { name: "Person 3", age: "22" },
  ];

  // Define mock functions for context values
  const mockSetPeople = jest.fn();
  const mockSetUserName = jest.fn();
  const mockSetUserAge = jest.fn();

  // Render the component wrapped with PeopleProvider
  render(
    <PeopleProvider
      value={{
        people: mockPeople,
        setPeople: mockSetPeople,
        userName: "",
        setUserName: mockSetUserName,
        userAge: "",
        setUserAge: mockSetUserAge,
      }}
    >
      <ListItem name="Person 1" age="14" index={0} />
    </PeopleProvider>
  );

  // Find the "Delete" button in the rendered output
  const deleteButton = screen.getByText("Delete");
  // Check if the "Delete" button is in the document
  expect(deleteButton).toBeInTheDocument();
});
