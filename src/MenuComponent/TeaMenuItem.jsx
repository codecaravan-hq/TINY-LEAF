import React from "react";

export default function TeaMenuItem(props) {
  return (
    <div className="menu-item">
      <h5 className="menu-item-title">{props.title}</h5>
      <div style={{ display: "flex" }}>
        <p className="menu-item-description">{props.description}</p>
        <h4 className="price">{props.price}</h4>
      </div>
    </div>
  );
}
