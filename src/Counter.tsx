import React, { useState, useEffect } from "react";
import "./styles.css";

export default function Counter() {
  const [count, setCount] = useState(0);

  // side effect means you change a status and make a update render, then you can call a new function
  useEffect(() => {
    // Update the document title using the browser API
    // document.title = `You clicked ${count} times`;
    setTimeout(() => {
      console.log(`You clicked ${count} times`);
      console.log(`it cause bby render click and then make a new async call`);
    }, 100);
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
