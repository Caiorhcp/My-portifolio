import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import TecImg from "../../../assets/Images/TecImg.png";
import IntPImg from "../../../assets/Images/IntPImg.png";
import { CardActionArea, Container, Grid, styled } from "@mui/material";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTypescript, SiFlutter, SiReact } from 'react-icons/si';

const StyledSkills = styled("div")(({theme})=> ({
    position: "relative",
    overflow: "hidden",
    backgroundColor: "#191924",
    height: "75vh",
    width:"100%",

    [theme.breakpoints.up('xs')]: {
        paddingTop: "0px",
        height: "83vh",
    },

    [theme.breakpoints.up('md')]: {
        marginTop: "0px",
        height: "58vh",
    }
}));

const TextContainer = styled("div")(()=> ({
    textAlign: "center", 
    padding: "20px",
    margin:"10px",
    borderRadius: "50px",
    transition: "transform 0.9s",
    "&:hover": {
        transform: "translateY(-4px)",
    },
}));

const StyledSkills2 = styled("div")(()=> ({
    backgroundColor: "#191924",
    minHeight: "60px",
}));

export default function Skills() {
    return (
        <>
        <StyledSkills2 id='skills'></StyledSkills2>
        <StyledSkills>
            <Container maxWidth="md">
                <Grid container justifyContent="center" spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextContainer>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={TecImg}
                                        alt="TecImgSkills"
                                    />
                                    <CardContent sx={{ backgroundColor: 'rgba(26,26,40,0.7)', color:'white' }}>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Tecnologias
                                        </Typography>
                                        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                                            <FaNodeJs style={{ fontSize: '48px', margin: '0 5px', color: '#8cc84b' }} />
                                            <SiReact style={{ fontSize: '48px', margin: '0 5px', color: '#61dafb' }} /> {/* React Native */}
                                            <FaReact style={{ fontSize: '48px', margin: '0 5px', color: '#61dafb' }} /> {/* React.js */}
                                            <SiTypescript style={{ fontSize: '48px', margin: '0 5px', color: '#007acc' }} />
                                            <FaJs style={{ fontSize: '48px', margin: '0 5px', color: '#f7df1e' }} />
                                            <FaHtml5 style={{ fontSize: '48px', margin: '0 5px', color: '#e34c26' }} />
                                            <FaCss3Alt style={{ fontSize: '48px', margin: '0 5px', color: '#1572b6' }} />
                                            <SiFlutter style={{ fontSize: '48px', margin: '0 5px', color: '#02569b' }} />
                                        </div>
                                        <Typography variant="body2" sx={{ mt: 2 }}>
                                            Experiência também com: Python, Java, MongoDB, PostgreSQL + Prisma, FastAPI, Vue.js, NestJS
                                        </Typography>
                                        <Typography variant="body2" sx={{ mt: 2 }}>
                                            <b>2025 - Continuo</b><br />
                                            <b>Ministério Público</b><br />
                                            Função de contínuo, atendimento ao público, atender as demandas da promotoria.
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </TextContainer>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextContainer>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={IntPImg}
                                        alt="PersonalImg"
                                    />
                                    <CardContent sx={{ backgroundColor: 'rgba(26,26,40,0.7)', color:'white' }} >
                                        <Typography gutterBottom variant="h5" component="div" >
                                            Personal Skills
                                        </Typography>
                                        <Typography variant="body2" >
                                            Agile Methodology, Leadership, Flexibility, Active listening, Empathy, Motivation, Communication, Teamwork
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </TextContainer>
                    </Grid>
                </Grid>
            </Container>
        </StyledSkills>
        </>
    );
}