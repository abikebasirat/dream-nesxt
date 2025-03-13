import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Person3OutlinedIcon from "@mui/icons-material/Person3Outlined";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";

import "./sidebarhs.scss";
import { Link } from "react-router-dom";
import { textFieldClasses } from "@mui/material";

const Sidebar = () => {
  return (
    <div className="sidebarhs">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">DesignMediaX</span>
        </Link>
      </div>
      <hr />
      <div className="bottom">
        <ul>
          <p className="title">MAIN</p>
            <Link to='/featured' style={{textDecoration: 'none'}} > 
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
            </Link>

          <p className="title">LISTS</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <Person3OutlinedIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>

          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <LocalGroceryStoreOutlinedIcon className="icon" />
              <span>Admin</span>
            </li>
          </Link>

          
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
