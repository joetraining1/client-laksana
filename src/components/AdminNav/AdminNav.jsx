import React from "react";
import MassWidth from "../../lib/parts/MassWidth/MassWidth";
import { AdminMenu } from "../../constant/AdminMenu";
import { NavLink, useLocation } from "react-router-dom";
import { h4FontStyle } from "../../constant/Styles";
import { Colors } from "../../constant/Colors";
import NavCurrent from "../../lib/parts/NavCurrent/NavCurrent";

const AdminNav = () => {
  const location = useLocation();
  // console.log(location.pathname);
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "7svh",
        backgroundColor: "#fff",
        boxShadow: "1px 1px 5px 1px rgba(0,0,0,0.1)",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MassWidth
        styles={{
          padding: "0 3vw",
          gap: "2vw",
          height: "100%",
        }}
      >
        {AdminMenu.map((item, index) => {
          const current = new RegExp(item.to);
          return (
            <NavCurrent
              key={item.id}
              id={item.id}
              path={item.to}
              title={item.title}
            />
          );
        })}
      </MassWidth>
    </div>
  );
};

export default AdminNav;
