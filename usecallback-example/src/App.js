import "./styles.css";
import { useCallback, useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Jishnu");

  const handleClick = useCallback(() => {
    setCount((count) => count + 1);
  }, [count]);

  return (
    <div className="App">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h1>{name}</h1>
      <h2>{count}</h2>
      <ChildComponent onClick={handleClick} />
    </div>
  );
}

function ChildComponent({ onClick }) {
  return <button onClick={onClick}>ClickMe</button>;
}
