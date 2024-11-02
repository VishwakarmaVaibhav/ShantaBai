import React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { purple } from '@mui/material/colors';

function valuetext(value, label) {
  return `${value} ${label}`;
}

export default function CustomSlider({ min, max, label, marks, onChange }) {
  return (
    <Box   sx={{  width: 300 }}>
      <Slider
        aria-label={label}
        defaultValue={min}
        getAriaValueText={(value) => valuetext(value, label)}
        valueLabelDisplay="auto"
        step={1}
        marks={marks}
        min={min}
        max={max}
        onChange={(e, value) => onChange(value)} 
      />
    </Box>
  );
}
