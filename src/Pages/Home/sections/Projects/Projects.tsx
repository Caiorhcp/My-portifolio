import { Box, Container, Grid, Typography, styled } from "@mui/material";
import SASSImg from "../../../../assets/Images/SASSImg.png";
import CalculatorImg from "../../../../assets/Images/CalculatorImg.png";
import UnderCImg from "../../../../assets/Images/UnderCImg.png";


const Projects = () => {
  const StyledProjects = styled("div")(() => ({
    backgroundColor: "#191924",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  }));

  
  const StyledProjects2 = styled("div")(() => ({
    backgroundColor: "#191924",
    minHeight: "60px",
  }));


  const StyledImg = styled("img")(() => ({
    width: "100%",
    maxWidth: "100%",
    height: "auto",
    borderRadius: "8px",
  }));

  const BoxWithImage = styled(Box)(({ theme }) => ({
    position: "relative",
    width: "100%",
    maxWidth: "400px",
    margin: "0 auto",
    marginBottom: theme.spacing(2),
    "&::after": {
      content: "''",
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      border: `2px solid ${theme.palette.primary.main}`,
      borderRadius: "8px",
    },
  }));

  return (
    <> 
    <StyledProjects2 id="projects">
    </StyledProjects2>
    <StyledProjects>
      <Container maxWidth="lg" >
        <Typography color="primary.contrastText" variant="h1" textAlign="center" pb={2} >
          Projects
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} md={4}>
          <Typography color="primary.contrastText" textAlign="center" pb={2} >SASS Project, Landing Page</Typography>
            <BoxWithImage>
              <StyledImg src={SASSImg}/>
            </BoxWithImage>
            <Typography color="primary.contrastText" textAlign="center" pb={2} >
Design of a responsive landing page, made using SASS to ensure a coherent design.</Typography>
          </Grid>
          <Grid item xs={12} md={4}>
          <Typography color="primary.contrastText" textAlign="center" pb={2} >Calculator Project</Typography>
            <BoxWithImage>
              <StyledImg src={CalculatorImg} />
            </BoxWithImage>
            <Typography color="primary.contrastText" textAlign="center" pb={2} >Project of a calculator made in JavaScript to meet the basic functions of a calculator.</Typography>
          </Grid>
          <Grid item xs={12} md={4}>
              <Typography color="primary.contrastText" textAlign="center" pb={2} > Another projects in my <a href="https://github.com/Caiorhcp">GitHub</a></Typography>
            <BoxWithImage>
              <StyledImg src={UnderCImg}/>
            </BoxWithImage>
          </Grid>
        </Grid>
      </Container>
    </StyledProjects>
    </>
  );
};

export default Projects;
