import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components"; // Automatically picks up index.js
import V1Page from "./v1"; // Automatically picks up index.js
import V2Page from "./v2"; // Automatically picks up index.js
import V3Page from "./v3"; // Automatically picks up index.js

function App() {
  return (
    <Router basename="/project">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/v1" element={<V1Page />} />
        <Route path="/v2" element={<V2Page />} />
        <Route path="/v3" element={<V3Page />} />
      </Routes>
    </Router>
  );
}

export default App;
