import React, { useMemo } from "react";
import { AdminMenuHeaders } from "../../constant/AdminMenu";
import { BoxStyle } from "../../constant/Styles";
import SectionHeader from "../../lib/parts/SectionHeader/SectionHeader";
import { Box } from "@mui/material";
import * as ControlBox from "../../lib/parts/ControlBox/ControlBox";
import TableData from "../../lib/parts/TableData/TableData";

const Records = () => {
  const column = useMemo(() => {
    return [
      {
        field: "id",
        headerName: "No.",
        filterable: false,
        width: 50,
        renderCell: (params) =>
          `${params.api.getRowIndexRelativeToVisibleRows(params.row.id) + 1}.`,
      },
      {
        field: "name",
        headerName: "Nama Pegawai",
        width: 250,
      },
      {
        field: "status",
        headerName: "Jenis Absensi",
        width: 200,
        renderCell: ({ row: { status } }) => {
          return `${JenisAbsen[status - 1]}`;
        },
      },
      {
        field: "hour",
        headerName: "Waktu Absensi",
        width: 200,
      },
      {
        field: "date",
        headerName: "Tanggal Absensi",
        width: 200,
      },
      {
        field: "option",
        headerName: "Option",
        width: 350,
        renderCell: ({ row: { id, nama, alamat, phone, user_id } }) => {
          return (
            <ControlBox.default>
              <ControlBox.ActionPress title={"edit data absensi"} />
              <ControlBox.ActionPress title={"hapus data"} />
            </ControlBox.default>
          );
        },
      },
    ];
  }, []);
  return (
    <React.Fragment>
      <Box
        sx={{
          ...BoxStyle,
        }}
      >
        <SectionHeader
          title={AdminMenuHeaders[3]["title"]}
          value={AdminMenuHeaders[3]["value"]}
        />
      </Box>
      <Box
        sx={{
          ...BoxStyle,
        }}
      >
        <SectionHeader
          title={AdminMenuHeaders[3]["child"].title}
          value={AdminMenuHeaders[3]["child"].value}
        />
        <ControlBox.default>
          <ControlBox.ActionPress title={"Tambah data Absensi"} />
        </ControlBox.default>
        <TableData column={column} rows={[]} />
      </Box>
    </React.Fragment>
  );
};

export default Records;
