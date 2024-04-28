import React, { useMemo } from "react";
import PageContainer from "../../components/PageContainer/PageContainer";
import { Box, Button } from "@mui/material";
import {
  FlexBasic,
  AllSize,
  BoxStyle,
  ButtonStyleBasic,
} from "../../constant/Styles";
import SectionHeader from "../../lib/parts/SectionHeader/SectionHeader";
import { MenuHeaders, PayrollDatas } from "../../constant/DummyData";
import TableData from "../../lib/parts/TableData/TableData";

const Payroll = () => {
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
    ];
  }, [PayrollDatas]);
  return (
    <PageContainer>
      <Box
        sx={{
          ...BoxStyle,
        }}
      >
        <SectionHeader
          title={MenuHeaders[0]["title"]}
          value={MenuHeaders[0]["value"]}
        />
      </Box>
      <Box
        sx={{
          ...BoxStyle,
        }}
      >
        <SectionHeader
          title={MenuHeaders[0]["child"].title}
          value={MenuHeaders[0]["child"].value}
        />
        <TableData column={column} rows={PayrollDatas} />
      </Box>
    </PageContainer>
  );
};

export default Payroll;
