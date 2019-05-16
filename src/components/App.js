import React from "react";

import "../../assets/styles/styles.scss";

import SearchMenu from "./searchMenu";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weekly Business Report</h1>
        <SearchMenu />
      </div>
    </div>
  );
}

export default App;
