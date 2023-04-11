
import { Box, Typography } from '@mui/material';
import { FaLinkedinIn,FaGithub } from "react-icons/fa";
import { AiOutlineMail } from 'react-icons/ai';
import { BsPersonLinesFill } from 'react-icons/bs';

const Main = ()=>{

  const roundedBox = `
  .roundedBox{
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 5px 6px 10px rgba(0, 0, 0, 0.1);
    height: 4rem;
    width:4rem;
    border-radius: 50%;
    padding: 1.5rem;
  }
  `;

return (
<Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh',background:"#ebecf1" ,p:'1rem'}}>
  <Box sx={{ maxWidth: '600px', textAlign: 'center' }}>
    <Typography  sx={{ fontSize: '14px' ,backgroundColor:'#cbcbcb' }} component='span'>LET'S BUILD SOMETHING TOGEHTER</Typography>
    <Box sx={{ mt: 2 }}>
      <Typography variant="h2" sx={{ fontSize: '35px' }}>
        Hi, I'm <span style={{ color: "#5651e5" }}>Usama</span>
      </Typography>
      <Box sx={{ mt: 2 }}>
        <Typography variant="h2" sx={{ fontSize: '35px' }}>A Full-Stack Web Developer</Typography>
        <Box sx={{ mt: 2 }}>
          <Typography variant="body1" sx={{ fontSize: '14px' }}>
            As a Full Stack Web Developer with a Bachelor's degree in Computer Science, I am committed to being a proficient problem solver. I
            have a strong educational background that has provided me with the skills and knowledge needed to tackle complex challenges in the
            web development industry. I am constantly seeking to expand my knowledge and skillset, and I am eager to learn and implement new
            technologies in my work. My passion for web development drives me to find efficient and effective solutions to any problem that
            arises. Overall, my professional approach to web development is focused on delivering high-quality work that meets or exceeds my
            clients' expectations. I am dedicated to staying up-to-date with the latest trends and technologies in the field.
          </Typography>
          <Box sx = {{display:'flex',gap:'2.5rem',mt: 4,justifyContent:'center'}}>
            <style jsx>{roundedBox}</style>
              <Box className = 'roundedBox' sx={{transition: "transform 0.5s","&:hover": {transform: "scale(1.1)"}}}> <FaLinkedinIn/> </Box>
              <Box className = 'roundedBox' sx={{transition: "transform 0.5s","&:hover": {transform: "scale(1.1)"}}}>  <FaGithub/> </Box>
              <Box className = 'roundedBox' sx={{transition: "transform 0.5s","&:hover": {transform: "scale(1.1)"}}}> <AiOutlineMail/> </Box>
              <Box className = 'roundedBox' sx={{transition: "transform 0.5s","&:hover": {transform: "scale(1.1)"}}}> <BsPersonLinesFill/> </Box>
          </Box>         
        </Box>
      </Box>
    </Box>
  </Box>
</Box>
)
}

export default Main