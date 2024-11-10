import React from 'react'
import { Box, Typography } from '@mui/material';
import { Grid2 } from '@mui/material';

export default function SelectedListItem() {

  return (
    <>
      <Box component="div" sx={{ width: "100%", display: "center", justifyContent: "center" }}>
        <Box
            component="div"
            sx={{
                borderBottom: "1px solid #4298B5",
                px: "150px",
                marginTop: "50px",
                marginBottom: "10px",
            }}
        >
            <Typography variant='h2' color='white'>Riesgos</Typography>
        </Box>
      </Box>
      <Grid2 container spacing={2} sx={{ width: "100%", justifyContent: "center","& .MuiBox-root": { backgroundColor: "white", width: "400px", height: "200px", alignItems: "center", borderRadius: "10px", padding: "20px", boxShadow: "0 0 12px #4298B5"}}}>
        <Grid2 item xs={8}>
          <Box>
            <Typography variant='h6'>Riesgo</Typography>
            <Typography variant='text1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt eaque obcaecati maxime rem nemo commodi at dolorem, deleniti recusandae porro! Perspiciatis cupiditate incidunt voluptates numquam id esse rem, minima reiciendis.</Typography>
          </Box>
        </Grid2>
        <Grid2 item xs={4}>
          <Box>
            <Typography variant='h6'>Riesgo</Typography>
            <Typography variant='text1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt eaque obcaecati maxime rem nemo commodi at dolorem, deleniti recusandae porro! Perspiciatis cupiditate incidunt voluptates numquam id esse rem, minima reiciendis.</Typography>
          </Box>
        </Grid2>
        <Grid2 item xs={4}>
          <Box>
            <Typography variant='h6'>Riesgo</Typography>
            <Typography variant='text1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt eaque obcaecati maxime rem nemo commodi at dolorem, deleniti recusandae porro! Perspiciatis cupiditate incidunt voluptates numquam id esse rem, minima reiciendis.</Typography>
          </Box>
        </Grid2>
        <Grid2 item xs={4}>
          <Box>
            <Typography variant='h6'>Riesgo</Typography>
            <Typography variant='text1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt eaque obcaecati maxime rem nemo commodi at dolorem, deleniti recusandae porro! Perspiciatis cupiditate incidunt voluptates numquam id esse rem, minima reiciendis.</Typography>
          </Box>
        </Grid2>
      </Grid2>
    </>
  );
}
  