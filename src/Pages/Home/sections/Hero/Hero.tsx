import { Container, Grid, Typography, styled } from "@mui/material"
import AvatarImg from "../../../../assets/Images/AvatarImg.jpg"
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import StyledButton from "../../../../Components/StyledButton/StyledButton";
import theme from "../../../../theme";

const Hero= () => {

    const StyledHero = styled("div")(({theme})=> ({
        backgroundColor: theme.palette.primary.main,
        height:"100vh",
        display:"flex",
        alignItems:"center"

    }))

    const StyledImg = styled("img")(()=> ({
    width: "70%",
    borderRadius: "50%",
    border:`1px solid ${theme.palette.primary.contrastText}`
    
    }))


    return (
        <StyledHero>
            <Container maxWidth="lg">
                <Grid item container spacing={2}>
                <Grid item xs={12} md={5} >
                    <StyledImg src={AvatarImg}/>
                </Grid>
                <Grid item xs={12} md={7}>
                    <Typography color="primary.contrastText" variant="h1" textAlign="center">Caio Vinicius </Typography>
                    <Typography color="primary.contrastText" variant="h2" textAlign="center">I'm a Front-End Jr Developer </Typography>
                    <Grid container display="flex" justifyContent="center" spacing={3}>
                    <Grid item xs={12} md={4} display="flex" justifyContent="center">
                    
                        <StyledButton>
                        <DownloadIcon/>
                        <Typography>Download CV</Typography>
                        </StyledButton>
            
                    </Grid>
                    
                    <Grid item xs={12} md={4} display="flex" justifyContent="center">
                    <StyledButton>
                        <EmailIcon/>
                        <Typography>Contact Me</Typography>
                        </StyledButton>
                    </Grid>
                    </Grid>
                    
                    
                </Grid>
                </Grid>
            </Container>
        </StyledHero>
        
    )
}

export default Hero
