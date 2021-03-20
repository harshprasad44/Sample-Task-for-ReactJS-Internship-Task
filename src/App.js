import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import MainScreen from "./screens/MainScreen";
import Offer from "./screens/Offer";

function App() {
  return (
    <Router>
      <main className="py-3">
        <div className="container">
          <Route path="/" component={MainScreen} exact />
          <Route path="/offer" component={Offer} exact />
        </div>
      </main>
    </Router>
  );
}

export default App;
