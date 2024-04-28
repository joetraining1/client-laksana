import React, { useMemo } from "react";
import { AdminMenuHeaders } from "../../constant/AdminMenu";
import { BoxStyle } from "../../constant/Styles";
import SectionHeader from "../../lib/parts/SectionHeader/SectionHeader";
import { Box } from "@mui/material";
import TableData from "../../lib/parts/TableData/TableData";
import * as ControlBox from "../../lib/parts/ControlBox/ControlBox";

const Kazoku = () => {
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
        field: "nama",
        headerName: "Nama Kerabat",
        width: 250,
      },
      {
        field: "name",
        headerName: "Nama Pegawai",
        width: 250,
      },
      {
        field: "alamat",
        headerName: "Alamat Kerabat",
        width: 200,
      },
      {
        field: "phone",
        headerName: "Kontak Kerabat",
        width: 200,
      },
      {
        field: "option",
        headerName: "Option",
        width: 350,
        renderCell: ({ row: { id, nama, alamat, phone, user_id } }) => {
          return (
            <ControlBox.default>
              <ControlBox.ActionPress title={"edit data kerabat"} />
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
          title={AdminMenuHeaders[2]["title"]}
          value={AdminMenuHeaders[2]["value"]}
        />
      </Box>
      <Box
        sx={{
          ...BoxStyle,
        }}
      >
        <SectionHeader
          title={AdminMenuHeaders[2]["child"].title}
          value={AdminMenuHeaders[2]["child"].value}
        />
        <ControlBox.default>
          <ControlBox.ActionPress title={"Tambah data kerabat"} />
        </ControlBox.default>
        <TableData column={column} rows={[]} />
      </Box>
    </React.Fragment>
  );
};

export default Kazoku;
