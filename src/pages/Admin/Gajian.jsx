import React, { useMemo } from "react";
import { AdminMenuHeaders } from "../../constant/AdminMenu";
import SectionHeader from "../../lib/parts/SectionHeader/SectionHeader";
import { BoxStyle } from "../../constant/Styles";
import { Box } from "@mui/material";
import TableData from "../../lib/parts/TableData/TableData";
import * as ControlBox from "../../lib/parts/ControlBox/ControlBox";
import FormModal from "../../components/modal/FormModal";
import PayrollForm from "../../components/forms/PayrollForm/PayrollForm";

const Gajian = () => {
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
        field: "ref_no",
        headerName: "No. Transaksi",
        width: 250,
      },
      {
        field: "nominal",
        headerName: "Nominal Gaji",
        width: 200,
        renderCell: ({ row: { nominal } }) => `Rp. `.concat(nominal),
      },
      {
        field: "start",
        headerName: "Tanggal Mulai",
        width: 200,
      },
      {
        field: "end",
        headerName: "Tanggal Selesai",
        width: 200,
      },
      {
        field: "option",
        headerName: "Option",
        width: 350,
        renderCell: ({ row: { id, nama, alamat, phone, user_id } }) => {
          return (
            <ControlBox.default>
              <ControlBox.ActionPress title={"edit data transaksi"} />
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
          title={AdminMenuHeaders[1]["title"]}
          value={AdminMenuHeaders[1]["value"]}
        />
      </Box>
      <Box
        sx={{
          ...BoxStyle,
        }}
      >
        <SectionHeader
          title={AdminMenuHeaders[1]["child"].title}
          value={AdminMenuHeaders[1]["child"].value}
        />
        <ControlBox.default>
          <FormModal
            bText={"Tambah data transaksi gaji"}
            fTitle={"Tambah data Gaji"}
            fVal={"Penambahanan transaksi pembayaran gaji karyawan"}
          >
            <PayrollForm sTitle={"Tambahkan data"} />
          </FormModal>
        </ControlBox.default>
        <TableData column={column} rows={[]} />
      </Box>
    </React.Fragment>
  );
};

export default Gajian;
