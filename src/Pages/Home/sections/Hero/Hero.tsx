import { useState } from 'react';
import { Box, Container, Grid, Typography, keyframes, styled } from "@mui/material";
import AvatarImg from "../../../../assets/Images/AvatarImg.jpg";
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import StyledButton from "../../../../Components/StyledButton/StyledButton";
import { AnimatedBackground } from "../../../../Components/AnimatedBackground/AnimatedBackground";
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

const moveAnimation = keyframes`
    0% {
        transform: translateX(-8px);
    }
    50% {
        transform: translateX(5px);
    }
    100% {
        transform: translateX(-8px);
    }
`;

const StyledHero = styled("div")(({ theme }) => ({
    backgroundColor: "#191924",
    height: "100vh",
    display: "flex",
    alignItems: "center",

    [theme.breakpoints.up('xs')]: {
        paddingTop: "100px"
    },

    [theme.breakpoints.up('md')]: {
        paddingTop: "0px"
    }
}));

const StyledImg = styled("img")(({ theme }) => ({
    width: "75%",
    borderRadius: "50%",
    border: `1px solid ${theme.palette.primary.contrastText}`,
    animation: `${moveAnimation} 10s ease-in-out infinite`,
}));

const StyledContactBox = styled(Box)(() => ({
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    zIndex: 999,
}));

const Hero = () => {
    const [showContactBox, setShowContactBox] = useState(false);

    const handleContactMeClick = () => {
        setShowContactBox(true);
    };

    const handleCloseContactBox = () => {
        setShowContactBox(false);
    };

    const handleBoxClick = (e: { stopPropagation: () => void; }) => {
        e.stopPropagation();
    };

    const handleDownloadPortfolio = () => {
        const url = "CV/Curriculo2.pdf"; 
        fetch(url)
            .then(response => response.blob())
            .then(blob => {
                const blobUrl = window.URL.createObjectURL(new Blob([blob]));
                const a = document.createElement('a');
                a.href = blobUrl;
                a.download = "portfolio.pdf"; 
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
            })
            .catch(error => console.error('Erro ao baixar o portfólio:', error));
    };

    return (
        <StyledHero id="home">
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid item xs={12} md={5}>
                        <Box position="relative">
                            <Box position="absolute" width="100%" top={-100} right={0}>
                                <AnimatedBackground />
                            </Box>
                            <Box position="relative" textAlign="center">
                                <StyledImg src={AvatarImg} />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={7}>
                        <Typography color="primary.contrastText" variant="h1" textAlign="center" pb={2}>Caio Vinicius</Typography>
                        <Typography color="primary.contrastText" variant="h2" textAlign="center">I'm a Front-End Jr Developer</Typography>
                        <Grid container justifyContent="center" spacing={3} pt={3}>
                            <Grid item xs={12} md={4} display="flex" justifyContent="center">
                                <StyledButton onClick={handleDownloadPortfolio}>
                                    <DownloadIcon />
                                    <Typography>Download Portfolio</Typography>
                                </StyledButton>
                            </Grid>
                            <Grid item xs={12} md={4} display="flex" justifyContent="center">
                                <StyledButton onClick={handleContactMeClick}>
                                    <EmailIcon />
                                    <Typography>Contact Me</Typography>
                                </StyledButton>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
            {showContactBox && (
                <StyledContactBox onClick={handleCloseContactBox}>
                    <Box bgcolor="rgba(25,25,36,0.9)" color="#fff" p={3} borderRadius={8} onClick={handleBoxClick}>
                        <Typography variant="h4" align="center">Contact Informations</Typography>
                        <Typography variant="body1" align="center" mt={2}><SiGmail /> caiorhcp12@gmail.com</Typography>
                        <Box display="flex" gap={15}>
                            <Typography variant="body1" align="center" mt={2}><a target="_blank" href="https://github.com/Caiorhcp"><FaGithub size={32} /></a></Typography>
                            <Typography variant="body1" align="center" mt={2}><a target="_blank" href="https://www.linkedin.com/in/caio-vinicius-710194185/"><FaLinkedin size={32} /></a></Typography>
                            <Typography variant="body1" align="center" mt={2}><a target="_blank" href="https://www.instagram.com/caiockll/"><FaInstagram size={32} /></a></Typography>
                        </Box>
                    </Box>
                </StyledContactBox>
            )}
        </StyledHero>
    );
};

export default Hero;
