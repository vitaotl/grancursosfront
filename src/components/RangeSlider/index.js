import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { PriceLabel } from "./styles";

export default function RangeSlider() {
  const [value, setValue] = React.useState([1.99, 4098]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <PriceLabel>
        {value[0]} - {value[1]}
      </PriceLabel>
      <Slider
        value={value}
        onChange={handleChange}
        min={1.99}
        max={5000}
        valueLabelDisplay="auto"
      />
    </Box>
  );
}
