import { Grid,Box, Typography } from '@mui/material';
import { Element } from 'react-scroll';
import { CardForSkills } from './Card';


export const Skills = ()=>{

    return(
        <Element name = "skills">
        <Box  sx={{ background: '#ebecf1',p:'1rem' }}>
        <Box>
        <Typography sx={{ fontSize: '1.5rem', fontWeight: '500', color: '#5751E5' }}>SKILLS</Typography>
        <Typography sx={{ marginTop: '1rem', fontSize: '2rem', fontWeight: 'bold' }}>What I can do</Typography>
        </Box>
        
        <Grid container spacing={2} sx={{marginTop:'2rem'}}>
            <Grid item xs={12} md={3}>
                <CardForSkills title={"HTML"} img = {"/html.png"} />
            </Grid>
            <Grid item xs={12} md={3}>
                <CardForSkills title={"CSS"} img = {"/css.png"} />
            </Grid>
            <Grid item xs={12} md={3}>
                <CardForSkills title={"Javascript"} img = {"/javascript.png"} />
            </Grid>
            <Grid item xs={12} md={3}>
                <CardForSkills title={"React"} img = {"/react.png"} />
            </Grid>
            <Grid item xs={12} md={3}>
                <CardForSkills title={"Next"} img = {"/nextjs.png"} />
            </Grid>
            <Grid item xs={12} md={3}>
                <CardForSkills title={"Node"} img = {"/node.png"} />
            </Grid>
            <Grid item xs={12} md={3}>
                <CardForSkills title={"Express"} img = {"/express.png"} />
            </Grid>
            <Grid item xs={12} md={3}>
                <CardForSkills title={"Github"} img = {"/github1.png"} />
            </Grid>
            <Grid item xs={12} md={3}>
                <CardForSkills title={"PHP"} img = {"/php.png"} />
            </Grid>
            <Grid item xs={12} md={3}>
                <CardForSkills title={"MySQL"} img = {"/mySql.png"} />
            </Grid>
            <Grid item xs={12} md={3}>
                <CardForSkills title={"Redis"} img = {"/redis.png"} />
            </Grid>

        </Grid>
        </Box>
        </Element>
    )

}