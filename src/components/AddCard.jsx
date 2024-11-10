import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';
import styled from '@emotion/styled';
import { BorderColor } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/Magna-Logo-White-Reverse-MR-V1.0.png';


const Input = styled.input`
    color:white;
  /* Cambia el color del placeholder */
  ::placeholder {
    color: #ccc; /* Cambia el color a uno más claro */
    opacity: 1; /* Asegura que el color sea completamente opaco */
  }
`;

export default function AddCard() {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/employees');
    };
  return (
    <Box
      component="form"
      sx={{ backgroundColor:"black",width: "700px", display:'flex', flexDirection:'column',alignItems:'center',justifyContent:'center', margin:'auto', border: "1px solid #878787", 
        borderRadius: "10px",
        boxShadow: "0px 4px 20px rgba(66, 152, 181, 0.8)",
        px: "50px",
      }}
    >
       <img src={logo} alt="Logo" style={{ height: "48px", padding:'20px', marginBottom:'15px' }} />
      <Typography  variant="h6" sx={{ color: 'white', marginBottom: '8px' }}>Nómina: </Typography>
        <Input type="text" name="" id=""
            style={{
            borderRadius: '12px',
            padding: '8px',
            background:'none',
            border: '1px solid #4298b5',
            margin: '0.7rem',
            width:'100%',
            fontSize: "14px"
          }} placeholder="Escribir" onfocus="this.style.color='#111111'" 
          
        />

      <Typography  variant="h6" sx={{ color: 'white', marginBottom: '8px' }}>Nombre: </Typography>
        <Input type="text" name="" id=""
            style={{
            borderRadius: '12px',
            padding: '8px',
            background:'none',
            border: '1px solid #4298b5',
            margin: '0.7rem',
            width:'100%',
            fontSize: "14px"
          }} placeholder="Escribir" onfocus="this.style.color='#111111'" 
          
        />

        <Typography  variant="h6" sx={{ color: 'white', marginBottom: '8px' }}>Razón de baja: </Typography>
        <Input type="text" name="" id=""
            style={{
            borderRadius: '12px',
            padding: '8px',
            background:'none',
            border: '1px solid #4298b5',
            margin: '0.7rem',
            width:'100%',
            fontSize: "14px"
          }} placeholder="Escribir" onfocus="this.style.color='#111111'" 
          
        />

    <Typography  variant="h6" sx={{ color: 'white', marginBottom: '8px' }}>Nómina: </Typography>
        <Input type="text" name="" id=""
            style={{
            borderRadius: '12px',
            padding: '8px',
            background:'none',
            border: '1px solid #4298b5',
            margin: '0.7rem',
            width:'100%',
            fontSize: "14px"
          }} placeholder="Escribir" onfocus="this.style.color='#111111'" 
          
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