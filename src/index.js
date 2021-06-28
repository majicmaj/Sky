import { StrictMode } from "react";
import * as ServiceWorker from "./ServiceWorker";
import ReactDOM from "react-dom";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
ServiceWorker.register();
