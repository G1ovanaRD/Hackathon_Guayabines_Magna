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

        <Typography  variant="h6" sx={{ color: 'white', marginBottom: '8px' }}>Puesto: </Typography>
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

    <Typography  variant="h6" sx={{ color: 'white', marginBottom: '8px' }}>Área: </Typography>
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
       
       
       <Box sx={{ display: 'flex', gap: '60px', padding: '30px' }}>
         <button style={{border:'solid 2px',borderColor:'#64dd17', width:'100%',borderRadius:'12px', padding:'12px',color:'#ccc',background:'none',fontSize:"16px",cursor: 'pointer',
          transition: 'background-color 0.3s ease'}}
          onMouseEnter={(e) => (e.target.style.width='100%', e.target.style.boxShadow='0px -4px 10px rgba(255, 255, 255, 0.3), 0px 4px 10px rgba(255, 255, 255, 0.3)')}
          onMouseLeave={(e) => (e.target.style.backgroundColor = 'transparent',e.target.style.color="#ccc", e.target.style.boxShadow='none')}
          onClick={handleLoginClick}>
            Cancelar
          </button>
          <button style={{border:'solid 2px',borderColor:'#64dd17', width:'100%',borderRadius:'12px', padding:'12px',color:'#ccc',background:'none',fontSize:"16px",cursor: 'pointer',
          transition: 'background-color 0.3s ease'}}
          onMouseEnter={(e) => (e.target.style.width='100%', e.target.style.boxShadow='0px -4px 10px rgba(255, 255, 255, 0.3), 0px 4px 10px rgba(255, 255, 255, 0.3)')}
          onMouseLeave={(e) => (e.target.style.backgroundColor = 'transparent',e.target.style.color="#ccc", e.target.style.boxShadow='none')}
          onClick={handleLoginClick}>
              Agregar
          </button>
       </Box>
    </Box>
   );
}
