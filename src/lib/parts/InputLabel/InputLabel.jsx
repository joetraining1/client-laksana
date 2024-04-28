import { TextField } from "@mui/material";
import React, { useRef, useState } from "react";
import { Colors } from "../../../constant/Colors";
import { h4FontStyle } from "../../../constant/Styles";

const InputLabel = ({ id, value, title, changed }) => {
  const [cvalue, setcValue] = useState(value);

  return (
    <React.Fragment>
      <label
        htmlFor={id}
        style={{
          ...h4FontStyle,
          color: Colors.navbar2,
        }}
      >
        {title}
      </label>
      <TextField
        id={id}
        size="small"
        value={cvalue}
        onChange={(e) => {
          setcValue(e.target.value);
          if (changed) {
            changed(value);
          }
          return;
        }}
      />
    </React.Fragment>
  );
};

export default InputLabel;
