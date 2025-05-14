// App.js
import React from "react";
import "./App.css";
import Fpt from "./components/fptlist";

import Navbar from "./components/navbar";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Fpt />
      
    </div>
  );
}

export default App;
