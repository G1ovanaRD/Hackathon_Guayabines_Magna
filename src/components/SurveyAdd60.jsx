import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { FormControl, FormLabel, Radio, RadioGroup, Typography, FormControlLabel } from '@mui/material';
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
export default function SurveyAdd60() {
    const [uno, setUno] = React.useState(0);
    const [dos, setDos] = React.useState(0);
    const [tres, setTres] = React.useState(0);
    const [cuatro, setCuatro] = React.useState(0);
    const [cinco, setCinco] = React.useState(0);
    const [seis, setSeis] = React.useState(0);
    const [siete, setSiete] = React.useState(0);
    const [ocho, setOcho] = React.useState(0);
    const [nom, setNom] = React.useState(0);

    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/employees');
    };

    const handleNomChange = (event) => {
        setNom(event.target.value);
    }
    const handleRadio1Change = (event) => {
        setUno(event.target.value);
    }
    const handleRadio2Change = (event) => {
        setDos(event.target.value);
    }
    const handleRadio3Change = (event) => {
        setTres(event.target.value);
    }
    const handleRadio4Change = (event) => {
        setCuatro(event.target.value);
    }
    const handleRadio5Change = (event) => {
        setCinco(event.target.value);
    }
    const handleRadio6Change = (event) => {
        setSeis(event.target.value);
    }
    const handleRadio7Change = (event) => {
        setSiete(event.target.value);
    }
    const handleRadio8Change = (event) => {
        setOcho(event.target.value);
    }

    const handleAddClick = () => {
        const ambiente_laboral = (uno + tres + cinco) / 3;
        const capacitacion = (dos + ocho)/2;
        const crecimiento = (cuatro + seis + siete)/3;
        const suma = ambiente_laboral + capacitacion + crecimiento;
        const prediccion = 1;
        const ans = [ nom, uno, dos, tres, cuatro, cinco, seis, siete, ocho ];
    }

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

        <Box
        component="form"
        sx={{ backgroundColor:"black",width: "700px", display:'flex', flexDirection:'column',alignItems:'center',justifyContent:'center', margin:'auto', border: "1px solid #878787", 
            borderRadius: "10px",
            boxShadow: "0px 4px 20px rgba(66, 152, 181, 0.8)",
            px: "50px",
        }}
        >
        <img src={logo} alt="Logo" style={{ height: "48px", padding:'20px', marginBottom:'15px' }} />

        <Typography  variant="h6" sx={{ color: 'white', marginBottom: '8px' }}>Nómina </Typography>
            <Input type="text" name="" id="" value={nom} onChange={handleNomChange}
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

        <Typography  variant="h6" sx={{ color: 'white', marginBottom: '8px' }}>¿Consideras que se cumplen los principios de la Carta Constitutiva de empleados de Magna en tu área de trabajo?</Typography>
            <FormControl>
                <RadioGroup
                    value={uno}
                    onChange={handleRadio1Change}
                    row
                >
                    <FormControlLabel value="1" control={<Radio />} label="Sí" sx={{ color: "white" }}/>
                    <FormControlLabel value="0" control={<Radio />} label="No" sx={{ color: "white" }}/>
                </RadioGroup>
            </FormControl>

        <Typography  variant="h6" sx={{ color: 'white', marginBottom: '8px' }}>¿Por qué? </Typography>
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

            <Typography  variant="h6" sx={{ color: 'white', marginBottom: '8px' }}>¿Cómo calificas los esfuerzos de empresa por tu seguridad? </Typography>
            <FormControl>
                <RadioGroup
                    value={dos}
                    onChange={handleRadio2Change}
                    row
                >
                    <FormControlLabel value="1" control={<Radio />} label="Bueno" sx={{ color: "white" }}/>
                    <FormControlLabel value="0" control={<Radio />} label="Malo" sx={{ color: "white" }}/>
                </RadioGroup>
            </FormControl>

        <Typography  variant="h6" sx={{ color: 'white', marginBottom: '8px' }}>¿Por qué? </Typography>
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
            <Typography  variant="h6" sx={{ color: 'white', marginBottom: '8px' }}>¿Aplicas la calidad en tu área de trabajo? </Typography>
            <FormControl>
                <RadioGroup
                    value={tres}
                    onChange={handleRadio3Change}
                    row
                >
                    <FormControlLabel value="1" control={<Radio />} label="Si" sx={{ color: "white" }}/>
                    <FormControlLabel value="0" control={<Radio />} label="No" sx={{ color: "white" }}/>
                </RadioGroup>
            </FormControl>

        <Typography  variant="h6" sx={{ color: 'white', marginBottom: '8px' }}>Ejemplo </Typography>
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
            <Typography  variant="h6" sx={{ color: 'white', marginBottom: '8px' }}>¿Tienes dudas sobre el proceso de puertas abiertas? </Typography>
            <FormControl>
                <RadioGroup
                    row
                >
                    <FormControlLabel value="1" control={<Radio />} label="Sí" sx={{ color: "white" }}/>
                    <FormControlLabel value="0" control={<Radio />} label="No" sx={{ color: "white" }}/>
                </RadioGroup>
            </FormControl>

        <Typography  variant="h6" sx={{ color: 'white', marginBottom: '8px' }}>¿Cuáles? </Typography>
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
            <Typography  variant="h6" sx={{ color: 'white', marginBottom: '8px' }}>¿Tienes dudas sobre el proceso de disciplina progresiva? </Typography>
            <FormControl>
                <RadioGroup
                    value={cuatro}
                    onChange={handleRadio4Change}
                    row
                >
                    <FormControlLabel value="1" control={<Radio />} label="Sí" sx={{ color: "white" }}/>
                    <FormControlLabel value="0" control={<Radio />} label="No" sx={{ color: "white" }}/>
                </RadioGroup>
            </FormControl>

        <Typography  variant="h6" sx={{ color: 'white', marginBottom: '8px' }}>¿Cuáles? </Typography>
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
            <Typography  variant="h6" sx={{ color: 'white', marginBottom: '8px' }}>En mi área de trabajo: ¿se preocupan por mantener un buen clima y trabajar en equipo? </Typography>
            <FormControl>
                <RadioGroup
                    value={cinco}
                    onChange={handleRadio5Change}
                    row
                >
                    <FormControlLabel value="1" control={<Radio />} label="Sï" sx={{ color: "white" }}/>
                    <FormControlLabel value="0" control={<Radio />} label="No" sx={{ color: "white" }}/>
                </RadioGroup>
            </FormControl>

        <Typography  variant="h6" sx={{ color: 'white', marginBottom: '8px' }}>¿Por qué? </Typography>
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
            <Typography  variant="h6" sx={{ color: 'white', marginBottom: '8px' }}>¿Conozco los requisitos para el cambio de categorías? </Typography>
            <FormControl>
                <RadioGroup
                    value={seis}
                    onChange={handleRadio6Change}
                    row
                >
                    <FormControlLabel value="1" control={<Radio />} label="Sï" sx={{ color: "white" }}/>
                    <FormControlLabel value="0" control={<Radio />} label="No" sx={{ color: "white" }}/>
                </RadioGroup>
            </FormControl>

        <Typography  variant="h6" sx={{ color: 'white', marginBottom: '8px' }}>¿Por qué? </Typography>
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
            <Typography  variant="h6" sx={{ color: 'white', marginBottom: '8px' }}>¿Has ganado el bono de Equipos de trabajo? </Typography>
            <FormControl>
                <RadioGroup
                    value={siete}
                    onChange={handleRadio7Change}
                    row
                >
                    <FormControlLabel value="1" control={<Radio />} label="Sï" sx={{ color: "white" }}/>
                    <FormControlLabel value="0" control={<Radio />} label="No" sx={{ color: "white" }}/>
                </RadioGroup>
            </FormControl>

        <Typography  variant="h6" sx={{ color: 'white', marginBottom: '8px' }}>¿Con qué frecuencia? </Typography>
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
            <Typography  variant="h6" sx={{ color: 'white', marginBottom: '8px' }}>¿Consideras que requieres algún entrenamiento para el mejor desempeño de tu puesto? </Typography>
            <FormControl>
                <RadioGroup
                    value={ocho}
                    onChange={handleRadio8Change}
                    row
                >
                    <FormControlLabel value="1" control={<Radio />} label="Sí" sx={{ color: "white" }}/>
                    <FormControlLabel value="0" control={<Radio />} label="No" sx={{ color: "white" }}/>
                </RadioGroup>
            </FormControl>

        <Typography  variant="h6" sx={{ color: 'white', marginBottom: '8px' }}>¿Cuál? </Typography>
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
            <Typography  variant="h6" sx={{ color: 'white', marginBottom: '8px' }}>¿Podemos mejorar en algo? </Typography>
            <FormControl>
                <RadioGroup
                    row
                >
                    <FormControlLabel value="1" control={<Radio />} label="Sí" sx={{ color: "white" }}/>
                    <FormControlLabel value="0" control={<Radio />} label="No" sx={{ color: "white" }}/>
                </RadioGroup>
            </FormControl>

        <Typography  variant="h6" sx={{ color: 'white', marginBottom: '8px' }}>¿En qué? </Typography>
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
        <Typography  variant="h6" sx={{ color: 'white', marginBottom: '8px' }}>Comentarios adicionales </Typography>
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
        <Typography  variant="h6" sx={{ color: 'white', marginBottom: '8px' }}>Nombre de quien aplicó la encuesta </Typography>
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
        <Typography  variant="h6" sx={{ color: 'white', marginBottom: '8px' }}>Puesto </Typography>
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
        <Typography  variant="h6" sx={{ color: 'white', marginBottom: '8px' }}>Fecha </Typography>
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
            onClick={handleAddClick}>
                Agregar
            </button>
        </Box>
        </Box>
    </Box>
   );
}
