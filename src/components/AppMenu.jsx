import { AppBar, Box, Button, Divider, IconButton, Typography } from '@mui/material'
import AccountCircle from '@mui/icons-material/AccountCircle';
import logo from '../assets/Magna-Logo-White-Reverse-MR-V1.0.png';
import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function AppMenu() {
  const navigate = useNavigate();

  const handleEmployeesClick = () => {
    navigate('/employees');
  }
  const handleRisksClick = () => {
    navigate('/risks');
  }
  const handleDepartedClick = () => {
    navigate('/departed');
  }
  const handleAddClick = () => {
    navigate('/add');
  }

  
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
            <img src={logo} alt="Logo" style={{ height: "50px", marginLeft: "20px" }} />
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
              <Button onClick={handleEmployeesClick}>Empleados</Button>
              <Typography>|</Typography>
              <Button onClick={handleDepartedClick}>Bajas</Button>
              <Typography>|</Typography>
              <Button onClick={handleAddClick}>Agregar</Button>
              <Typography>|</Typography>
              <Button onClick={handleRisksClick}>Riesgos</Button>
              <IconButton>
                <AccountCircle color='primary' sx={{ fontSize: "45px", "&:hover" : {color: "white"}}} />
              </IconButton>
            </Box>
          </Box>
        </AppBar>
    </Box>
  )
}
