import { Button, TextField } from "@mui/material";
import React from "react";
import { ButtonStyleBasic, h4FontStyle } from "../../constant/Styles";
import { Colors } from "../../constant/Colors";
import InputLabel from "../../lib/parts/InputLabel/InputLabel";

const RelativeForm = ({ id, nama, alamat, kontak, sTitle }) => {
  return (
    <div
      style={{
        width: "500px",
        height: "325px",
        display: "flex",
        flexDirection: "column",
        padding: "10px",
        gap: "10px",
      }}
    >
      <InputLabel value={nama} title={"Nama Anggota Keluarga"} />
      <InputLabel value={alamat} title={"Alamat Anggota Keluarga"} />
      <InputLabel value={kontak} title={"Kontak Anggota Keluarga"} />
      <Button
        variant="contained"
        sx={{
          ...ButtonStyleBasic,
          marginTop: "auto",
        }}
      >
        {sTitle}
      </Button>
    </div>
  );
};

export default RelativeForm;
