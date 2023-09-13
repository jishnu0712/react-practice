import "./styles.css";
import { useReducer } from "react";

const todoListReducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    case "remove":
      return state.filter((item) => item !== action.payload);
    default:
      return state;
  }
};

export default function App() {
  const [items, dispatch] = useReducer(todoListReducer, []);

  const handleAdd = (item) => {
    dispatch({ type: "add", payload: item });
  };
  const handleRemove = (item) => {
    dispatch({ type: "remove", payload: item });
  };

  return (
    <div className="App">
      <ul>
        {items.map((item) => (
          <li key={item}>
            {item}
            <button onClick={() => handleRemove(item)}>remove</button>
          </li>
        ))}
      </ul>
      <button onClick={() => handleAdd("new item")}>Add</button>
    </div>
  );
}
