import React from "react";
import { MidFlex } from "../../../constant/Styles";
import { Colors } from "../../../constant/Colors";

const Logo = () => {
  return (
    <h1
      style={{
        width: "auto",
        height: "100%",
        ...MidFlex,
      }}
    >
      {"Datapen: "}
      <span
        style={{
          color: Colors.yellow,
        }}
      >
        {" Personalia"}
      </span>
    </h1>
  );
};

export default Logo;
