import { Button, Box, Typography } from "@mui/material";
import React from "react";

import { quick } from "../data";

function Quick() {
  return (
    <Box sx={{ width: "100%", display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" }}>
      {quick.map((item, index) => (
        <Button
          variant="contained"
          spacing={2}
          sx={{ display: "flex", flexDirection: "column", width: "10rem", height: "10rem", margin: "1rem" }}
          key={index}>
          <item.icon sx={{ width: "4rem", height: "4rem" }} />
          <Typography variant="h6">{item.text}</Typography>
        </Button>
      ))}
    </Box>
  );
}

export default Quick;
