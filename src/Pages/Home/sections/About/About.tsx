import { Container, Grid, Typography, styled, Tooltip } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from "@mui/material";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTypescript, SiFlutter, SiReact } from 'react-icons/si';
import { BsBootstrap } from 'react-icons/bs';

import TecImg from "../../../../assets/Images/TecImg.png";
import IntPImg from "../../../../assets/Images/IntPImg.png";

const StyledAbout = styled("div")(({ theme }) => ({
  minHeight: "100vh",
  backgroundColor: "#191924",
  padding: "50px 0",
  textAlign: "center",
  marginTop: "-160px",
  marginBottom: "-130px",

  [theme.breakpoints.up("xs")]: {
    padding: "250px 0",
  },
  [theme.breakpoints.up("md")]: {
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
                  Sobre Mim
                </Typography>
                <Typography color="primary.contrastText" variant="body1">
                  Minha trajetória no mundo da tecnologia é recente. Antes, eu cursava Economia, mas durante a pandemia uma antiga paixão ressurgiu. Nos tempos de escola, tive meu primeiro contato com programação em uma atividade no GameMaker, onde pude entender os conceitos básicos de lógica de programação. Desde então, sempre tive interesse por tecnologia, mesmo seguindo outro caminho por um tempo.
                </Typography>
                <Typography color="primary.contrastText" variant="body1">
                  Durante a pandemia, reacendi essa paixão ao voltar a mexer com GameMaker, o que me levou a mudar de área. Em 2023, iniciei um curso superior na área de tecnologia.
                </Typography>
                <Typography color="primary.contrastText" variant="body1">
                  Atualmente, sou apaixonado por desenvolvimento front-end e back-end, e estou começando meus estudos em Inteligência Artificial, algo que já estou adorando.
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
                      alt="Tecnologias"
                    />
                    <CardContent sx={{ backgroundColor: 'rgba(26,26,40,0.7)', color: 'white' }}>
                      <Typography gutterBottom variant="h5" component="div">
                        Tecnologias
                      </Typography>
                      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                        <Tooltip title="Node.js"><span><FaNodeJs aria-label="Node.js" style={{ fontSize: '48px', margin: '0 5px', color: '#8cc84b' }} /></span></Tooltip>
                        <Tooltip title="React Native"><span><SiReact aria-label="React Native" style={{ fontSize: '48px', margin: '0 5px', color: '#61dafb' }} /></span></Tooltip>
                        <Tooltip title="React.js"><span><FaReact aria-label="React.js" style={{ fontSize: '48px', margin: '0 5px', color: '#61dafb' }} /></span></Tooltip>
                        <Tooltip title="TypeScript"><span><SiTypescript aria-label="TypeScript" style={{ fontSize: '48px', margin: '0 5px', color: '#007acc' }} /></span></Tooltip>
                        <Tooltip title="JavaScript"><span><FaJs aria-label="JavaScript" style={{ fontSize: '48px', margin: '0 5px', color: '#f7df1e' }} /></span></Tooltip>
                        <Tooltip title="HTML5"><span><FaHtml5 aria-label="HTML5" style={{ fontSize: '48px', margin: '0 5px', color: '#e34c26' }} /></span></Tooltip>
                        <Tooltip title="CSS3"><span><FaCss3Alt aria-label="CSS3" style={{ fontSize: '48px', margin: '0 5px', color: '#1572b6' }} /></span></Tooltip>
                        <Tooltip title="Flutter"><span><SiFlutter aria-label="Flutter" style={{ fontSize: '48px', margin: '0 5px', color: '#02569b' }} /></span></Tooltip>
                        <Tooltip title="Bootstrap"><span><BsBootstrap aria-label="Bootstrap" style={{ fontSize: '48px', margin: '0 5px', color: '#7952b3' }} /></span></Tooltip>
                      </div>
                      <Typography variant="body2" sx={{ mt: 2 }}>
                        Experiência também com: Python, Java, MongoDB, PostgreSQL + Prisma, FastAPI, Vue.js, NestJS
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
                      alt="Imagem Pessoal"
                    />
                    <CardContent sx={{ backgroundColor: 'rgba(26,26,40,0.7)', color: 'white' }}>
                      <Typography gutterBottom variant="h5" component="div">
                        Habilidades Pessoais
                      </Typography>
                      <Typography variant="body2">
                        Metodologias Ágeis, Liderança, Flexibilidade, Escuta ativa, Empatia, Motivação, Comunicação, Trabalho em equipe
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