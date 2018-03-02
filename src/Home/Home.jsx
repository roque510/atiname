import "./Home.css";
import React from "react";
import MenuBar from "../menuBar/menuBar";

function template() {
  return (
    <div className="home">
    	<MenuBar signOut={this.signOut}></MenuBar>
      <h1>Home</h1>
      
    </div>
  );
};

export default template;
