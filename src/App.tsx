import React from "react";
import AlertSale from "./components/AlertSale";
import HeaderNav from "./components/Header/HeaderNav";

import "./container.css";
import "./index.css";

import { Section1 } from "./pages/Homepage/Components";
import Section from "./pages/Homepage/Components/Section/Section";
function App() {
  return (
    <div className="App">
      <AlertSale />
      <HeaderNav />
      <Section />
      <Section1 />
    </div>
  );
}

export default App;
