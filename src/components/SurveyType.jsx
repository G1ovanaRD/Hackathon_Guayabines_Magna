import { Box, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function SurveyType() {
    const navigate = useNavigate();

    const handle30 = () => {
        navigate("/add/30");
    };
    const handle60 = () => {
        navigate("/add/60");
    };
    const handle90 = () => {
        navigate("/add/90");
    };

  return (
    <Box
        component="div"
        sx={{
            width: "400px",
            backgroundColor: "white",
            borderRadius: "10px",
            boxShadow: "0px 4px 20px rgba(66, 152, 181, 0.8)",
            p: 5,
        }}
    >
        <Typography variant="h3" sx={{ width: "100%", textAlign:"center", mb: 5 }}>Escoge el tipo de formulario</Typography>
        <Box
            component="div"
            sx={{
                display: "flex",
                width: "100%",
            }}
        >
            <Box component="div" onClick={handle30} sx={{flex: 1, backgroundColor: "#ED8B00", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", border: "1px solid black", height: "70px",
                "&:hover":{ backgroundColor: "red"}, transition: "background 0.3s ease"
            }}>
                <Typography variant='h5' fontWeight="bold">
                    30 días
                </Typography>
                </Box>
            <Box component="div" onClick={handle60} sx={{flex: 1, backgroundColor: "#ED8B00", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", border: "1px solid black", height: "70px",
                "&:hover":{ backgroundColor: "red"}, transition: "background 0.3s ease"
            }}>
                <Typography variant='h5' fontWeight="bold">
                    60 días
                </Typography>
                </Box>
            <Box component="div" onClick={handle90} sx={{flex: 1, backgroundColor: "#ED8B00", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", border: "1px solid black", height: "70px",
                "&:hover":{ backgroundColor: "red"}, transition: "background 0.3s ease"
            }}>
                <Typography variant='h5' fontWeight="bold">
                    90 días
                </Typography>
                </Box>
        </Box>
    </Box>
  )
}
