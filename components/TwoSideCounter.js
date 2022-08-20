import React from "react";

export const TwoSideCounter = () => {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <button onClick={() => setCount((i) => i - 1)}>-</button>
      {" " + count + " "}
      <button onClick={() => setCount((i) => i + 1)}>+</button>
    </div>
  );
};
