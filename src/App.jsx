import React from "react";
import "./styles/App.css";
import "./components/Header/Header.css";
import "./components/Footer/Footer.css";
import "./styles/Home.css";
import "./styles/Menu.css";
import "./styles/Reservation.css";
import "./styles/Tablet-mode.css";
import "./styles/Desktop-mode.css";
import "./styles/variables.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Header/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Reservation from "./pages/Reservation";

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <Navbar />
        </header>

        <main>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/reservation" element={<Reservation />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
