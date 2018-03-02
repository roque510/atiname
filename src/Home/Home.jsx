import "./Home.css";
import React from "react";
import MenuBar from "../menuBar/menuBar";

function template() {
  return (
    <div className="home">
    	<MenuBar signOut={this.signOut}></MenuBar>
    	<h1>Home</h1>
      <p>Renderizar SASS file de materialize para tener colores primarios y secundarios acorde al color pallete</p>
      
    </div>
  );
};

export default template;
