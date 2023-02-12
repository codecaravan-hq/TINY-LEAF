import React, { useState } from "react";
import { NavLinks } from "./NavLinks";

function Hamburger() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={"hamburger"} onClick={() => setOpen(!open)}>
        <div
          style={{
            transform: open ? "rotate(45deg)" : "rotate(0)",
          }}
        />
        <div
          style={{
            transform: open ? "translateX(100%)" : "translateX(0)",
            opacity: open ? 0 : "100%",
          }}
        />
        <div
          style={{
            transform: open ? "rotate(-45deg)" : "rotate(0)",
          }}
        />
        
      </div>


      <NavLinks open={open} />
    </>
  );
}

export default Hamburger;
