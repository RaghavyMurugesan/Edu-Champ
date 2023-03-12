import { Button, Box, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { quick } from "../data";

function Quick() {
  const navigate = useNavigate();

  return (
    <>
      <Typography color="#50c878" variant="h4" paddingY={2}>
        Quick Access
      </Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" }}>
        {quick.map((item, index) => (
          <Button
            variant="contained"
            spacing={2}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              width: "10rem",
              height: "10rem",
              margin: "1rem",
              bgcolor: "var(--secondary-color)",
              color: "white",
              borderRadius: "25%",
              transition: "all 300ms ease",
              "&.MuiButton-root:hover": {
                bgcolor: "var(--triadic) ",
                color: "white",
                boxShadow: "0 0 12px var(--triadic)",
                "&,&.MuiSvgIcon-root": {
                  color: "whitesmoke",
                },
                "&, &.MuiTypography-root": {
                  color: "whitesmoke",
                },
              },
            }}
            key={index}
            onClick={() => navigate(item.path)}>
            <item.icon sx={{ width: "4rem", height: "4rem" }} />
            <Typography variant="body1">{item.text}</Typography>
          </Button>
        ))}
      </Box>
    </>
  );
}

export default Quick;
