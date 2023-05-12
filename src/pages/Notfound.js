import React from "react";
import { NavLink } from "react-router-dom";
import global from "./../css/global.module.css";

function Notfound() {
  return(
    <div className={global.center_notfound}>
      <div className={global.box_notfound}>
        <h1>404 Not Found!</h1>
        <button className={global.btn_primary}><NavLink to="/" className={global.linkclear}>Return to Home!</NavLink></button>
      </div>
    </div>
  )
}

export default Notfound;