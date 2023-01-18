import React from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <div className="header">
      <Logo />
      <Navbar />
    </div>
  );
}
