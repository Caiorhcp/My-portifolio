import { Container, Grid, Typography, styled } from "@mui/material";
import { keyframes } from "@emotion/react";
import AboutImg from "../../../../assets/Images/AboutImg.jpg";

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

const StyledAbout = styled("div")(({ theme }) => ({
  backgroundColor: "#191924",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  [theme.breakpoints.up("xs")]: {
    magin:"0px"
  },
  [theme.breakpoints.up("md")]: {
    paddingTop: "0px",
    marginTop:"-150px"

  },
}));

const TextContainer = styled("div")({
  textAlign: "left",
});

const StyledImg = styled("img")(({ theme }) => ({
  width: "100%",
  borderRadius: "23%",
  animation: `${moveAnimation} 2s ease-in-out infinite`,
  [theme.breakpoints.up("xs")]: {
    display: "none",
  },
  [theme.breakpoints.up("md")]: {
    paddingTop: "0px",
    display: "block",
  },
}));

const About = () => {
  return (
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
            <StyledImg src={AboutImg} />
          </Grid>
        </Grid>
      </Container>
    </StyledAbout>
  );
}

export default About;
