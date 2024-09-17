// PacalCasing - capitalize first letter of every word
function Message() {
  // JSX: Javascript XML
  const name = "Stormfire"; // make line 7 work
  //const name = ""; // Make like 8 work
  if (name)
    return <h1>Hello {name}, it's Baby and Emblem!</h1>
  return <h1>Hellow Matrix, our guardian.</h1>
}

// In order to use this, we must export it.
// Note that file name = function name = export name
// Called from App.tsx
export default Message;