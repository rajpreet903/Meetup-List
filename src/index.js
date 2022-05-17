import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { FavouriteContextProvider } from "./store/favourites-conext";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <FavouriteContextProvider>
      <React.StrictMode>
         <App />
      </React.StrictMode>
   </FavouriteContextProvider>
);
