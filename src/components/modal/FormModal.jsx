import { CancelPresentationRounded } from "@mui/icons-material";
import { Button, Modal, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import { Colors } from "../../constant/Colors";
import { ButtonStyleBasic } from "../../constant/Styles";
import SectionHeader from "../../lib/parts/SectionHeader/SectionHeader";

const FormModal = ({ fVal, bSize, bSx, bText, fTitle, children }) => {
  const [modalIsOpen, setModalOpen] = useState(false);
  return (
    <React.Fragment>
      <Button
        variant="contained"
        disableElevation
        size="small"
        onClick={() => setModalOpen((prev) => !prev)}
        sx={{
          ...ButtonStyleBasic,
          ...bSx,
        }}
      >
        {bText}
      </Button>
      {modalIsOpen ? (
        <Modal open={modalIsOpen} onClose={() => setModalOpen((prev) => !prev)}>
          <Paper
            sx={{
              height: "fit-content",
              width: "fit-content",
              minHeight: "20svh",
              minWidth: "20vw",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "#fff",
              position: "absolute",
              padding: "2vw",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                width: "100%",
                display: "flex",
                height: "100%",
                alignItems: "start",
              }}
            >
              <SectionHeader
                title={fTitle}
                value={fVal}
                styles={{
                  alignItems: "start",
                }}
              />
              <Button
                sx={{
                  color: "red",
                  borderColor: "red",
                  width: "50px",
                }}
                onClick={() => setModalOpen((prev) => !prev)}
              >
                <CancelPresentationRounded />
              </Button>
            </div>
            {children}
          </Paper>
        </Modal>
      ) : null}
    </React.Fragment>
  );
};

export default FormModal;
