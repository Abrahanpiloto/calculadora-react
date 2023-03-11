import React from "react";
import "../styles-sheet/BotonClear.css";

const BotonClear = (props) => (
  <div className="clear">
    {props.children}
  </div>  
);

export default BotonClear;