import React from 'react'
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { Typography } from '@mui/material';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import InfoIcon from '@mui/icons-material/Info';

export default function SelectedListItem() {
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <Box sx={{ width: '100%', maxWidth:'1000px', bgcolor: 'background.paper',justifyContent:'center',display:'flex',flexDirection:'column',margin:'auto',marginTop:'20px', backgroundColor:'gray'}}>
      <Box sx={{width:'auto',justifyContent:'center',display:'flex', backgroundColor:'red', padding:'20px'}}>
      <Typography variant='h3'>
        <InfoIcon sx={{ verticalAlign: 'middle', marginRight: '12px', fontSize:'3rem', color:'white' }} />
        Riesgos
        <InfoIcon sx={{ verticalAlign: 'middle', marginLeft: '12px', fontSize:'3rem',color:'white'}} />
      </Typography>  
      </Box>

      <List component="nav" aria-label="main mailbox folders" sx={{padding:'0.5rem'}}>
        <Typography variant='h5'>
        <PanoramaFishEyeIcon sx={{ verticalAlign: 'middle', marginRight: '8px', fontSize:'medium' }} />
        The Typography component uses the variantMapping prop to associate a UI variant with a semantic element. It's important to realize that the style of a typography component is independent from the semantic underlying element.
        </Typography>

        <Typography variant='h5'>
        <PanoramaFishEyeIcon sx={{ verticalAlign: 'middle', marginRight: '8px', fontSize:'medium' }} />
          The Typography component uses the variantMapping prop to associate a UI variant with a semantic element. It's important to realize that the style of a typography component is independent from the semantic underlying element.
        </Typography> 

        <Typography variant='h5'>
        <PanoramaFishEyeIcon sx={{ verticalAlign: 'middle', marginRight: '8px', fontSize:'medium' }} />
        The Typography component uses the variantMapping prop to associate a UI variant with a semantic element. It's important to realize that the style of a typography component is independent from the semantic underlying element.
        </Typography> 
 
          <Typography variant='h5'>
          <PanoramaFishEyeIcon sx={{ verticalAlign: 'middle', marginRight: '8px', fontSize:'medium' }} />
          The Typography component uses the variantMapping prop to associate a UI variant with a semantic element. It's important to realize that the style of a typography component is independent from the semantic underlying element.
        </Typography> 
      </List>
    </Box>
  );
}
  