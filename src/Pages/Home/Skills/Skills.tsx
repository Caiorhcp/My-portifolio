import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Container, Grid, styled } from "@mui/material";
import { FaHtml5, FaCss3Alt, FaSass, FaJs, FaReact } from 'react-icons/fa';
import { SiTypescript, SiMysql, SiTailwindcss, SiGithub } from 'react-icons/si';

const StyledSkills = styled("div")(()=> ({
    position: "relative",
    overflow: "hidden",
    backgroundColor: "#191924",
    height: "70vh",
    width:"100%",
}));

const TextContainer = styled("div")(()=> ({
    textAlign: "center",
    padding: "20px",
    margin:"10px",
    borderRadius: "50px",
    transition: "transform 0.9s",
    "&:hover": {
        transform: "translateY(-15px)",
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
                                        image="/src/assets/Images/TecImg.png"
                                        alt="TecImgSkills"
                                    />
                                    <CardContent sx={{ backgroundColor: 'rgba(26,26,40,0.7)', color:'white' }}>
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
                                            <SiMysql style={{ fontSize: '48px', margin: '0 5px' }} />
                                            <SiTailwindcss style={{ fontSize: '48px', margin: '0 5px' }} />
                                            <SiGithub style={{ fontSize: '48px', margin: '0 5px' }} />
                                        </div>
                                        <Typography variant="body2">
                                        Middle experience in web Design and Front-End.
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
                                        image="/src/assets/Images/IntPImg.png"
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
