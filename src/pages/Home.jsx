import React from "react";
import {
  FlexBasic,
  AllSize,
  h4FontStyle,
  CardMenuIconStyle,
  BoxStyle,
} from "../constant/Styles";
import { Box, Typography } from "@mui/material";
import { Colors } from "../constant/Colors";
import HomeCard from "../components/Home/HomeCard/HomeCard";
import { HomeCardMenus } from "../constant/HomeCardMenu";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import * as PageContainer from "../components/PageContainer/PageContainer";
import SectionHeader from "../lib/parts/SectionHeader/SectionHeader";

const Home = () => {
  const employee = useSelector((state) => state.auth.authState.email);
  return (
    <PageContainer.Container>
      <Box
        sx={{
          ...BoxStyle,
        }}
      >
        <SectionHeader
          title={"Peraturan Perusahaan"}
          value={
            "Ketentuan perusahaan yang harus dipatuhi karyawan untuk menggunakan aplikasi."
          }
        />
      </Box>
    </PageContainer.Container>
  );
};

export default Home;
