import { ToggleButtonGroup, ToggleButton, Typography, Box } from '@mui/material'
import React from 'react'

export default function TimeButtons() {
  return (
        <ToggleButtonGroup
            sx={{
                width: "100%",
                gap: "5px",
                "& .MuiToggleButton-root": {
                    fontSize: "28px",
                    mt: "10px",
                    borderRadius: "0",
                    border: "none",
                    color: "white",
                    py: 0,
                    flex: 1,
                    borderTopLeftRadius: "10px",
                    borderTopRightRadius: "10px",
                    boxShadow: "0 0 2px white",
                    textTransform: "none",
                    "&:hover": {
                        backgroundColor: "#A0A0A0"
                    }
                }
            }}
        >
            <ToggleButton>30 días</ToggleButton>
            <ToggleButton>60 días</ToggleButton>
            <ToggleButton>90 días</ToggleButton>
        </ToggleButtonGroup>
  )
}
