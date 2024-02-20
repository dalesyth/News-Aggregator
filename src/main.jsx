import React from "react";
import ReactDOM from "react-dom/client";
import { Title, App, Filters } from "./components";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Title />
    <Filters/>
    <App />
  </React.StrictMode>
);
