import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components"; // Automatically picks up index.js
import V1Page from "./v1"; // Automatically picks up index.js
import V2Page from "./v2"; // Automatically picks up index.js
import V3Page from "./v3"; // Automatically picks up index.js
import V1support from "./v1/support"; 
import V2support from "./v2/support"; 
import V3support from "./v3/support";

function App() {
  return (
    <Router basename="/project">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/v1" element={<V1Page />} />
        <Route path="/v2" element={<V2Page />} />
        <Route path="/v3" element={<V3Page />} />
        <Route path="/v1/support" element={<V1support />} />
        <Route path="/v2/support" element={<V2support />} />
        <Route path="/v3/support" element={<V3support />} />
      </Routes>
    </Router>
  );
}

export default App;
