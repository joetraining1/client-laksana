import React, { useState } from "react";
import {
  FlexBasic,
  AllSize,
  h4FontStyle,
  CardMenuIconStyle,
} from "../../constant/Styles";
import { Colors } from "../../constant/Colors";
import { Typography } from "@mui/material";
import { HomeCardMenus } from "../../constant/HomeCardMenu";
import HomeCard from "../Home/HomeCard/HomeCard";
import { useSelector } from "react-redux";

const MainNav = () => {
  const employee = useSelector((state) => state.auth.authState.email);

  return (
    <div
      style={{
        ...FlexBasic,
        ...AllSize,
        padding: "3vw",
        gap: "1vw",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          ...h4FontStyle,
          color: Colors.navbar,
        }}
      >
        Selamat Datang!
      </Typography>
      <Typography
        variant="h5"
        sx={{
          ...h4FontStyle,
          color: Colors.navbar,
        }}
      >
        silahkan gunakan menu dibawah ini:
      </Typography>
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "space-evenly",
          transition: "all 0.5s ease-in-out",
        }}
      >
        {HomeCardMenus.map((item) => {
          return (
            <HomeCard
              key={item.id}
              icon={
                <item.icon
                  sx={{
                    ...CardMenuIconStyle,
                  }}
                />
              }
              title={item.title}
              nav={item.to === "profile" ? `${item.to}/${employee}` : item.to}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MainNav;
