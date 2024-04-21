import React from "react";
import {
  FlexBasic,
  AllSize,
  h4FontStyle,
  CardMenuIconStyle,
} from "../constant/Styles";
import { Typography } from "@mui/material";
import { Colors } from "../constant/Colors";
import HomeCard from "../components/Home/HomeCard/HomeCard";
import { HomeCardMenus } from "../constant/HomeCardMenu";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Home = () => {
  const employee = useSelector((state) => state.auth.authState.email)
  return (
    <div
      style={{
        ...FlexBasic,
        ...AllSize,
        minHeight: "94svh",
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

export default Home;
