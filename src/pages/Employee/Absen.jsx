import React, { useMemo } from "react";
import PageContainer from "../../components/PageContainer/PageContainer";
import { Box, Button } from "@mui/material";
import {
  FlexBasic,
  AllSize,
  BoxStyle,
  AbsenIcon,
  ButtonStyleBasic,
} from "../../constant/Styles";
import SectionHeader from "../../lib/parts/SectionHeader/SectionHeader";
import {
  AbsensiDatas,
  JenisAbsen,
  MenuHeaders,
} from "../../constant/DummyData";
import { Colors } from "../../constant/Colors";
import AbsenItem from "../../components/AbsenComponent/AbsenItem";
import {
  DirectionsWalk,
  DirectionsWalkRounded,
  LocalCafeRounded,
  MoreTimeRounded,
  TextSnippetRounded,
} from "@mui/icons-material";
import TableData from "../../lib/parts/TableData/TableData";

const Absen = () => {
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
        width: 250,
      },
      {
        field: "date",
        headerName: "Tanggal Absensi",
        width: 250,
      },
    ];
  }, [AbsensiDatas]);
  return (
    <PageContainer>
      <Box
        sx={{
          ...BoxStyle,
        }}
      >
        <SectionHeader
          title={MenuHeaders[1]["title"]}
          value={MenuHeaders[1]["value"]}
        />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, minmax(200px, 1fr))",
            gap: "10px",
          }}
        >
          <AbsenItem
            icon={<MoreTimeRounded sx={AbsenIcon} />}
            title={"Absen Masuk"}
            waktu={"08:43:07"}
          />
          <AbsenItem
            icon={<LocalCafeRounded sx={AbsenIcon} />}
            title={"Mulai Istirahat"}
          />
          <AbsenItem
            icon={<TextSnippetRounded sx={AbsenIcon} />}
            title={"Selesai Istirahat"}
          />
          <AbsenItem
            icon={<DirectionsWalkRounded sx={AbsenIcon} />}
            title={"Absen Pulang"}
          />
        </div>
      </Box>
      <Box
        sx={{
          ...BoxStyle,
        }}
      >
        <SectionHeader
          title={MenuHeaders[1]["child"].title}
          value={MenuHeaders[1]["child"].value}
        />
        <TableData column={column} rows={AbsensiDatas} />
      </Box>
    </PageContainer>
  );
};

export default Absen;
