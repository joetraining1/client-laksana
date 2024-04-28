import React from "react";
import { Colors } from "../../../constant/Colors";
import { h4FontStyle } from "../../../constant/Styles";
import { NavLink, useLocation } from "react-router-dom";

const NavCurrent = ({ path, title, id }) => {
  const location = useLocation();
  const current = new RegExp(path);
  const test = location.pathname.match(/.*\/(.*)$/);
  return (
    <NavLink
      style={{
        ...h4FontStyle,
        color: Colors.navbar2,
        display: "flex",
        alignItems: "center",
        padding: "0 10px",
        borderBottom: test.includes(path)
          ? `3px solid ${Colors.navbar2}`
          : "none",
      }}
      id={id}
      to={path}
      replace={true}
    >
      {title}
    </NavLink>
  );
};

export default NavCurrent;
