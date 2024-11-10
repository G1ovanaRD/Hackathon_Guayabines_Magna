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
                    mt: "50px",
                    borderRadius: "0",
                    border: "1px solid #878787",
                    color: "white",
                    py: 0,
                    flex: 1,
                    borderTopLeftRadius: "10px",
                    borderTopRightRadius: "10px",
                    textTransform: "none",
                    "&:hover": {
                        backgroundColor: "#202020"
                    },
                    transition: "background 0.3s ease",
                }
            }}
        >
            <ToggleButton>30 días</ToggleButton>
            <ToggleButton>60 días</ToggleButton>
            <ToggleButton>90 días</ToggleButton>
        </ToggleButtonGroup>
  )
}
