import { useState, useEffect, useRef } from "react";
import "./styles.css";

export default function App() {
  const [inputvalue, setInputValue] = useState("");
  let count = useRef(0);
  useEffect(() => {
    count.current = count.current + 1;
  });
  return (
    <div className="App">
      <h1>No of rerenders = {count.current}</h1>
      <h2>Start editing to see some magic happen!</h2>
      <input
        type="text"
        value={inputvalue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h2>{inputvalue}</h2>
    </div>
  );
}
