import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import MyContext from "./Context.js";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <MyContext.Provider value={{ message: "hihihihihihi" }}>
      <App />
    </MyContext.Provider>
  </StrictMode>
);
