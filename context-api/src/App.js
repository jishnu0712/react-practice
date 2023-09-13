import "./styles.css";
import { useState, useEffect, useContext } from "react";
import MyContext from "./Context";
export default function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });

  const context = useContext(MyContext);
  return (
    <div className="App">
      <h3>{context.message}</h3>
      <h1>Rendered count is {count}</h1>
    </div>
  );
}
