import { Box } from "@mui/material";
import React, { useMemo } from "react";
import { BoxStyle } from "../../constant/Styles";
import SectionHeader from "../../lib/parts/SectionHeader/SectionHeader";
import { AdminMenuHeaders } from "../../constant/AdminMenu";
import TableData from "../../lib/parts/TableData/TableData";
import * as ControlBox from "../../lib/parts/ControlBox/ControlBox";

const Employees = () => {
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
        field: "phone",
        headerName: "Kontak Pegawai",
        width: 200,
      },
      {
        field: "alamat",
        headerName: "Alamat Pegawai",
        width: 200,
      },
      {
        field: "email",
        headerName: "Email Pegawai",
        width: 200,
      },
      {
        field: "domisili",
        headerName: "Domisili Pegawai",
        width: 200,
      },
      {
        field: "posisi",
        headerName: "Posisi Pegawai",
        width: 200,
      },
      {
        field: "jabatan",
        headerName: "Jabatan Pegawai",
        width: 200,
      },
      {
        field: "option",
        headerName: "Option",
        width: 350,
        renderCell: ({ row: { id, nama, alamat, phone, user_id } }) => {
          return (
            <ControlBox.default>
              <ControlBox.ActionPress title={"edit data pegawai"} />
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
          title={AdminMenuHeaders[0]["title"]}
          value={AdminMenuHeaders[0]["value"]}
        />
      </Box>
      <Box
        sx={{
          ...BoxStyle,
        }}
      >
        <SectionHeader
          title={AdminMenuHeaders[0]["child"].title}
          value={AdminMenuHeaders[0]["child"].value}
        />
        <ControlBox.default>
          <ControlBox.ActionPress title={"Tambah data pegawai"} />
        </ControlBox.default>
        <TableData column={column} rows={[]} />
      </Box>
    </React.Fragment>
  );
};

export default Employees;
