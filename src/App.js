import React from "react";
import Application from "./Components/Application";
import UserProvider from "./Components/Providers/UserProvider";
import "./App.css";

function App() {
  
  return (
    <UserProvider>
      <Application />
    </UserProvider>
  );
}

export default App;
