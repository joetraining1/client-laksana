import React, { useEffect, useMemo } from "react";
import PageContainer from "../../components/PageContainer/PageContainer";
import { Box, Button } from "@mui/material";
import {
  FlexBasic,
  AllSize,
  BoxStyle,
  ButtonStyleBasic,
} from "../../constant/Styles";
import SectionHeader from "../../lib/parts/SectionHeader/SectionHeader";
import { MenuHeaders, RelativeDatas } from "../../constant/DummyData";
import TableData from "../../lib/parts/TableData/TableData";
import * as ControlBox from "../../lib/parts/ControlBox/ControlBox";
import Modal from "../../components/modal/FormModal.jsx";
import FormModal from "../../components/modal/FormModal.jsx";
import RelativeForm from "../../components/forms/RelativeForm.jsx";
import ApiClient from "../../lib/utils/ApiClient.jsx";
import useGetData from "../../hooks/useGetData.jsx";

const Relative = () => {
  // const { data } = useGetData("/");

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
        headerName: "Nama Keluarga",
        width: 250,
      },
      {
        field: "alamat",
        headerName: "Alamat Keluarga",
        width: 200,
      },
      {
        field: "phone",
        headerName: "Kontak Keluarga",
        width: 200,
      },
      {
        field: "option",
        headerName: "Option",
        width: 350,
        renderCell: ({ row: { id, nama, alamat, phone } }) => {
          return (
            <ControlBox.default>
              <FormModal
                bText={"Edit Data Keluarga"}
                fTitle={`Edit Data ${nama}`}
                fVal="update data kerabat karyawan."
              >
                <RelativeForm
                  id={id}
                  nama={nama}
                  alamat={alamat}
                  kontak={phone}
                  sTitle={"Simpan Perubahan"}
                />
              </FormModal>
              <Button
                disableElevation
                sx={ButtonStyleBasic}
                variant="contained"
                size="small"
              >
                Hapus Data Keluarga
              </Button>
            </ControlBox.default>
          );
        },
      },
    ];
  }, [RelativeDatas]);

  return (
    <PageContainer>
      <Box
        sx={{
          ...BoxStyle,
        }}
      >
        <SectionHeader
          title={MenuHeaders[2]["title"]}
          value={MenuHeaders[2]["value"]}
        />
        <div
          id="control-box"
          style={{
            display: "flex",
            gap: "10px",
            ...AllSize,
            justifyContent: "flex-start",
          }}
        >
          <FormModal
            bText={"Tambah data keluarga"}
            fTitle={`Tambah Data Keluarga`}
            fVal="tambah data kerabat karyawan."
          >
            <RelativeForm sTitle={"Tambahkan data"} />
          </FormModal>
        </div>
      </Box>
      <Box
        sx={{
          ...BoxStyle,
        }}
      >
        <SectionHeader
          title={MenuHeaders[2]["child"].title}
          value={MenuHeaders[2]["child"].value}
        />
        <TableData column={column} rows={RelativeDatas} />
      </Box>
    </PageContainer>
  );
};

export default Relative;
