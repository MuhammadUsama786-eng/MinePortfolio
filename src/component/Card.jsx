import { Grid,Box, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import Image from 'next/image'
import CardContent from '@mui/material/CardContent';

export const CardForSkills = ({title,img})=>{
    return(
        <Card sx={{ display: 'flex',gap:'4rem',boxShadow: '5px 6px 10px rgba(0, 0, 0, 0.1)',transition: "transform 0.5s","&:hover": {transform: "scale(1.1)"} }}>
        <Box sx={{marginTop:'1rem',paddingLeft: '1.5rem'}}>
            <Image
            src = {img}
            width ={40}
            height ={40}
          />
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column',paddingRight: '1rem' }}>
            <CardContent sx={{ flex: '1 0 auto'}}>
              <Typography sx={{marginTop:'1rem',fontSize:'12px', fontWeight:'bold'}}>
                {title}
              </Typography>
            </CardContent>
          
          </Box>
      
        </Card>
    ) 
}