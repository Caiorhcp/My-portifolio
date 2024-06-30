import { Container, Grid, Typography, styled } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from "@mui/material";
import { FaHtml5, FaCss3Alt, FaSass, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTypescript, SiMysql, SiTailwindcss, SiGithub } from 'react-icons/si';
import TecImg from "../../../../assets/Images/TecImg.png";
import IntPImg from "../../../../assets/Images/IntPImg.png";

const StyledAbout = styled("div")(({ theme }) => ({
  backgroundColor: "#191924",
  padding: "50px 0", 
  textAlign: "center",
  marginTop:"-160px",
  marginBottom: "-130px",

  [theme.breakpoints.up("xs")]: {
    padding: "100px 0", 
  },
}));



const TextContainer = styled("div")({
  textAlign: "left",
});

const TextContainerCenter = styled("div")(() => ({
  textAlign: "center",
  padding: "20px",
  margin: "10px",
  borderRadius: "50px",
  transition: "transform 0.9s",
  "&:hover": {
    transform: "translateY(-4px)",
  },
}));

const About = () => {
  return (
    <>
    <StyledAbout id="about">
      <Container maxWidth="md">
        <Grid container justifyContent="center" spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextContainer>
              <Typography color="primary.contrastText" variant="h3" gutterBottom>
                About Me
              </Typography>
              <Typography color="primary.contrastText" variant="body1">
                My journey in the world of technology is quite recent. Previously, I was studying Economics, but during the pandemic, an old passion resurfaced. During my school days, I had my first contact with programming in an activity on GameMaker, where I could understand the basics of programming logic for the first time. Since then, I've had an interest in technology, although I later followed a different path.
              </Typography>
              <Typography color="primary.contrastText" variant="body1">
                During the pandemic, I was able to reignite this passion by diving back into GameMaker, which led me to change my area of study. In 2023, I enrolled in a higher education course in the technology field.
              </Typography>
              <Typography color="primary.contrastText" variant="body1">
                At the moment, I'm passionate about front-end development and starting my studies in Artificial Intelligence, something I'm already loving.
              </Typography>
            </TextContainer>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextContainerCenter>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={TecImg}
                    alt="TecImgSkills"
                  />
                  <CardContent sx={{ backgroundColor: 'rgba(26,26,40,0.7)', color: 'white' }}>
                    <Typography gutterBottom variant="h5" component="div">
                      Skills
                    </Typography>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                      <FaHtml5 style={{ fontSize: '48px', margin: '0 5px' }} />
                      <FaCss3Alt style={{ fontSize: '48px', margin: '0 5px' }} />
                      <FaSass style={{ fontSize: '48px', margin: '0 5px' }} />
                      <FaJs style={{ fontSize: '48px', margin: '0 5px' }} />
                      <SiTypescript style={{ fontSize: '48px', margin: '0 5px' }} />
                      <FaReact style={{ fontSize: '48px', margin: '0 5px' }} />
                      <FaNodeJs style={{ fontSize: '48px', margin: '0 5px' }} />
                      <FaReact style={{ fontSize: '48px', margin: '0 5px' }} />
                      <SiMysql style={{ fontSize: '48px', margin: '0 5px' }} />
                      <SiTailwindcss style={{ fontSize: '48px', margin: '0 5px' }} />
                      <SiGithub style={{ fontSize: '48px', margin: '0 5px' }} />
                    </div>
                    <Typography variant="body2">
                      FullStack development
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
              <Card sx={{ maxWidth: 345, marginTop: 2 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={IntPImg}
                    alt="PersonalImg"
                  />
                  <CardContent sx={{ backgroundColor: 'rgba(26,26,40,0.7)', color: 'white' }}>
                    <Typography gutterBottom variant="h5" component="div">
                      Personal Skills
                    </Typography>
                    <Typography variant="body2">
                      Agile Methodology, Leadership, Flexibility, Active listening, Empathy, Motivation, Communication, Teamwork
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </TextContainerCenter>
          </Grid>
        </Grid>
      </Container>
    </StyledAbout>
    </>
  );
};

export default About;
