import React from 'react';
import { Box } from '@mui/material';
import SurveyType from '../components/SurveyType';

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
      <SurveyType />
    </Box>
  );
}
