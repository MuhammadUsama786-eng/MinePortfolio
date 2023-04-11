import { Grid,Box, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import Image from 'next/image'
import CardContent from '@mui/material/CardContent';
import { FaLinkedinIn,FaGithub } from "react-icons/fa";
import { AiOutlineMail } from 'react-icons/ai';
import { BsPersonLinesFill } from 'react-icons/bs';
import ContactForm from './contactForm';

export const Contact = ()=>{
    
   

    return(
        <Box sx={{ background: '#ebecf1', p:'1rem', display: 'flex', flexDirection: 'column', height: '100%' }}>
    
    <Box sx={{p:'1rem'}}>
             <Typography sx = {{color: '#5751E5',fontSize: '1.5rem',fontWeight: '500'}}>CONTACT</Typography>            
            <Typography sx = {{mt:'1rem',fontSize:'1.7rem',fontWeight:'bold'}}>Get In Touch</Typography>
     </Box>    
        <Grid container spacing={3}>
        
        <Grid item xs={12} lg={4} md={4}>
   
            <Card  sx={{background: '#ebecf1', mt:'1rem',display: 'flex',flexDirection:'column',gap:'4rem',border: "16px solid #ebecf1",borderRadius: "2%",boxShadow: "2px 9px 15px 4px rgba(0, 0, 0, 0.5)",transition: "transform 0.5s","&:hover": {transform: "scale(1.01)",} }}>
            <Box sx={{marginTop:'1rem'}}>
                <Image
                src = '/contact.jpg'
                alt="My Image"
                width={200}
                height={200}
                layout="responsive"
            />
            <Box>
                <Typography sx={{marginTop:'1rem',fontSize:'15px', fontWeight:'bold'}}>
                    Muhammad Usama
                </Typography>
            <Box>
                <Typography sx={{marginTop:'1rem',fontSize:'14px', fontWeight:'bold'}}>
                    FullStack Developer
                </Typography>
                <Box>
                    <Typography sx={{marginTop:'1rem',fontSize:'14px', fontWeight:'400'}}>
                    Let&apos;s connect! If you have a project in mind, want to collaborate, or simply have a question, don&apos;t hesitate to reach out to me. I&apos;m always open to new opportunities and love to hear from like-minded individuals. Looking forward to hearing from you!
                    </Typography>
                    <Box>
                        <Typography sx={{marginTop:'1rem',fontSize:'13px', fontWeight:'bold'}}>
                            CONNECT WITH ME
                        </Typography>
                        <Box sx = {{display:'flex',justifyContent:'center',mb:'2rem'}}>
                            <Box sx={{  display: 'flex',alignItems: 'center', boxShadow: '5px 6px 10px rgba(0, 0, 0, 0.1)',height: '4rem',width:'4rem', padding: '1.5rem',borderRadius: '50%',
                                transition: "transform 0.5s","&:hover": {transform: "scale(1.1)"}}}> <AiOutlineMail/> </Box>
                        </Box>  
                    </Box>
                </Box>
            </Box>
            </Box>
            </Box>
            </Card>
        </Grid>
        
        <Grid item xs={12} lg={8} md={8}>
            <Box sx={{background:"#ebecf1" ,p:'1rem'}}>
                <ContactForm/>
            </Box>
        </Grid>

        </Grid>
        </Box>
    )

} 