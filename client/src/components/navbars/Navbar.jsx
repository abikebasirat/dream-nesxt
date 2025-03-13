import React, { useContext } from "react";

import Switch from "@mui/material/Switch";
import "./navbars.scss";
import { DarkModeContext } from "../../darkModeContext";

const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="navbars">
      <div className="navbarsContainer">
       
        <div className="items">
         
          <div className="item">
            <Switch
              style={{ color: "#210876" }}
              className="icon"
              onClick={() => dispatch({ type: "TOGGLE" })}
            />
          </div>
    
          <div className="item">
            <img src="/assets/person.jpg" alt="" className="profileImg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
