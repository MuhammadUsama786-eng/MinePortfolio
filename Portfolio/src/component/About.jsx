import { Grid,Box, Typography } from '@mui/material';
import Image from 'next/image'
import { Element } from 'react-scroll';

export const About = ()=>{

    return (
      <Element name = "about">
        <Box  sx={{ display: 'flex', background: '#ebecf1',p:'1rem' }}>
  <Grid container spacing={2}>
    <Grid item xs={12} md={8}>
      <Box>
        <Typography sx={{ fontSize: '1.5rem', fontWeight: '500', color: '#5751E5' }}>ABOUT</Typography>
        <Typography sx={{ marginTop: '1rem', fontSize: '2rem', fontWeight: 'bold' }}>Who I&apos;m</Typography>
        <Typography sx={{ opacity: '0.4', fontSize: '14px', marginTop: '1rem' }}>I&apos;m not your normal developer :)</Typography>
        <Typography sx={{ fontSize: '14px', marginTop: '1rem' }}>As a seasoned professional in the tech industry, I have amassed nearly two years of experience working with a multitude of stacks, ranging from the fundamentals of web development, such as HTML and CSS, to more complex technologies like JavaScript, jQuery, Next.js, Node.js, and Express.js. I am also well-versed in the realm of backend development, having worked extensively with PHP and MySQL, as well as familiarity with Redis, a popular in-memory data structure store</Typography>
        <Typography sx={{ fontSize: '14px', marginTop: '1rem' }}>Additionally, my proficiency in Git version control ensures a streamlined and organized approach to collaborative software development. With this breadth of technical knowledge and practical experience, I am confident in my ability to tackle a diverse range of challenges within the tech industry</Typography>
      </Box>
    </Grid>
    <Grid item xs={12} md={4}>
  <Box
    display="flex"
    justifyContent="center"
    sx={{
      border: "16px solid white",
      borderRadius: "5%",
      boxShadow: "2px 9px 15px 4px rgba(0, 0, 0, 0.5)",
      transition: "transform 0.5s",
      "&:hover": {
        transform: "scale(1.01)",
        
      },
    }}
  >
    <Image
      src="/laptop.jpg"
      alt="My Image"
      width={400}
      height={400}
      layout="responsive"
    />
  </Box>
</Grid>

  </Grid>
</Box>
</Element>
    )

}