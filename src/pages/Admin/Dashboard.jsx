import React from "react";
import { AdminMenuHeaders } from "../../constant/AdminMenu";
import { Box } from "@mui/material";
import { BoxStyle } from "../../constant/Styles";
import SectionHeader from "../../lib/parts/SectionHeader/SectionHeader";

const Dashboard = () => {
  return (
    <Box
      sx={{
        ...BoxStyle,
      }}
    >
      <SectionHeader
        title={AdminMenuHeaders[4]["title"]}
        value={AdminMenuHeaders[4]["value"]}
      />
    </Box>
  );
};

export default Dashboard;
