import { StrictMode } from "react";
import Store from "./utils/GlobalContext";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <StrictMode>
    <Store>
      <App />
    </Store>
  </StrictMode>,
  document.getElementById("root")
);
