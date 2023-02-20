import { NavLink } from "react-router-dom";

import React, { useState } from "react";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const menuItem = [
    {
      path: "/",
      name: "Dashboard",
      icon: <i className="uil uil-globe"></i>,
    },
    {
      path: "/analytics",
      name: "Analytics",
      icon: <i className="uil uil-chart-growth"></i>,
    },
    {
      path: "/myWipass",
      name: "My Wipass",
      icon: <i className="uil uil-user"></i>,
    },
    {
      path: "/marketplace",
      name: "Marketplace",
      icon: <i className="uil uil-shopping-cart"></i>,
    },
    {
      path: "/settings",
      name: "Settings",
      icon: <i className="uil uil-setting"></i>,
    },
  ];
  return (
    <div className="container">
      <div style={{ width: isOpen ? "300px" : "50px" }} className="sidebar">
        <div className="top_section">
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
            wipass
          </h1>
          <div
            style={{ marginLeft: isOpen ? "50px" : "0px" }}
            className="bars"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            {isOpen ? (
              <i class="uil uil-angle-left"></i>
            ) : (
              <i class="uil uil-angle-right"></i>
            )}
          </div>
        </div>
        <div className="top_section_img">
          <img
            src="https://img.freepik.com/free-icon/receptionist_318-873635.jpg"
            alt="profile"
          />
          <div style={{ display: isOpen ? "block" : "none" }}>
            <p>Name</p>
            <p>email@email.com</p>
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeclassName="active"
          >
            <div className="icon">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
