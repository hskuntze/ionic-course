import { setupIonicReact } from "@ionic/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

/* Core CSS para componentes Ionic: */
import "@ionic/react/css/core.css";

/* CSS básico para aplicações feitas com Ionic: */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* CSS opcional */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

setupIonicReact();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
