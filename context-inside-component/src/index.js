import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import MyContext from "./MyContext";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <MyContext.Provider value={{ msg: " This string coming from context" }}>
      <App />
    </MyContext.Provider>
  </StrictMode>
);
