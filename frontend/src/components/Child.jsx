import React from "react";

const Child = ({ updateCount }) => {
  console.log("Child Rendered!");
  return (
    <button onClick={updateCount}>Increase From Child</button>
  );
};

export default React.memo(Child);
