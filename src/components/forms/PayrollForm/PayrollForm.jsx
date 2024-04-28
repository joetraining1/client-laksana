import React from "react";
import InputLabel from "../../../lib/parts/InputLabel/InputLabel";
import { ActionPress } from "../../../lib/parts/ControlBox/ControlBox";

const PayrollForm = ({ nominal, nama, id, eId, start, end, refNo, sTitle }) => {
  return (
    <div
      style={{
        width: "500px",
        height: "450px",
        display: "flex",
        padding: "1vw",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <InputLabel title={"Nomor Transaksi"} value={refNo} />
      <InputLabel title={"Nominal Gaji"} value={nominal} />
      <InputLabel title={"Tanggal Mulai"} value={start} />
      <InputLabel title={"Tanggal Selesai"} value={end} />
      <ActionPress
        title={sTitle}
        style={{
          marginTop: "auto",
        }}
      />
    </div>
  );
};

export default PayrollForm;
