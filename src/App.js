import React from "react";
import Header from "./Header";
import Photos from "./Photos";
import Cart from "./Cart";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Photos />} />

        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
