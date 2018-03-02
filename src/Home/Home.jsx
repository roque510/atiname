import "./Home.css";
import React from "react";
import MenuBar from "../menuBar/menuBar";

function template() {
  return (
    <div className="home">
    	<MenuBar></MenuBar>
      <h1>Home</h1>
      <a href="" onClick={this.signOut}>Sign Out</a>
    </div>
  );
};

export default template;
