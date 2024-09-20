import { MouseEvent } from "react";

function ListGroup() {
  const items = ["New York", "San Francisco", "Tokyo", "Lodon", "Paris"];
  // items = [];
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

  // An event handler
  const handleClick = (event: MouseEvent) => console.log(event);

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
        {items.map((item /*, index*/) => (
          <li
            className="list=group-item active"
            key={item}
            // onClick={
            //   (event) =>
            //     console.log(
            //       event
            //     ) /*by using item instead of some string, we can see which item was actually clicked.  using index allows us to see which idex was used*/
            // }
            onClick={handleClick}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
