import { Container, Grid, Typography, styled } from "@mui/material";
import { keyframes } from "@emotion/react";

const pulseAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

const techBackgroundAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const Skills = () => {

    const StyledSkills = styled("div")(()=> ({
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#191924",
        height: "120vh",
        width:"100%",
        boxShadow: "0 8px 16px rgba(0,0,0,0.3)",
        animation: `${techBackgroundAnimation} 20s linear infinite alternate`,
        
    }));


    const StyledSkills2 = styled("div")(()=> ({
        backgroundColor: "#191924",
        minHeight: "60px",
    }));

    const TextContainer = styled("div")(({ theme })=> ({
        textAlign: "center",
        padding: "20px",
        margin:"10px",
        borderRadius: "50px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
        transition: "background-color 0.3s, transform 0.3s",
        "&:hover": {
        backgroundColor: theme.palette.secondary.main,
        transform: "scale(1.05)",
        },
        animation: `${pulseAnimation} 2s infinite`,
    }));

    const InnerGrid = styled(Grid)({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap:"1.5px",
        
    });

    return (
        <>
        <StyledSkills2 id="skills"></StyledSkills2>
        <StyledSkills >
            <Container maxWidth="md">
                <Grid container justifyContent="center" spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextContainer>
                            <Typography color="primary.contrastText" variant="h3" gutterBottom>
                                Skills
                            </Typography>
                            <InnerGrid container direction="column" spacing={1}>
                                <Grid item>
                                    <Typography color="primary.contrastText" variant="body1">
                                        HTML
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography color="primary.contrastText" variant="body1">
                                        CSS
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography color="primary.contrastText" variant="body1">
                                        SASS
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography color="primary.contrastText" variant="body1">
                                        JAVASCRIPT
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography color="primary.contrastText" variant="body1">
                                        TYPESCRIPT
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography color="primary.contrastText" variant="body1">
                                        REACT
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography color="primary.contrastText" variant="body1">
                                        MYSQL
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography color="primary.contrastText" variant="body1">
                                        TAILWIND
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography color="primary.contrastText" variant="body1">
                                        GIT AND GITHUB
                                    </Typography>
                                </Grid>
                            </InnerGrid>
                        </TextContainer>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextContainer>
                            <Typography color="primary.contrastText" variant="h3" gutterBottom>
                                Interpersonal
                            </Typography>
                            <InnerGrid container direction="column" spacing={1}>
                                <Grid item>
                                    <Typography color="primary.contrastText" variant="body1">
                                        Agile Methodology
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography color="primary.contrastText" variant="body1">
                                        Leadership
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography color="primary.contrastText" variant="body1">
                                        Flexibility
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography color="primary.contrastText" variant="body1">
                                        Active listening.
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography color="primary.contrastText" variant="body1">
                                        Empathy
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography color="primary.contrastText" variant="body1">
                                        Motivation
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography color="primary.contrastText" variant="body1">
                                        Communication
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography color="primary.contrastText" variant="body1">
                                        Teamwork
                                    </Typography>
                                </Grid>
                            </InnerGrid>
                        </TextContainer>
                    </Grid>
                </Grid>
            </Container>
        </StyledSkills>
        </>
    );
}

export default Skills;
