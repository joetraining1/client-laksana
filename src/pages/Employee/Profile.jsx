import React from "react";
import { useParams } from "react-router-dom";
import PageContainer from "../../components/PageContainer/PageContainer";
import { Box, Button, Typography } from "@mui/material";
import {
  AllSize,
  AppContainer,
  BoxStyle,
  ButtonStyleBasic,
  FlexBasic,
  InfoIconStyle,
  h4FontStyle,
} from "../../constant/Styles";
import { Colors } from "../../constant/Colors";
import InfoSection from "../../components/ProfileComponent/InfoSection/InfoSection";
import InfoItem from "../../components/ProfileComponent/InfoItem/InfoItem";
import {
  EmailRounded,
  HomeRepairServiceRounded,
  LanOutlined,
  LocalPoliceRounded,
  PhoneAndroidRounded,
  PinDropRounded,
} from "@mui/icons-material";
import { useSelector } from "react-redux";
import { TempProfile } from "../../constant/DummyData";

const Profile = () => {
  const { email } = useParams();
  const eEmail = useSelector((state) => state.auth.authState.email);

  return (
    <PageContainer>
      <Box
        sx={{
          ...BoxStyle,
        }}
      >
        <div
          style={{
            width: "50%",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              ...h4FontStyle,
              color: Colors.navbar,
            }}
          >
            {TempProfile.name}
          </Typography>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "100%",
            justifyContent: "space-between",
            gap: "1vw",
          }}
        >
          <InfoSection title={"Informasi Kontak"}>
            <InfoItem
              icon={<EmailRounded sx={InfoIconStyle} />}
              title={"E-Mail"}
              value={eEmail}
            />
            <InfoItem
              icon={<PhoneAndroidRounded sx={InfoIconStyle} />}
              title={"Telepon Mobile"}
              value={TempProfile.phone}
            />
            <InfoItem
              icon={<HomeRepairServiceRounded sx={InfoIconStyle} />}
              title={"Alamat"}
              value={TempProfile.address}
            />
            <InfoItem
              icon={<PinDropRounded sx={InfoIconStyle} />}
              title={"Lokasi"}
              value={TempProfile.dom}
            />
          </InfoSection>
          <InfoSection title={"Status Kepegawaian"}>
            <InfoItem
              icon={<LocalPoliceRounded sx={InfoIconStyle} />}
              title={"Posisi"}
              value={TempProfile.roles}
            />
            <InfoItem
              icon={<LanOutlined sx={InfoIconStyle} />}
              title={"Jabatan"}
              value={TempProfile.position}
            />
          </InfoSection>
        </div>
      </Box>
    </PageContainer>
  );
};

export default Profile;
