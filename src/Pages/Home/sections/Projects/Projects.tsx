import React from "react";
import { Box, Button, Container, Grid, Typography, styled } from "@mui/material";
import SASSImg from "../../../../assets/Images/SASSImg.png";
import CalculatorImg from "../../../../assets/Images/CalculatorImg.png";
import TodoListIMG from "../../../../assets/Images/TodoList.png"

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
    backgroundColor: "rgba(0, 0, 0, 0.5)", 
    borderRadius: "8px",
    overflow: "hidden", 
  }));

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

  return (
    <>
      <StyledProjects2 id="projects"></StyledProjects2>
      <StyledProjects>
        <Container maxWidth="lg">
          <Typography color="primary.contrastText" variant="h1" textAlign="center" pb={2}>
            Projects
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} md={4}>
              <Typography color="primary.contrastText" textAlign="center" pb={2}>
                SASS Project, Landing Page
              </Typography>
              <BoxWithImage>
                <StyledImg src={SASSImg} />
                <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                  <StyledButton href="https://github.com/Caiorhcp/Sass-project">Code</StyledButton>
                  <StyledButton href="#">Test</StyledButton>
                </Box>
              </BoxWithImage>
              <Typography color="primary.contrastText" textAlign="center" pb={2}>
                Design of a responsive landing page, made using SASS to ensure a coherent design.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography color="primary.contrastText" textAlign="center" pb={2}>
                Calculator Project
              </Typography>
              <BoxWithImage>
                <StyledImg src={CalculatorImg} />
                <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                  <StyledButton href="https://github.com/Caiorhcp/Calculadora-js">Code</StyledButton>
                  <StyledButton href="#">Test</StyledButton>
                </Box>
              </BoxWithImage>
              <Typography color="primary.contrastText" textAlign="center" pb={2}>
                Project of a calculator made in JavaScript to meet the basic functions of a calculator.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography color="primary.contrastText" textAlign="center" pb={2}>
                Todo-List
              </Typography>
              <BoxWithImage>
                <StyledImg src={TodoListIMG} />
                <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                  <StyledButton href="https://github.com/Caiorhcp/Gerenciador-de-tarefas-ToDo-List">Code</StyledButton>
                  <StyledButton href="#">Test</StyledButton>
                </Box>
              </BoxWithImage>
              <Typography color="primary.contrastText" textAlign="center" pb={2}>
                Personal project for manipulating arrays via JavaScript language, to create a task manager. Create tasks and edit or remove them.
              </Typography>
            </Grid>
              <Typography color="primary.contrastText" textAlign="center" pb={2}>
                Other projects in my <a target="blank" href="https://github.com/Caiorhcp">GitHub</a>
              </Typography>
          </Grid>
        </Container>
      </StyledProjects>
    </>
  );
};

export default Projects;
