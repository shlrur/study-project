import React from "react";

import SearchMenu from "./search-menu";
import ReportViewer from "./report-viewer";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weekly Business Report</h1>
        <SearchMenu />
        <ReportViewer />
      </div>
    </div>
  );
}

export default App;
