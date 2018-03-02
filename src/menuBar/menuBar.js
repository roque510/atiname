import React    from "react";
import template from "./menuBar.jsx";

class menuBar extends React.Component {
  render() {
    return template.call(this);
  }
}

export default menuBar;
