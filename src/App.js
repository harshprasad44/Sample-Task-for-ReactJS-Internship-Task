import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import MainScreen from "./screens/MainScreen";

function App() {
  return (
    <Router>
      <main className="py-3">
        <div className="container">
          <Route path="/" component={MainScreen} exact />
        </div>
      </main>
    </Router>
  );
}

export default App;
