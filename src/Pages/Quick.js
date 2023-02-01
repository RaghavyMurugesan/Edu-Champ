import { Button, Box, Typography, ButtonGroup } from "@mui/material";
import React from "react";

import { quick } from "../data";

function Quick() {
  return (
    <Box sx={{ width: "100%" }} spacing={2}>
      {quick.map((item, index) => (
        <Button
          variant="contained"
          spacing={2}
          sx={{ flexDirection: "column", width: "10rem", height: "10rem" }}
          key={index}>
          <item.icon sx={{ width: "4rem", height: "4rem" }} />
          <Typography variant="h6">{item.text}</Typography>
        </Button>
      ))}
    </Box>
  );
}

export default Quick;
