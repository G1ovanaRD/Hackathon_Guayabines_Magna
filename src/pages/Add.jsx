import React from 'react';
import { Box } from '@mui/material';
import AddCard from '../components/AddCard'; 

export default function Add() {
  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100vw",
        height: "100vh",
        background: "black", 
      }}
    >
      <AddCard />
    </Box>
  );
}
