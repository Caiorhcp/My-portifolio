import {  Container, Typography, styled } from "@mui/material";
import theme from "../../../../theme";
/*import SASSImg from "../../../../assets/Images/SASSImg.png";*/
/*import CalculatorImg from "../../../../assets/Images/CalculatorImg.png";*/
/*import TodoListIMG from "../../../../assets/Images/TodoList.png"*/

const Projects = () => {
  const StyledProjects = styled("div")(() => ({
    backgroundColor: "#191924",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: theme.spacing(8), 
  }));

/*
  const StyledImg = styled("img")(() => ({
    width: "100%",
    maxWidth: "100%",
    height: "auto",
    borderRadius: "8px",
  }));
  */

  /*
  const BoxWithImage = styled(Box)(({ theme }) => ({
    position: "relative",
    width: "100%",
    maxWidth: "400px",
    margin: "0 auto",
    marginBottom: theme.spacing(2),
    backgroundColor: "rgba(0, 0, 0, 0.5)", 
    borderRadius: "8px",
    overflow: "hidden", 
  }));
  */

  /*
  const StyledButton = styled(Button)(({ theme }) => ({
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.secondary.main, 
    border: `2px solid ${theme.palette.primary.main}`,
    borderRadius: "4px",
    padding: theme.spacing(1, 2),
    margin: theme.spacing(1),
    transition: "background-color 0.3s ease",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
    "&:active": {
      backgroundColor: theme.palette.secondary.dark, 
    },
  }));
  */

  const FloatingText = styled(Typography)({
    display: 'inline-block',
    animation: 'float 2s infinite',
    fontWeight: 'bold',
    color: '#FFD700', 
    fontSize: '1.5rem',
    marginTop: '20px',
    '@keyframes float': {
      '0%': { transform: 'translatey(0px)' },
      '50%': { transform: 'translatey(20px)' },
      '100%': { transform: 'translatey(0px)' },
    },
  });


  return (
    <>
      <StyledProjects id="projects">
  <Container maxWidth="lg">
    <Typography color="primary.contrastText" variant="h1" textAlign="center" pb={2}>
      Projects
    </Typography>
    <FloatingText>
      News Coming Soon...
    </FloatingText>
  </Container>
</StyledProjects>
    </>
  );
};

export default Projects;
