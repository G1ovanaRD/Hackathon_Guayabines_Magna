import { AppBar, Box, Button, Divider, IconButton, Typography } from '@mui/material'
import AccountCircle from '@mui/icons-material/AccountCircle';
import React from 'react'

export default function AppMenu() {
  return (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position='static' sx={{ backgroundColor: "black", height: "100px", borderBottom: "1px solid #878787" }}>
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
                mb: 0,
                mr: "30px",
                "& .MuiButton-root": {
                  height: "50%",
                  mx: "5px",
                  borderRadius: "0",
                  "&:hover": {
                    color: "white"
                  }
                },
                "& .MuiTypography-root": {
                  color: "#878787"
                }
              }}
            >
              <Button>Empleados</Button>
              <Typography>|</Typography>
              <Button>Bajas</Button>
              <Typography>|</Typography>
              <Button>Agregar</Button>
              <Typography>|</Typography>
              <Button>Riesgos</Button>
              <IconButton>
                <AccountCircle color='primary' sx={{ fontSize: "45px", "&:hover" : {color: "white"}}} />
              </IconButton>
            </Box>
          </Box>
        </AppBar>
    </Box>
  )
}
