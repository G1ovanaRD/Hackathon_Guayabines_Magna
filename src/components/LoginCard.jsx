import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';
import styled from '@emotion/styled';
import { BorderColor } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Input = styled.input`
    color:white;
  /* Cambia el color del placeholder */
  ::placeholder {
    color: #ccc; /* Cambia el color a uno más claro */
    opacity: 1; /* Asegura que el color sea completamente opaco */
  }
`;
export default function LoginCard() {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/employees');
    };
  return (
    <Box
      component="form"
      sx={{ backgroundColor:"black",width: "700px", display:'flex', flexDirection:'column',alignItems:'center',justifyContent:'center', margin:'auto', border: "1px solid #878787", 
        borderRadius: "10px",
        boxShadow: "0 0 8px white",
        px: "50px",
      }}
    >
      <Typography variant='h2'sx={{margin:'2rem',marginBottom:'2.2rem',color:'white'}}>
        Ingresar
      </Typography>
      <Typography  variant="h6" sx={{ color: 'white', marginBottom: '8px' }}>Introduce tu nombre de usuario y contraseña</Typography>
        <Input type="text" name="" id=""
            style={{
            borderRadius: '12px',
            padding: '8px',
            background:'none',
            border: '1px solid #1976d2',
            margin: '0.7rem',
            width:'100%',
            fontSize: "16px"
          }} placeholder="Usuario" onfocus="this.style.color='#111111'" 
          
        />
        <Input type="password" name="" id="" 
            style={{
            borderRadius: '12px',
            padding: '8px',
            background:'none',
            border: '1px solid #1976d2',
            margin: '0.5rem',
            width:'100%',
            fontSize: "16px"
          }} placeholder="Contraseña" onfocus="this.style.color='#111111'" 
          
        />
        <button style={{border:'solid 2px',borderColor:'#64dd17', width:'20%',borderRadius:'12px', padding:'0.4rem',margin:'1rem',color:'#ccc',background:'none',fontSize:"16px",cursor: 'pointer',
        transition: 'background-color 0.3s ease',}}
        onMouseEnter={(e) => (e.target.style.width='21%', e.target.style.boxShadow='0px -4px 10px rgba(255, 255, 255, 0.3), 0px 4px 10px rgba(255, 255, 255, 0.3)')}
        onMouseLeave={(e) => (e.target.style.backgroundColor = 'transparent',e.target.style.color="#ccc", e.target.style.width='20%',e.target.style.boxShadow='none')}
        onClick={handleLoginClick}>
            Iniciar sesión
        </button>
    </Box>
  );
}