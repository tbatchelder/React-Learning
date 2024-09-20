function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "Lodon", "Paris"];
  items = [];
  // if (items.length == 0)
  //   return (
  //     <>
  //       <p>No item found.</p>
  //     </>
  //   );

  // const message = items.length == 0 ? <p>No items found</p> : null;

  // const getMessage = () => {
  //   return items.length == 0 ? <p>No items found</p> : null;
  // };

  return (
    <>
      <h1>List Group</h1>
      {/* {items.length == 0 ? <p>No items found</p> : null} */}
      {/* {message} */
      /* goes with the const message above*/}
      {/* {getMessage()} */
      /*goes with the const function above */}
      {
        items.length == 0 && (
          <p>No item found.</p>
        ) /* This removes the null and makes it more concise.  It works by saying if length = 0, then it is true and the string after && is always true so it prints the element.  If length is not 0, then it is false and prints nothing*/
      }
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
