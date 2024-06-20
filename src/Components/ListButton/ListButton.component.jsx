const ListButton = ({ onClick, children, ...props }) => {
  return <button onClick={onClick}>{children}</button>;
};

export default ListButton;

/*
onClick prop: This is the function that will be executed when the button is clicked.

children prop: This is the content inside the <ListButton> tags, such as "Delete" or "Update".

...props: This syntax collects any additional props passed to the ListButton and spreads them onto the <button> element. 
This allows you to pass other attributes like className, style, etc.

*/
