import { AppBar, Box, Button, IconButton, Typography } from '@mui/material'
import AccountCircle from '@mui/icons-material/AccountCircle';
import React from 'react'

export default function AppMenu() {
  return (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position='static' sx={{ backgroundColor: "red", height: "100px" }}>
          <Box
            component="div"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              height: "100%",
            }}
          >
            <Typography variant="h3">Logo</Typography>
            <Box
              component="div"
              sx={{
                height: "100%",
                display: "flex",
                alignItems: "center",
                "& .MuiButton-root": {
                  height: "50%",
                  mx: "5px",
                }
              }}
            >
              <Button variant="contained">Empleados</Button>
              <Button variant="contained">Bajas</Button>
              <Button variant="contained">Agregar</Button>
              <Button variant="contained">Riesgos</Button>
              <IconButton>
                <AccountCircle color='primary' sx={{ fontSize: "45px" }} />
              </IconButton>
            </Box>
          </Box>
        </AppBar>
    </Box>
  )
}
