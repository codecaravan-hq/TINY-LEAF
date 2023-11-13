import React from "react";
import "../src/global.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Reservation from "./pages/Reservation";
import Layout from "./pages/layout/Layout";

function App() {
  const customFlag = process.env.REACT_APP_CUSTOM_FLAG;

  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservation" element={<Reservation />} />
        </Routes>
        <div>
          <p className="costumFlag">Custom Flag: {customFlag}</p>
        </div>
      </Layout>
    </div>
  );
}

/// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);

export default App;
