import React from "react";
import "./style.css";


function Jumbotron({ children }) {
  return (
    <div className="container">
    
    <div
      style={{ border: "solid", height: 200, textAlign: "center"}}
      className="jumbotron"
    >
      {children}
    </div>
    </div>
  );
}

export default Jumbotron;
