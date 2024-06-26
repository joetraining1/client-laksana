import { Colors } from "./Colors";

export const MidFlex = {
  display: "flex",
  alignItems: "center",
};

export const FlexColumn = {
  display: "flex",
  flexDirection: "column",
};

export const FlexBasic = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
};

export const h4FontStyle = {
  fontFamily: "Roboto, sans-serif",
  fontWeight: "600",
};

export const AllSize = {
  width: "100%",
  height: "100%",
};

export const CardMenuIconStyle = {
  width: "70%",
  height: "70%",
  color: Colors.navbar2,
  transition: "all 0.2s ease-out",
  transform: "translateY(12%)",
};

export const InfoIconStyle = {
  color: Colors.darkGrey,
};

export const AppContainer = {
  borderRadius: "10px",
};

export const ButtonStyleBasic = {
  backgroundColor: Colors.navbar2,
  borderRadius: "5px",
  "&:hover": {
    backgroundColor: Colors.navbar2,
  },
};

export const BoxStyle = {
  display: "flex",
  height: "100%",
  width: "100%",
  padding: "2vw",
  backgroundColor: "#fff",
  borderRadius: AppContainer.borderRadius,
  gap: "1vw",
  flexDirection: "column",
};

export const AbsenIcon = {
  color: Colors.navbar2,
  fontSize: "1.65rem",
};
